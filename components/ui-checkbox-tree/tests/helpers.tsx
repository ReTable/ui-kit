import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MockedFunction, expect, vi } from 'vitest';

import { ChangeHandler, TreeBranch, TreeNode, UiCheckboxTreeProps } from '~';

import { CheckboxTree } from './CheckboxTree';
import { Leaf } from './types';

// region Factories

export function leafOf(id: number, isDisabled = false): Leaf {
  return { id, isDisabled };
}

export function branchOf(
  id: number,
  children: Array<TreeNode<Leaf>> = [],
  isDisabled = false,
): TreeBranch<Leaf> {
  return { id, children, isDisabled };
}

// endregion

// region Render

type OnChangeMock = MockedFunction<ChangeHandler<Leaf>>;

type Options = Pick<UiCheckboxTreeProps<Leaf>, 'tree'> &
  Partial<Pick<UiCheckboxTreeProps<Leaf>, 'selected'>>;

type RenderTreeResult = {
  toggle: (id: number) => Promise<void>;

  change: (id: number) => Promise<void>;
  changeAll: () => Promise<void>;

  onChange: OnChangeMock;

  rerender: (options?: Omit<Options, 'tree'>) => void;
};

function labelOf(node: Leaf) {
  return 'children' in node ? `Branch ${node.id}` : `Leaf ${node.id}`;
}

export function renderTree({ tree, selected }: Options): RenderTreeResult {
  const onChange: OnChangeMock = vi.fn();

  const { rerender } = render(
    <CheckboxTree
      labelOf={labelOf}
      onChange={onChange}
      selected={selected}
      testId="tree"
      tree={tree}
    />,
  );

  return {
    async toggle(id) {
      const button = screen.queryByTestId(`tree--items--${id}--toggle`);

      if (button == null) {
        throw new Error(`Couldn't find a toggle button for branch with id ${id}`);
      }

      await userEvent.click(button);
    },

    async change(id) {
      const checkbox = screen.queryByTestId(`tree--items--${id}--checkbox--input`);

      if (checkbox == null) {
        throw new Error(`Couldn't find a checkbox for node with id ${id}`);
      }

      await userEvent.click(checkbox);
    },

    async changeAll() {
      const checkbox = screen.queryByTestId('tree--header--input');

      if (checkbox == null) {
        throw new Error("Couldn't find a checkbox in header");
      }

      await userEvent.click(checkbox);
    },

    onChange,

    rerender(_ = {}) {
      rerender(<CheckboxTree labelOf={labelOf} onChange={onChange} tree={tree} testId="tree" />);
    },
  };
}

// endregion Render

// region Verify

type ChangeItem = {
  onChange: OnChangeMock;

  ids: Set<Leaf['id']>;
};

type HeaderItem = {
  isDisabled?: boolean;
  isChecked: boolean;
  isIndeterminate: boolean;
};

export type LeafItem = {
  id: number;

  isDisabled?: boolean;

  isChecked: boolean;
};

export type BranchItem = {
  id: number;

  isDisabled?: boolean;

  isChecked: boolean;
  isIndeterminate: boolean;
};

export type PipelineItem = LeafItem | BranchItem;

function verifyHeader(node: Node, { isChecked, isIndeterminate, isDisabled = false }: HeaderItem) {
  const inputTestId = 'tree--header--input';

  const input = screen.queryByTestId(inputTestId);

  expect(input).not.toBeNull();

  expect(node, 'Header should have an input').toContain(input);

  if (input == null) {
    return;
  }

  if (isDisabled) {
    expect(input, `Header should have an input which is disabled`).toBeDisabled();
  } else {
    expect(input, `Header should have an input which is enabled`).toBeEnabled();
  }

  if (isChecked) {
    expect(input, `Header should have an input which is checked`).toBeChecked();
  } else {
    expect(input, `Header should have an input which isn't checked`).not.toBeChecked();
  }

  if (isIndeterminate) {
    expect(input, `Header should have an input which is indeterminate`).toHaveAttribute(
      'indeterminate',
    );
  } else {
    expect(input, `Header should have an input which isn't indeterminate`).not.toHaveAttribute(
      'indeterminate',
    );
  }
}

function verifyLeaf(node: Node, { id, isChecked, isDisabled = false }: LeafItem) {
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

  if (isDisabled) {
    expect(input, `Leaf with id ${id} should have an input which is disabled`).toBeDisabled();
  } else {
    expect(input, `Leaf with id ${id} should have an input which is enabled`).toBeEnabled();
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

function verifyBranch(
  node: Node,
  { id, isChecked, isIndeterminate, isDisabled = false }: BranchItem,
) {
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

  if (isDisabled) {
    expect(input, `Branch with id ${id} should have an input which is disabled`).toBeDisabled();
  } else {
    expect(input, `Branch with id ${id} should have an input which is enabled`).toBeEnabled();
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

type ChangeBuilder = (onChange: OnChangeMock, ...ids: Array<Leaf['id']>) => void;

type HeaderBuilder = (header: HeaderItem) => void;

type LeafBuilder = (leaf: LeafItem) => void;

type BranchBuilder = (branch: BranchItem) => void;

type Builder = {
  change: ChangeBuilder;
  header: HeaderBuilder;
  leaf: LeafBuilder;
  branch: BranchBuilder;
};

type Build = (builder: Builder) => void;

function prepareWith(build: Build): [ChangeItem | null, HeaderItem | null, PipelineItem[]] {
  let change: ChangeItem | null = null;

  let header: HeaderItem | null = null;

  const items: PipelineItem[] = [];

  const builder: Builder = {
    change(onChange, ...ids) {
      change = {
        onChange,

        ids: new Set(ids),
      };
    },

    header(item) {
      header = item;
    },

    leaf(item) {
      items.push(item);
    },

    branch(branch) {
      items.push(branch);
    },
  };

  build(builder);

  return [change, header, items];
}

export function verify(build: Build): void {
  const [change, header, items] = prepareWith(build);

  expect(header, "Header's state was not provided").not.toBeNull();

  if (header == null) {
    return;
  }

  const root = screen.queryByTestId('tree');

  expect(root, 'The tree should be rendered').not.toBeNull();

  if (root == null) {
    return;
  }

  const headerRoot = screen.queryByTestId('tree--header');

  expect(headerRoot, 'The header should be rendered').not.toBeNull();

  if (headerRoot == null) {
    return;
  }

  verifyHeader(headerRoot, header);

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

  if (change != null) {
    expect(change.onChange).toHaveBeenLastCalledWith(change.ids);
  }
}

// endregion Verify
