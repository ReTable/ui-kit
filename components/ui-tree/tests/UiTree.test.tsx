import { act } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Tree, branchOf, leafOf, renderTree, verify } from './helpers';

describe('UiTree', () => {
  it('renders empty tree', () => {
    const tree: Tree = [];

    renderTree({ tree });

    verify();
  });

  it('renders tree with leafs only', () => {
    // prettier-ignore
    const tree: Tree = [
      leafOf(1),
      leafOf(2),
      leafOf(3),
    ];

    renderTree({ tree });

    verify(({ leaf }) => {
      leaf({ id: 1, level: 0 });
      leaf({ id: 2, level: 0 });
      leaf({ id: 3, level: 0 });
    });
  });

  it('renders tree with empty branches only', () => {
    // prettier-ignore
    const tree: Tree = [
      branchOf(1),
      branchOf(2),
      branchOf(3),
    ];

    renderTree({ tree });

    verify(({ branch }) => {
      branch({ id: 1, level: 0, isExpanded: false });
      branch({ id: 2, level: 0, isExpanded: false });
      branch({ id: 3, level: 0, isExpanded: false });
    });
  });

  it('renders regular tree', () => {
    // prettier-ignore
    const tree: Tree = [
      leafOf(1),
      branchOf(2),
      branchOf(3, [
        leafOf(4),
        leafOf(5),
        leafOf(6),
      ]),
      branchOf(7, [
        branchOf(8, [
          leafOf(9),
          leafOf(10),
          leafOf(11),
        ]),
      ]),
    ];

    renderTree({ tree });

    verify(({ branch, leaf }) => {
      leaf({ id: 1, level: 0 });
      branch({ id: 2, level: 0, isExpanded: false });
      branch({ id: 3, level: 0, isExpanded: false });
      branch({ id: 7, level: 0, isExpanded: false });
    });
  });

  it('expands branch', () => {
    // prettier-ignore
    const tree: Tree = [
      branchOf(1, [
        leafOf(2),
        branchOf(3, [
          leafOf(4),
          leafOf(5),
        ]),
        leafOf(6),
      ])
    ]

    const { toggle } = renderTree({ tree });

    verify(({ branch }) => {
      branch({ id: 1, level: 0, isExpanded: false });
    });

    act(() => {
      toggle(1);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: false });
      leaf({ id: 6, level: 1 });
    });

    act(() => {
      toggle(3);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: true });
      leaf({ id: 4, level: 2 });
      leaf({ id: 5, level: 2 });
      leaf({ id: 6, level: 1 });
    });
  });

  it('collapse branch', () => {
    // prettier-ignore
    const tree: Tree = [
      branchOf(1, [
        leafOf(2),
        branchOf(3, [
          leafOf(4),
          leafOf(5),
        ]),
        leafOf(6),
      ]),
    ];

    const { toggle } = renderTree({ tree });

    verify(({ branch }) => {
      branch({ id: 1, level: 0, isExpanded: false });
    });

    act(() => {
      toggle(1);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: false });
      leaf({ id: 6, level: 1 });
    });

    act(() => {
      toggle(3);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: true });
      leaf({ id: 4, level: 2 });
      leaf({ id: 5, level: 2 });
      leaf({ id: 6, level: 1 });
    });

    act(() => {
      toggle(3);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: false });
      leaf({ id: 6, level: 1 });
    });

    act(() => {
      toggle(1);
    });

    verify(({ branch }) => {
      branch({ id: 1, level: 0, isExpanded: false });
    });
  });

  it('collapse nested branches', () => {
    // prettier-ignore
    const tree: Tree = [
      branchOf(1, [
        leafOf(2),
        branchOf(3, [
          leafOf(4),
          leafOf(5),
        ]),
        leafOf(6),
      ]),
      branchOf(7),
    ];

    const { toggle } = renderTree({ tree });

    verify(({ branch }) => {
      branch({ id: 1, level: 0, isExpanded: false });
      branch({ id: 7, level: 0, isExpanded: false });
    });

    act(() => {
      toggle(1);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: false });
      leaf({ id: 6, level: 1 });
      branch({ id: 7, level: 0, isExpanded: false });
    });

    act(() => {
      toggle(3);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: true });
      leaf({ id: 4, level: 2 });
      leaf({ id: 5, level: 2 });
      leaf({ id: 6, level: 1 });
      branch({ id: 7, level: 0, isExpanded: false });
    });

    act(() => {
      toggle(7);
    });

    verify(({ branch, leaf }) => {
      branch({ id: 1, level: 0, isExpanded: true });
      leaf({ id: 2, level: 1 });
      branch({ id: 3, level: 1, isExpanded: true });
      leaf({ id: 4, level: 2 });
      leaf({ id: 5, level: 2 });
      leaf({ id: 6, level: 1 });
      branch({ id: 7, level: 0, isExpanded: true });
    });

    act(() => {
      toggle(1);
    });

    verify(({ branch }) => {
      branch({ id: 1, level: 0, isExpanded: false });
      branch({ id: 7, level: 0, isExpanded: true });
    });
  });

  describe('search', () => {
    it('ignores search if pattern only was provided', () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1),
        leafOf(2),
        leafOf(3),
      ];

      renderTree({ tree, pattern: '2' });

      verify(({ leaf }) => {
        leaf({ id: 1, level: 0 });
        leaf({ id: 2, level: 0 });
        leaf({ id: 3, level: 0 });
      });
    });

    it('ignores search if pattern is empty string', () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1),
        leafOf(2),
        leafOf(3),
      ];

      renderTree({ tree, pattern: '', match: () => false });

      verify(({ leaf }) => {
        leaf({ id: 1, level: 0 });
        leaf({ id: 2, level: 0 });
        leaf({ id: 3, level: 0 });
      });
    });

    it('ignores search if match predicated only was provided', () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1),
        leafOf(2),
        leafOf(3),
      ];

      renderTree({ tree, match: () => false });

      verify(({ leaf }) => {
        leaf({ id: 1, level: 0 });
        leaf({ id: 2, level: 0 });
        leaf({ id: 3, level: 0 });
      });
    });

    it('filters list', () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1),
        leafOf(2),
        leafOf(3),
      ];

      renderTree({
        tree,

        pattern: '2',
        match: (node, pattern) => node.name.endsWith(pattern),
      });

      verify(({ leaf }) => {
        leaf({ id: 2, level: 0 });
      });
    });

    it('filters tree', () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, [
          leafOf(2),
          branchOf(3, [
            leafOf(4),
            leafOf(5),
          ]),
          leafOf(6),
        ]),
      ];

      renderTree({
        tree,

        pattern: '4',
        match: (node, pattern) => node.name.endsWith(pattern),
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
      });
    });

    it('allows to expand and collapse branches with filters', () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, [
          leafOf(2),
          branchOf(3, [
            leafOf(4),
            leafOf(5),
          ]),
          leafOf(6),
        ]),
      ];

      const { toggle } = renderTree({
        tree,

        pattern: '4',
        match: (node, pattern) => node.name.endsWith(pattern),
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch }) => {
        branch({ id: 1, level: 0, isExpanded: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: false });
      });

      act(() => {
        toggle(3);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
      });
    });

    it('restores state after search', () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, [
          leafOf(2),
          branchOf(3, [
            leafOf(4),
            leafOf(5),
          ]),
          leafOf(6),
        ]),
      ];

      const { toggle, rerender } = renderTree({
        tree,
      });

      verify(({ branch }) => {
        branch({ id: 1, level: 0, isExpanded: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        leaf({ id: 2, level: 1 });
        branch({ id: 3, level: 1, isExpanded: false });
        leaf({ id: 6, level: 1 });
      });

      act(() => {
        toggle(3);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        leaf({ id: 2, level: 1 });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
        leaf({ id: 5, level: 2 });
        leaf({ id: 6, level: 1 });
      });

      rerender({ pattern: '4', match: (node, pattern) => node.name.endsWith(pattern) });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
      });

      rerender();

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        leaf({ id: 2, level: 1 });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
        leaf({ id: 5, level: 2 });
        leaf({ id: 6, level: 1 });
      });

      rerender({ pattern: '4', match: (node, pattern) => node.name.endsWith(pattern) });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch }) => {
        branch({ id: 1, level: 0, isExpanded: false });
      });

      rerender();

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        leaf({ id: 2, level: 1 });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
        leaf({ id: 5, level: 2 });
        leaf({ id: 6, level: 1 });
      });
    });

    it('resets state between searches', () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, [
          leafOf(2),
          branchOf(3, [
            leafOf(4),
            leafOf(5),
          ]),
          leafOf(6),
        ]),
      ];

      const { toggle, rerender } = renderTree({
        tree,

        pattern: '4',
        match: (node, pattern) => node.name.endsWith(pattern),
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 4, level: 2 });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch }) => {
        branch({ id: 1, level: 0, isExpanded: false });
      });

      rerender({
        pattern: '5',
        match: (node, pattern) => node.name.endsWith(pattern),
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, level: 0, isExpanded: true });
        branch({ id: 3, level: 1, isExpanded: true });
        leaf({ id: 5, level: 2 });
      });
    });
  });
});
