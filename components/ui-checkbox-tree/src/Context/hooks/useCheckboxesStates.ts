import { useMemo } from 'react';

import { depth } from '@tabula/tree-utils';

import { Selected, Tree, TreeLeaf } from '../../types';

import { CheckboxesStates } from '../types';

type BranchMeta = {
  isDisabled: boolean;

  leavesCount: number;
  selectedLeavesCount: number;
};

type BranchesMetas<Leaf extends TreeLeaf> = Map<Leaf['id'], BranchMeta>;

function updateMeta<Leaf extends TreeLeaf>(
  metas: BranchesMetas<Leaf>,
  id: Leaf['id'],
  update: (meta: BranchMeta) => void,
) {
  let meta = metas.get(id);

  if (meta == null) {
    meta = {
      isDisabled: false,

      leavesCount: 0,
      selectedLeavesCount: 0,
    };

    metas.set(id, meta);
  }

  update(meta);
}

export function useCheckboxesStates<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  selected: Selected<Leaf>,
): CheckboxesStates<Leaf> {
  return useMemo(() => {
    const states: CheckboxesStates<Leaf> = new Map();

    const branchesMetas: BranchesMetas<Leaf> = new Map();

    for (const { isLeaf, node, parentId: directParentId, parentIds } of depth(tree)) {
      // NOTE: If node has a direct parent, then this node isn't on top level, and we should check its `isDisabled` flag,
      //       and state of its parent.
      //       Otherwise, we can use only its `isDisabled` flag only.

      // NOTE: Node can have `isDisabled` property itself, and we should check it.
      const isSelfDisabled = Boolean(node.isDisabled);
      // NOTE: Node can have disabled parent (parent can be disabled transitively by its parent) and we should check it
      //       too.
      const isParentDisabled =
        directParentId == null ? false : Boolean(branchesMetas.get(directParentId)?.isDisabled);

      // NOTE: Actual `isDisabled` state calculated from both self and parent states.
      const isDisabled = isSelfDisabled || isParentDisabled;

      if (!isLeaf) {
        // NOTE: If node is disabled branch, then update meta to postponed branches build.
        if (isDisabled) {
          updateMeta(branchesMetas, node.id, (meta) => {
            meta.isDisabled = isDisabled;
          });
        }

        continue;
      }

      const isChecked = selected.has(node.id);

      states.set(node.id, {
        isChecked,
        isDisabled,
        isIndeterminate: false,
      });

      for (const parentId of parentIds) {
        updateMeta(branchesMetas, parentId, (meta) => {
          if (isChecked) {
            meta.selectedLeavesCount += 1;
          }

          meta.leavesCount += 1;
        });
      }
    }

    for (const [id, { isDisabled, leavesCount, selectedLeavesCount }] of branchesMetas) {
      const isChecked = leavesCount === selectedLeavesCount;
      const isIndeterminate = !isChecked && selectedLeavesCount > 0;

      states.set(id, { isChecked, isDisabled, isIndeterminate });
    }

    return states;
  }, [selected, tree]);
}
