import { useMemo } from 'react';

import { depth } from '@tabula/tree-utils';

import { CheckboxState, Selected, Tree, TreeLeaf } from '../../types';

import { CheckboxesStates } from '../types';

type BranchMeta = {
  isDisabled: boolean;

  leavesCount: number;

  selectedLeavesCount: number;
  disabledLeavesCount: number;
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
      disabledLeavesCount: 0,
    };

    metas.set(id, meta);
  }

  update(meta);
}

export function useCheckboxesStates<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  selected: Selected<Leaf>,
): [CheckboxState, CheckboxesStates<Leaf>] {
  const checkboxes = useMemo(() => {
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
        updateMeta(branchesMetas, node.id, (meta) => {
          meta.isDisabled = isDisabled;
        });

        continue;
      }

      const isChecked = selected.has(node.id);

      states.set(node.id, {
        hasDisabled: false,
        isChecked,
        isDisabled,
        isIndeterminate: false,
      });

      for (const parentId of parentIds) {
        updateMeta(branchesMetas, parentId, (meta) => {
          if (isChecked) {
            meta.selectedLeavesCount += 1;
          }

          if (isDisabled) {
            meta.disabledLeavesCount += 1;
          }

          meta.leavesCount += 1;
        });
      }
    }

    for (const [
      id,
      { disabledLeavesCount, isDisabled: isSelfDisabled, leavesCount, selectedLeavesCount },
    ] of branchesMetas) {
      // NOTE: In case, when branch is not disabled, but all of its leaves are disabled - we disable branch too.
      const isDisabled = isSelfDisabled || leavesCount === disabledLeavesCount;
      // NOTE: In case, when all branch's leaves are checked, then we check branch too.
      const isChecked = leavesCount > 0 && leavesCount === selectedLeavesCount;
      // NOTE: In case, when some branch's leaves are checked, then we check branch too.
      const isIndeterminate = !isChecked && selectedLeavesCount > 0;

      states.set(id, {
        hasDisabled: disabledLeavesCount > 0,
        isChecked,
        isDisabled,
        isIndeterminate,
      });
    }

    return states;
  }, [selected, tree]);

  const header = useMemo(() => {
    let count = 0;
    let checked = 0;
    let indeterminate = 0;
    let disabled = 0;

    let hasDisabled = false;

    for (const it of tree) {
      const state = checkboxes.get(it.id);

      if (state == null) {
        continue;
      }

      count += 1;

      if (state.isChecked) {
        checked += 1;
      }

      if (state.isIndeterminate) {
        indeterminate += 1;
      }

      if (state.isDisabled) {
        disabled += 1;
      }

      hasDisabled = hasDisabled || state.hasDisabled;
    }

    const isChecked = count > 0 && count == checked;
    const isIndeterminate = !isChecked && (checked > 0 || indeterminate > 0);
    const isDisabled = count == disabled;

    return { hasDisabled, isChecked, isIndeterminate, isDisabled };
  }, [tree, checkboxes]);

  return [header, checkboxes];
}
