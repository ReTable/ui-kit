import { useMemo } from 'react';

import { depth } from '@tabula/tree-utils';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

import { isSelected } from '../helpers';
import { BranchFlags, Flags, Selected } from '../types';

type BranchStats = {
  leavesCount: number;
  selectedLeavesCount: number;
};

export function useFlags<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  selected: Selected<Leaf>,
): Flags<Leaf> {
  return useMemo(() => {
    const leavesFlags = new Map<Leaf['id'], boolean>();
    const branchesFlags = new Map<Leaf['id'], BranchFlags>();

    const branchesStats = new Map<Leaf['id'], BranchStats>();

    for (const { isLeaf, node, parentIds } of depth(tree)) {
      if (isLeaf) {
        const isChecked = isSelected(node.id, selected);

        leavesFlags.set(node.id, isChecked);

        for (const parentId of parentIds) {
          let stats = branchesStats.get(parentId);

          if (stats == null) {
            stats = {
              leavesCount: 0,
              selectedLeavesCount: 0,
            };

            branchesStats.set(parentId, stats);
          }

          if (isChecked) {
            stats.selectedLeavesCount += 1;
          }

          stats.leavesCount += 1;
        }
      }
    }

    for (const [id, { leavesCount, selectedLeavesCount }] of branchesStats) {
      const isChecked = leavesCount === selectedLeavesCount;
      const isIndeterminate = !isChecked && selectedLeavesCount > 0;

      branchesFlags.set(id, { isChecked, isIndeterminate });
    }

    return { branchesFlags, leavesFlags };
  }, [selected, tree]);
}
