import { useCallback } from 'react';

import { Tree, TreeLeaf } from '@tabula/ui-tree';

import { collectIds } from '../helpers';
import { ChangeHandler } from '../types';

type Handler<Leaf extends TreeLeaf> = (id: Leaf['id'], isChecked: boolean) => void;

type Result<Leaf extends TreeLeaf> = [Handler<Leaf>, Handler<Leaf>];

export function useChange<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  onChange?: ChangeHandler<Leaf>,
): Result<Leaf> {
  const handleChangeLeaf = useCallback<Handler<Leaf>>(
    (id: Leaf['id'], isChecked: boolean) => {
      onChange?.([id], isChecked);
    },
    [onChange],
  );

  const handleChangeBranch = useCallback<Handler<Leaf>>(
    (id: Leaf['id'], isChecked: boolean) => {
      onChange?.(collectIds(tree, id), isChecked);
    },
    [onChange, tree],
  );

  return [handleChangeLeaf, handleChangeBranch];
}
