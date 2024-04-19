import { fireEvent, render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import { Tree as BaseTree, TreeBranch, TreeNode } from '@tabula/tree-utils';

import { UiTree, UiTreeProps } from '~';

import { Branch as BranchComponent } from './Branch';
import { Leaf as LeafComponent } from './Leaf';

// region Types

export type Leaf = {
  id: number;

  name: string;
};

export type Tree = BaseTree<Leaf>;

// endregion

// region Factories

export function leafOf(id: number): Leaf {
  return { id, name: `Leaf ${id}` };
}

export function branchOf(id: number, children: Array<TreeNode<Leaf>> = []): TreeBranch<Leaf> {
  return { id, name: `Branch ${id}`, children };
}

// endregion

// region Render

type Options = Pick<UiTreeProps<Leaf>, 'tree' | 'match' | 'pattern'>;

type RenderTreeResult = {
  toggle: (id: number) => void;
  rerender: (options?: Omit<Options, 'tree'>) => void;
};

export function renderTree({ match, pattern, tree }: Options): RenderTreeResult {
  const { rerender } = render(
    <UiTree
      branch={BranchComponent}
      leaf={LeafComponent}
      match={match}
      pattern={pattern}
      testId="tree"
      tree={tree}
    />,
  );

  return {
    toggle(id) {
      const button = screen.queryByTestId(`tree--${id}--toggle`);

      if (button == null) {
        throw new Error(`Couldn't find a toggle button for branch with id ${id}`);
      }

      fireEvent.click(button);
    },

    rerender(props = {}) {
      rerender(
        <UiTree
          branch={BranchComponent}
          leaf={LeafComponent}
          match={props.match}
          pattern={props.pattern}
          testId="tree"
          tree={tree}
        />,
      );
    },
  };
}

// endregion Render

// region Verify

export type LeafItem = {
  id: number;

  level: number;
};

export type BranchItem = {
  id: number;

  isExpanded: boolean;
  level: number;
};

export type PipelineItem = LeafItem | BranchItem;

function verifyLeaf(node: Node, { id, level }: LeafItem) {
  const name = `Leaf ${id}`;
  const testId = `tree--${id}`;

  expect(node, `Leaf with id ${id} should have id attribute with ${id} value`).toHaveAttribute(
    'data-id',
    id.toString(),
  );

  expect(node, `Leaf with id ${id} should have name attribute with ${name} value`).toHaveAttribute(
    'data-name',
    name,
  );

  expect(
    node,
    `Leaf with id ${id} should have level attribute with ${level} value`,
  ).toHaveAttribute('data-level', level.toString());

  expect(
    node,
    `Leaf with id ${id} should have testid attribute with ${testId} value`,
  ).toHaveAttribute('data-testid', testId);
}

function verifyBranch(node: Node, { id, level, isExpanded }: BranchItem) {
  const name = `Branch ${id}`;
  const testId = `tree--${id}`;

  expect(node, `Branch with id ${id} should have id attribute with ${id} value`).toHaveAttribute(
    'data-id',
    id.toString(),
  );

  expect(
    node,
    `Branch with id ${id} should have name attribute with ${name} value`,
  ).toHaveAttribute('data-name', name);

  expect(
    node,
    `Branch with id ${id} should have is-expanded attribute with ${isExpanded} value`,
  ).toHaveAttribute('data-is-expanded', isExpanded.toString());

  expect(
    node,
    `Branch with id ${id} should have level attribute with ${level} value`,
  ).toHaveAttribute('data-level', level.toString());

  expect(
    node,
    `Branch with id ${id} should have testid attribute with ${testId} value`,
  ).toHaveAttribute('data-testid', testId);
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

  const { childNodes } = root;

  expect(
    childNodes.length,
    `Expected ${items.length} child nodes, but given ${childNodes.length}`,
  ).toBe(items.length);

  for (let idx = 0; idx < childNodes.length; idx += 1) {
    const node = childNodes.item(idx);
    const item = items[idx];

    if ('isExpanded' in item) {
      verifyBranch(node, item);
    } else {
      verifyLeaf(node, item);
    }
  }
}

// endregion Verify
