import { useCallback } from 'react';

import { depth } from '@tabula/tree-utils';

import { ChangeHandler, Selected, Tree, TreeLeaf } from '../../types';

import { CheckboxesStates, ItemChangeHandler, ItemsChangeHandler } from '../types';

type Options<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  itemStates: CheckboxesStates<Leaf>;
  selected: Selected<Leaf>;

  onChange?: ChangeHandler<Leaf>;
};

type Result<Leaf extends TreeLeaf> = {
  onChangeLeaf: ItemChangeHandler<Leaf>;
  onChangeBranch: ItemChangeHandler<Leaf>;
  onChangeAll: ItemsChangeHandler;
};

export function useHandlers<Leaf extends TreeLeaf>({
  itemStates,
  onChange,
  selected,
  tree,
}: Options<Leaf>): Result<Leaf> {
  const handleChangeLeaf = useCallback<ItemChangeHandler<Leaf>>(
    (id: Leaf['id'], isChecked: boolean) => {
      if (onChange == null) {
        return;
      }

      const next = new Set(selected);

      if (isChecked) {
        next.add(id);
      } else {
        next.delete(id);
      }

      onChange(next);
    },
    [selected, onChange],
  );

  const handleChangeBranch = useCallback<ItemChangeHandler<Leaf>>(
    (id: Leaf['id'], isChecked: boolean) => {
      if (onChange == null) {
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

        if (isChecked) {
          next.add(node.id);
        } else {
          next.delete(node.id);
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

        if (isChecked) {
          next.add(node.id);
        } else {
          next.delete(node.id);
        }
      }

      onChange(next);
    },
    [onChange, selected, tree, itemStates],
  );

  return {
    onChangeAll: handleChangeAll,
    onChangeLeaf: handleChangeLeaf,
    onChangeBranch: handleChangeBranch,
  };
}
