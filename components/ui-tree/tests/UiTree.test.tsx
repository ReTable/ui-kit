import { act } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Tree as BaseTree } from '~';

import { branchOf, leafOf, renderTree } from './helpers';
import { Data, verifyTree } from './pipeline';

type Tree = BaseTree<number, Data>;

describe('UiTree', () => {
  it('renders empty tree', () => {
    const tree: Tree = [];

    renderTree(tree);

    verifyTree(tree);
  });

  it('renders tree with leafs only', () => {
    const tree: Tree = [leafOf(1), leafOf(2), leafOf(3)];

    renderTree(tree);

    verifyTree(tree);
  });

  it('renders tree with empty branches only', () => {
    const tree: Tree = [branchOf(1), branchOf(2), branchOf(3)];

    renderTree(tree);

    verifyTree(tree);
  });

  it('renders regular tree', () => {
    const tree: Tree = [
      leafOf(1),
      branchOf(2),
      branchOf(3, [leafOf(4), leafOf(5), leafOf(6)]),
      branchOf(7, [branchOf(8, [leafOf(9), leafOf(10), leafOf(11)])]),
    ];

    renderTree(tree);

    verifyTree(tree);
  });

  it('expands branch', () => {
    const tree: Tree = [branchOf(1, [leafOf(2), branchOf(3, [leafOf(4), leafOf(5)]), leafOf(6)])];

    const { toggle } = renderTree(tree);

    verifyTree(tree);

    act(() => {
      toggle(1);
    });

    verifyTree(tree, new Set([1]));

    act(() => {
      toggle(3);
    });

    verifyTree(tree, new Set([1, 3]));
  });

  it('collapse branch', () => {
    const tree: Tree = [branchOf(1, [leafOf(2), branchOf(3, [leafOf(4), leafOf(5)]), leafOf(6)])];

    const { toggle } = renderTree(tree);

    verifyTree(tree);

    act(() => {
      toggle(1);
    });

    verifyTree(tree, new Set([1]));

    act(() => {
      toggle(3);
    });

    verifyTree(tree, new Set([1, 3]));

    act(() => {
      toggle(3);
    });

    verifyTree(tree, new Set([1]));

    act(() => {
      toggle(1);
    });

    verifyTree(tree);
  });

  it('collapse nested branches', () => {
    const tree: Tree = [
      branchOf(1, [leafOf(2), branchOf(3, [leafOf(4), leafOf(5)]), leafOf(6)]),
      branchOf(7),
    ];

    const { toggle } = renderTree(tree);

    verifyTree(tree);

    act(() => {
      toggle(1);
    });

    verifyTree(tree, new Set([1]));

    act(() => {
      toggle(3);
    });

    verifyTree(tree, new Set([1, 3]));

    act(() => {
      toggle(7);
    });

    verifyTree(tree, new Set([1, 3, 7]));

    act(() => {
      toggle(1);
    });

    verifyTree(tree, new Set([7]));
  });
});
