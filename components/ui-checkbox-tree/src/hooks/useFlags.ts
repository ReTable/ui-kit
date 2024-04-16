import { useMemo } from 'react';

import { Tree, TreeLeaf, TreeNode } from '@tabula/ui-tree';

import { isBranch, isSelected } from '../helpers';
import { BranchFlags, Flags, Selected } from '../types';

type QueueItem<Leaf extends TreeLeaf> = {
  node: TreeNode<Leaf>;

  parentIds: Array<Leaf['id']>;
};

type Queue<Leaf extends TreeLeaf> = Array<QueueItem<Leaf>>;

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

    const queue: Queue<Leaf> = tree.map((node) => ({
      node,

      parentIds: [],
    }));

    let cursor = 0;

    while (cursor < queue.length) {
      const { node, parentIds } = queue[cursor];

      cursor += 1;

      if (isBranch(node)) {
        branchesStats.set(node.id, {
          leavesCount: 0,
          selectedLeavesCount: 0,
        });

        const nextParentIds = [...parentIds, node.id];

        const enqueued = node.children.map((child) => ({
          node: child,

          parentIds: nextParentIds,
        }));

        queue.splice(cursor, 0, ...enqueued);
      } else {
        const isNodeSelected = isSelected(node.id, selected);

        leavesFlags.set(node.id, isNodeSelected);

        for (const parentId of parentIds) {
          let stats = branchesStats.get(parentId);

          if (stats == null) {
            stats = {
              leavesCount: 0,
              selectedLeavesCount: 0,
            };

            branchesStats.set(parentId, stats);
          }

          stats.leavesCount += 1;

          if (isNodeSelected) {
            stats.selectedLeavesCount += 1;
          }
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
