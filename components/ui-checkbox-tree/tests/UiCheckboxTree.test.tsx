import { describe, it } from 'vitest';

import { branchOf, leafOf, renderTree, verify } from './helpers';
import { Tree } from './types';

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
    it('allows to expands branches', async () => {
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

      await toggle(1);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
      });

      await toggle(3);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
      });
    });

    it('allows to collapse branches', async () => {
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

      await toggle(1);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
      });

      await toggle(3);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
      });

      await toggle(3);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
      });

      await toggle(1);

      verify(({ branch }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
      });
    });

    it('collapses nested branches when parent branch was collapsed', async () => {
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

      await toggle(1);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 6, isChecked: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      await toggle(3);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      await toggle(7);

      verify(({ branch, leaf }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        leaf({ id: 2, isChecked: false });
        branch({ id: 3, isChecked: false, isIndeterminate: false });
        leaf({ id: 4, isChecked: false });
        leaf({ id: 5, isChecked: false });
        leaf({ id: 6, isChecked: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });

      await toggle(1);

      verify(({ branch }) => {
        branch({ id: 1, isChecked: false, isIndeterminate: false });
        branch({ id: 7, isChecked: false, isIndeterminate: false });
      });
    });
  });

  describe('select', () => {
    describe('when leaf is changed', () => {
      it('selects a leaf in list', async () => {
        // prettier-ignore
        const tree: Tree = [
          leafOf(1),
          leafOf(2),
          leafOf(3),
        ];

        const { change } = renderTree({ tree });

        verify(({ leaf }) => {
          leaf({ id: 1, isChecked: false });
          leaf({ id: 2, isChecked: false });
          leaf({ id: 3, isChecked: false });
        });

        await change(2);

        verify(({ leaf }) => {
          leaf({ id: 1, isChecked: false });
          leaf({ id: 2, isChecked: true });
          leaf({ id: 3, isChecked: false });
        });

        await change(1);

        verify(({ leaf }) => {
          leaf({ id: 1, isChecked: true });
          leaf({ id: 2, isChecked: true });
          leaf({ id: 3, isChecked: false });
        });

        await change(2);

        verify(({ leaf }) => {
          leaf({ id: 1, isChecked: true });
          leaf({ id: 2, isChecked: false });
          leaf({ id: 3, isChecked: false });
        });
      });

      it('selects a leaf in tree', async () => {
        // prettier-ignore
        const tree: Tree = [
          branchOf(1, [
            leafOf(2),
            branchOf(3, [
              leafOf(4),
              leafOf(5),
              leafOf(6),
            ]),
          ]),
        ];

        const { change, toggle } = renderTree({ tree });

        verify(({ branch }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
        });

        await toggle(1);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await toggle(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
          leaf({ id: 4, isChecked: false });
          leaf({ id: 5, isChecked: false });
          leaf({ id: 6, isChecked: false });
        });

        await change(4);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: true });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: true });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: false });
          leaf({ id: 6, isChecked: false });
        });

        await change(5);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: true });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: true });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: false });
        });

        await change(6);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: true });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: true });
        });

        await change(2);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: true, isIndeterminate: false });
          leaf({ id: 2, isChecked: true });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: true });
        });

        await toggle(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: true, isIndeterminate: false });
          leaf({ id: 2, isChecked: true });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
        });

        await toggle(1);

        verify(({ branch }) => {
          branch({ id: 1, isChecked: true, isIndeterminate: false });
        });

        await toggle(1);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: true, isIndeterminate: false });
          leaf({ id: 2, isChecked: true });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
        });

        await toggle(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: true, isIndeterminate: false });
          leaf({ id: 2, isChecked: true });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: true });
        });
      });
    });

    describe('when branch is changed', () => {
      it('does nothing when branch is empty', async () => {
        // prettier-ignore
        const tree: Tree = [
          branchOf(1),
          branchOf(2),
          branchOf(3),
        ];

        const { change } = renderTree({ tree });

        verify(({ branch }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          branch({ id: 2, isChecked: false, isIndeterminate: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await change(1);

        verify(({ branch }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          branch({ id: 2, isChecked: false, isIndeterminate: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
        });
      });

      it('select leaf inside branch', async () => {
        // prettier-ignore
        const tree: Tree = [
          branchOf(1, [
            leafOf(2),
            branchOf(3, [
              leafOf(4),
              leafOf(5),
              leafOf(6),
            ]),
          ]),
        ];

        const { change, toggle } = renderTree({ tree });

        verify(({ branch }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
        });

        await toggle(1);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await toggle(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
          leaf({ id: 4, isChecked: false });
          leaf({ id: 5, isChecked: false });
          leaf({ id: 6, isChecked: false });
        });

        await change(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: true });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: true });
        });

        await change(1);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: true, isIndeterminate: false });
          leaf({ id: 2, isChecked: true });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: true });
        });

        await change(1);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
          leaf({ id: 4, isChecked: false });
          leaf({ id: 5, isChecked: false });
          leaf({ id: 6, isChecked: false });
        });

        await toggle(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: false });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await change(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: true });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
        });

        await toggle(3);

        verify(({ branch, leaf }) => {
          branch({ id: 1, isChecked: false, isIndeterminate: true });
          leaf({ id: 2, isChecked: false });
          branch({ id: 3, isChecked: true, isIndeterminate: false });
          leaf({ id: 4, isChecked: true });
          leaf({ id: 5, isChecked: true });
          leaf({ id: 6, isChecked: true });
        });
      });
    });
  });
});
