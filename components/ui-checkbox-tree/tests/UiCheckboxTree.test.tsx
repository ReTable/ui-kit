import { act } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Tree, branchOf, leafOf, renderTree, verify } from './helpers';

describe('UiCheckboxTree', () => {
  describe('render', () => {
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
        leaf({ id: 1, isChecked: false });
        leaf({ id: 2, isChecked: false });
        leaf({ id: 3, isChecked: false });
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
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        branch({ id: 2, isChecked: false, isIndeterminate: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
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
        leaf({ id: 1, isChecked: false });
        branch({ id: 2, isChecked: false, isIndeterminate: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });
    });
  });

  describe('expand/collapse', () => {
    it('allows to expands branches', () => {
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
        branch({ id: 1, isChecked: false, isIndeterminate: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
      });

      act(() => {
        toggle(3);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
      });
    });

    it('allows to collapse branches', () => {
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
        branch({ id: 1, isChecked: false, isIndeterminate: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
      });

      act(() => {
        toggle(3);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
      });

      act(() => {
        toggle(3);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
      });
    });

    it('collapses nested branches when parent branch was collapsed', () => {
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
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      act(() => {
        toggle(3);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      act(() => {
        toggle(7);
      });

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      act(() => {
        toggle(1);
      });

      verify(({ branch }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });
    });
  });
});
