import { useCallback } from 'react';

import { depth } from '@tabula/tree-utils';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

import { ChangeHandler, Selected } from '../../types';

import { ItemChangeHandler } from '../types';

type Options<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  onChange?: ChangeHandler<Leaf>;
};

type Result<Leaf extends TreeLeaf> = {
  onChangeLeaf: ItemChangeHandler<Leaf>;
  onChangeBranch: ItemChangeHandler<Leaf>;
};

export function useHandlers<Leaf extends TreeLeaf>({
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

        if (isChecked) {
          next.add(node.id);
        } else {
          next.delete(node.id);
        }
      }

      onChange(next);
    },
    [tree, selected, onChange],
  );

  return {
    onChangeLeaf: handleChangeLeaf,
    onChangeBranch: handleChangeBranch,
  };
}
