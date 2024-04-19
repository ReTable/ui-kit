import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Tree as BaseTree, TreeBranch, TreeNode } from '@tabula/tree-utils';

import { UiCheckboxTree, UiCheckboxTreeProps } from '~';

// region Types

export type Leaf = {
  id: number;
};

export type Tree = BaseTree<Leaf>;

// endregion

// region Factories

export function leafOf(id: number): Leaf {
  return { id };
}

export function branchOf(id: number, children: Array<TreeNode<Leaf>> = []): TreeBranch<Leaf> {
  return { id, children };
}

// endregion

// region Render

type Options = Pick<UiCheckboxTreeProps<Leaf>, 'tree'>;

type RenderTreeResult = {
  toggle: (id: number) => void;
  rerender: (options?: Omit<Options, 'tree'>) => void;
};

function labelOf(node: Leaf) {
  return 'children' in node ? `Branch ${node.id}` : `Leaf ${node.id}`;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function onChange() {}

const selected = new Set<number>();

export function renderTree({ tree }: Options): RenderTreeResult {
  const { rerender } = render(
    <UiCheckboxTree
      labelOf={labelOf}
      onChange={onChange}
      tree={tree}
      selected={selected}
      testId="tree"
    />,
  );

  return {
    toggle(id) {
      const button = screen.queryByTestId(`tree--items--${id}--toggle`);

      if (button == null) {
        throw new Error(`Couldn't find a toggle button for branch with id ${id}`);
      }

      fireEvent.click(button);
    },

    rerender(_ = {}) {
      rerender(
        <UiCheckboxTree
          labelOf={labelOf}
          onChange={onChange}
          tree={tree}
          selected={selected}
          testId="tree"
        />,
      );
    },
  };
}

// endregion Render

// region Verify

export type LeafItem = {
  id: number;

  isChecked: boolean;
};

export type BranchItem = {
  id: number;

  isChecked: boolean;
  isIndeterminate: boolean;
};

export type PipelineItem = LeafItem | BranchItem;

function verifyLeaf(node: Node, { id, isChecked }: LeafItem) {
  const name = `Leaf ${id}`;
  const testId = `tree--items--${id}--checkbox`;

  expect(
    node,
    `Leaf with id ${id} should have testid attribute with ${testId} value`,
  ).toHaveAttribute('data-testid', testId);

  const input = screen.queryByTestId(`${testId}--input`);

  expect(input).not.toBeNull();

  expect(node, `Leaf with id ${id} should have an input`).toContain(input);

  if (input == null) {
    return;
  }

  if (isChecked) {
    expect(input, `Leaf with id ${id} should have an input which is checked`).toBeChecked();
  } else {
    expect(input, `Leaf with id ${id} should have an input which isn't checked`).not.toBeChecked();
  }

  const content = screen.queryByTestId(`${testId}--content`);

  expect(content).not.toBeNull();

  expect(node, `Leaf with id ${id} should have a content`).toContain(content);

  if (content == null) {
    return;
  }

  expect(content, `Leaf with id ${id} should have a content with ${name}`).toHaveTextContent(name);
}

function verifyBranch(node: Node, { id, isChecked, isIndeterminate }: BranchItem) {
  const name = `Branch ${id}`;
  const testId = `tree--items--${id}`;

  expect(
    node,
    `Branch with id ${id} should have testid attribute with ${testId} value`,
  ).toHaveAttribute('data-testid', testId);

  const input = screen.queryByTestId(`${testId}--checkbox--input`);

  expect(input).not.toBeNull();

  expect(node, `Branch with id ${id} should have an input`).toContain(input);

  if (input == null) {
    return;
  }

  if (isChecked) {
    expect(input, `Branch with id ${id} should have an input which is checked`).toBeChecked();
  } else {
    expect(
      input,
      `Branch with id ${id} should have an input which isn't checked`,
    ).not.toBeChecked();
  }

  if (isIndeterminate) {
    expect(
      input,
      `Branch with id ${id} should have an input which is indeterminate`,
    ).toHaveAttribute('indeterminate');
  } else {
    expect(
      input,
      `Branch with id ${id} should have an input which isn't indeterminate`,
    ).not.toHaveAttribute('indeterminate');
  }

  const content = screen.queryByTestId(`${testId}--checkbox--content`);

  expect(content).not.toBeNull();

  expect(node, `Branch with id ${id} should have a content`).toContain(content);

  if (content == null) {
    return;
  }

  expect(content, `Branch with id ${id} should have a content with ${name}`).toHaveTextContent(
    name,
  );
}

type LeafBuilder = (leaf: LeafItem) => void;

type BranchBuilder = (branch: BranchItem) => void;

type Builder = {
  leaf: LeafBuilder;
  branch: BranchBuilder;
};

type Build = (builder: Builder) => void;

export function verify(build?: Build): void {
  const items: PipelineItem[] = [];

  const builder: Builder = {
    leaf(item) {
      items.push(item);
    },

    branch(branch) {
      items.push(branch);
    },
  };

  build?.(builder);

  const root = screen.queryByTestId('tree');

  expect(root, 'The tree should be rendered').not.toBeNull();

  if (root == null) {
    return;
  }

  const treeRoot = screen.queryByTestId('tree--items');

  expect(treeRoot, 'The tree items should be rendered').not.toBeNull();

  if (treeRoot == null) {
    return;
  }

  const { childNodes } = treeRoot;

  expect(
    childNodes.length,
    `Expected ${items.length} child nodes, but given ${childNodes.length}`,
  ).toBe(items.length);

  for (let idx = 0; idx < childNodes.length; idx += 1) {
    const node = childNodes.item(idx);
    const item = items[idx];

    if ('isIndeterminate' in item) {
      verifyBranch(node, item);
    } else {
      verifyLeaf(node, item);
    }
  }
}

// endregion Verify
