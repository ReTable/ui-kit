import { useCallback } from 'react';

import { depth } from '@tabula/tree-utils';

import { ChangeHandler, CheckboxState, Selected, Tree, TreeLeaf } from '../../types';

import { CheckboxesStates, ItemChangeHandler, ItemsChangeHandler } from '../types';

type Options<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  headerState: CheckboxState;
  itemStates: CheckboxesStates<Leaf>;

  onChange?: ChangeHandler<Leaf>;
};

type Result<Leaf extends TreeLeaf> = {
  onChangeLeaf: ItemChangeHandler<Leaf>;
  onChangeBranch: ItemChangeHandler<Leaf>;
  onChangeAll: ItemsChangeHandler;
};

export function useHandlers<Leaf extends TreeLeaf>({
  headerState,
  itemStates,
  onChange,
  selected,
  tree,
}: Options<Leaf>): Result<Leaf> {
  const handleChangeLeaf = useCallback<ItemChangeHandler<Leaf>>(
    (id: Leaf['id']) => {
      if (onChange == null) {
        return;
      }

      const state = itemStates.get(id);

      if (state == null) {
        return;
      }

      const next = new Set(selected);

      if (state.isChecked) {
        next.delete(id);
      } else {
        next.add(id);
      }

      onChange(next);
    },
    [itemStates, onChange, selected],
  );

  const handleChangeBranch = useCallback<ItemChangeHandler<Leaf>>(
    (id: Leaf['id']) => {
      if (onChange == null) {
        return;
      }

      const branchState = itemStates.get(id);

      if (branchState == null) {
        return;
      }

      const next = new Set(selected);

      for (const { isBranch, node } of depth(tree, { subTree: id })) {
        if (isBranch) {
          continue;
        }

        const state = itemStates.get(node.id);

        if (state == null || state.isDisabled) {
          continue;
        }

        if (branchState.hasDisabled) {
          if (state.isChecked) {
            next.delete(node.id);
          } else {
            next.add(node.id);
          }
        } else if (branchState.isChecked) {
          next.delete(node.id);
        } else {
          next.add(node.id);
        }
      }

      onChange(next);
    },
    [tree, selected, itemStates, onChange],
  );

  const handleChangeAll = useCallback<ItemsChangeHandler>(
    (isChecked) => {
      if (onChange == null) {
        return;
      }

      const next = new Set(selected);

      for (const { node, isBranch } of depth(tree)) {
        if (isBranch) {
          continue;
        }

        const state = itemStates.get(node.id);

        if (state == null || state.isDisabled) {
          continue;
        }

        if (headerState.hasDisabled) {
          if (state.isChecked) {
            next.delete(node.id);
          } else {
            next.add(node.id);
          }
        } else if (isChecked) {
          next.add(node.id);
        } else {
          next.delete(node.id);
        }
      }

      onChange(next);
    },
    [onChange, selected, tree, itemStates, headerState],
  );

  return {
    onChangeAll: handleChangeAll,
    onChangeLeaf: handleChangeLeaf,
    onChangeBranch: handleChangeBranch,
  };
}
