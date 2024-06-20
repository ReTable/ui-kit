import { describe, it } from 'vitest';

import { branchOf, leafOf, renderTree, verify } from './helpers';
import { Tree } from './types';

describe('UiCheckboxTree', () => {
  describe('render', () => {
    it('renders empty tree', () => {
      const tree: Tree = [];

      renderTree({ tree });

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false, isDisabled: true });
      });
    });

    it('renders tree with leafs only', () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1),
        leafOf(2),
        leafOf(3),
      ];

      renderTree({ tree });

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.leaf({ id: 1, isChecked: false });
        build.leaf({ id: 2, isChecked: false });
        build.leaf({ id: 3, isChecked: false });
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

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false, isDisabled: true });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.branch({ id: 2, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false, isDisabled: true });
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

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.leaf({ id: 1, isChecked: false });
        build.branch({ id: 2, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.branch({ id: 7, isChecked: false, isIndeterminate: false });
      });
    });
  });

  describe('disable', () => {
    it('renders tree with disabled leafs', async () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1, true),
        branchOf(2, [
          leafOf(3, true),
          leafOf(4),
        ]),
      ];

      const { toggle } = renderTree({ tree });

      await toggle(2);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.leaf({ id: 1, isChecked: false, isDisabled: true });
        build.branch({ id: 2, isChecked: false, isIndeterminate: false, isDisabled: false });
        build.leaf({ id: 3, isChecked: false, isDisabled: true });
        build.leaf({ id: 4, isChecked: false, isDisabled: false });
      });
    });

    it('renders disabled header when all leaves are disabled', async () => {
      // prettier-ignore
      const tree: Tree = [
        leafOf(1, true),
        branchOf(2, [
          leafOf(3, true),
          leafOf(4, true),
        ]),
      ];

      const { toggle } = renderTree({ tree });

      await toggle(2);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false, isDisabled: true });

        build.leaf({ id: 1, isChecked: false, isDisabled: true });
        build.branch({ id: 2, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.leaf({ id: 3, isChecked: false, isDisabled: true });
        build.leaf({ id: 4, isChecked: false, isDisabled: true });
      });
    });

    it('renders disabled branch if branch is empty', () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, ),
      ];

      renderTree({ tree });

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false, isDisabled: true });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false, isDisabled: true });
      });
    });

    it('renders disabled branch children if branch is disabled', async () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, [
          leafOf(2),
          leafOf(3),
          branchOf(4, [
            leafOf(5),
          ]),
        ], true),
      ];

      const { toggle } = renderTree({ tree });

      await toggle(1);
      await toggle(4);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false, isDisabled: true });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.leaf({ id: 2, isChecked: false, isDisabled: true });
        build.leaf({ id: 3, isChecked: false, isDisabled: true });
        build.branch({ id: 4, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.leaf({ id: 5, isChecked: false, isDisabled: true });
      });
    });

    it('renders disabled branch if all children are disabled', async () => {
      // prettier-ignore
      const tree: Tree = [
        branchOf(1, [
          leafOf(2, true),
          leafOf(3, true),
          branchOf(4, [
            leafOf(5),
          ], true),
        ]),
      ];

      const { toggle } = renderTree({ tree });

      await toggle(1);
      await toggle(4);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false, isDisabled: true });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.leaf({ id: 2, isChecked: false, isDisabled: true });
        build.leaf({ id: 3, isChecked: false, isDisabled: true });
        build.branch({ id: 4, isChecked: false, isIndeterminate: false, isDisabled: true });
        build.leaf({ id: 5, isChecked: false, isDisabled: true });
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

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
      });

      await toggle(1);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 6, isChecked: false });
      });

      await toggle(3);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 4, isChecked: false });
        build.leaf({ id: 5, isChecked: false });
        build.leaf({ id: 6, isChecked: false });
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

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
      });

      await toggle(1);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 6, isChecked: false });
      });

      await toggle(3);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 4, isChecked: false });
        build.leaf({ id: 5, isChecked: false });
        build.leaf({ id: 6, isChecked: false });
      });

      await toggle(3);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 6, isChecked: false });
      });

      await toggle(1);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
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

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.branch({ id: 7, isChecked: false, isIndeterminate: false, isDisabled: true });
      });

      await toggle(1);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 6, isChecked: false });
        build.branch({ id: 7, isChecked: false, isIndeterminate: false, isDisabled: true });
      });

      await toggle(3);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 4, isChecked: false });
        build.leaf({ id: 5, isChecked: false });
        build.leaf({ id: 6, isChecked: false });
        build.branch({ id: 7, isChecked: false, isIndeterminate: false, isDisabled: true });
      });

      await toggle(7);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 2, isChecked: false });
        build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        build.leaf({ id: 4, isChecked: false });
        build.leaf({ id: 5, isChecked: false });
        build.leaf({ id: 6, isChecked: false });
        build.branch({ id: 7, isChecked: false, isIndeterminate: false, isDisabled: true });
      });

      await toggle(1);

      verify((build) => {
        build.header({ isChecked: false, isIndeterminate: false });

        build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        build.branch({ id: 7, isChecked: false, isIndeterminate: false, isDisabled: true });
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

        const { change, onChange } = renderTree({ tree });

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.leaf({ id: 1, isChecked: false });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false });
        });

        await change(2);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.leaf({ id: 1, isChecked: false });
          build.leaf({ id: 2, isChecked: true });
          build.leaf({ id: 3, isChecked: false });

          build.change(onChange, 2);
        });

        await change(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.leaf({ id: 1, isChecked: true });
          build.leaf({ id: 2, isChecked: true });
          build.leaf({ id: 3, isChecked: false });

          build.change(onChange, 1, 2);
        });

        await change(3);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.leaf({ id: 1, isChecked: true });
          build.leaf({ id: 2, isChecked: true });
          build.leaf({ id: 3, isChecked: true });

          build.change(onChange, 1, 2, 3);
        });

        await change(2);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.leaf({ id: 1, isChecked: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: true });

          build.change(onChange, 1, 3);
        });

        await change(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.leaf({ id: 1, isChecked: false });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: true });

          build.change(onChange, 3);
        });

        await change(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.leaf({ id: 1, isChecked: false });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false });

          build.change(onChange);
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

        const { change, onChange, toggle } = renderTree({ tree });

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        });

        await toggle(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: false });
          build.leaf({ id: 5, isChecked: false });
          build.leaf({ id: 6, isChecked: false });
        });

        await change(4);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: false });
          build.leaf({ id: 6, isChecked: false });

          build.change(onChange, 4);
        });

        await change(5);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: false });

          build.change(onChange, 4, 5);
        });

        await change(6);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });

          build.change(onChange, 4, 5, 6);
        });

        await change(2);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });

          build.change(onChange, 2, 4, 5, 6);
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
        });

        await toggle(1);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
        });

        await toggle(1);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });
        });
      });
    });

    describe('when branch is changed', () => {
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

        const { change, onChange, toggle } = renderTree({ tree });

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        });

        await toggle(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: false });
          build.leaf({ id: 5, isChecked: false });
          build.leaf({ id: 6, isChecked: false });
        });

        await change(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });

          build.change(onChange, 4, 5, 6);
        });

        await change(1);

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });

          build.change(onChange, 2, 4, 5, 6);
        });

        await change(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: false });
          build.leaf({ id: 5, isChecked: false });
          build.leaf({ id: 6, isChecked: false });

          build.change(onChange);
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await change(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });

          build.change(onChange, 4, 5, 6);
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });
        });
      });

      it('select ignores disabled leafs inside branch', async () => {
        // prettier-ignore
        const tree: Tree = [
          branchOf(1, [
            leafOf(2),
            leafOf(3, true),
            leafOf(4, true),
            branchOf(5, [
              leafOf(6),
              leafOf(7, true),
              leafOf(8, true),
            ]),
          ]),
        ];

        const { change, onChange, toggle } = renderTree({ tree, selected: new Set([4, 8]) });

        for (const id of [1, 5]) {
          await toggle(id);
        }

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: false });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });
        });

        await change(5);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: true });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });

          build.change(onChange, 4, 6, 8);
        });

        await change(5);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: false });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });

          build.change(onChange, 4, 8);
        });

        await change(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: true });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: true });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });

          build.change(onChange, 2, 4, 6, 8);
        });

        await change(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: false });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });

          build.change(onChange, 4, 8);
        });
      });
    });

    describe('when header is changed', () => {
      it('select the whole tree', async () => {
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

        const { change, changeAll, onChange, toggle } = renderTree({ tree });

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
        });

        await toggle(1);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
        });

        await toggle(3);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: false });
          build.leaf({ id: 5, isChecked: false });
          build.leaf({ id: 6, isChecked: false });
        });

        await changeAll();

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });

          build.change(onChange, 2, 4, 5, 6);
        });

        await changeAll();

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: false });

          build.branch({ id: 1, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: false });
          build.leaf({ id: 5, isChecked: false });
          build.leaf({ id: 6, isChecked: false });

          build.change(onChange);
        });

        await change(5);

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.branch({ id: 3, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 4, isChecked: false });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: false });

          build.change(onChange, 5);
        });

        await changeAll();

        verify((build) => {
          build.header({ isChecked: true, isIndeterminate: false });

          build.branch({ id: 1, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 2, isChecked: true });
          build.branch({ id: 3, isChecked: true, isIndeterminate: false });
          build.leaf({ id: 4, isChecked: true });
          build.leaf({ id: 5, isChecked: true });
          build.leaf({ id: 6, isChecked: true });

          build.change(onChange, 2, 4, 5, 6);
        });
      });

      it('select ignores disabled leafs inside tree', async () => {
        // prettier-ignore
        const tree: Tree = [
          branchOf(1, [
            leafOf(2),
            leafOf(3, true),
            leafOf(4, true),
            branchOf(5, [
              leafOf(6),
              leafOf(7, true),
              leafOf(8, true),
            ]),
          ]),
        ];

        const { changeAll, onChange, toggle } = renderTree({ tree, selected: new Set([4, 8]) });

        for (const id of [1, 5]) {
          await toggle(id);
        }

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: false });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });
        });

        await changeAll();

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: true });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: true });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });

          build.change(onChange, 2, 4, 6, 8);
        });

        await changeAll();

        verify((build) => {
          build.header({ isChecked: false, isIndeterminate: true });

          build.branch({ id: 1, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 2, isChecked: false });
          build.leaf({ id: 3, isChecked: false, isDisabled: true });
          build.leaf({ id: 4, isChecked: true, isDisabled: true });
          build.branch({ id: 5, isChecked: false, isIndeterminate: true });
          build.leaf({ id: 6, isChecked: false });
          build.leaf({ id: 7, isChecked: false, isDisabled: true });
          build.leaf({ id: 8, isChecked: true, isDisabled: true });

          build.change(onChange, 4, 8);
        });
      });
    });
  });
});
