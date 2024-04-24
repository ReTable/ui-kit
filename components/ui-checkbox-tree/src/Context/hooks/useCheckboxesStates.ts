import { useMemo } from 'react';

import { depth } from '@tabula/tree-utils';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

import { Selected } from '../../types';

import { CheckboxesStates } from '../types';

type BranchStats = {
  leavesCount: number;
  selectedLeavesCount: number;
};

export function useCheckboxesStates<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  selected: Selected<Leaf>,
): CheckboxesStates<Leaf> {
  return useMemo(() => {
    const states: CheckboxesStates<Leaf> = new Map();

    const branchesStats = new Map<TreeLeaf['id'], BranchStats>();

    for (const { isLeaf, node, parentIds } of depth(tree)) {
      if (!isLeaf) {
        continue;
      }

      const isChecked = selected.has(node.id);

      states.set(node.id, { isChecked, isIndeterminate: false });

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

    for (const [id, { leavesCount, selectedLeavesCount }] of branchesStats) {
      const isChecked = leavesCount === selectedLeavesCount;
      const isIndeterminate = !isChecked && selectedLeavesCount > 0;

      states.set(id, { isChecked, isIndeterminate });
    }

    return states;
  }, [selected, tree]);
}
