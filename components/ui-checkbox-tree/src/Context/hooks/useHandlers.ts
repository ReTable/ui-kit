import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

import { Tree, TreeLeaf, depth } from '@tabula/tree-utils';

import { ChangeHandler, ItemChangeHandler } from '../types';

type Result<Leaf extends TreeLeaf> = {
  onChangeLeaf: ItemChangeHandler<Leaf>;
  onChangeBranch: ItemChangeHandler<Leaf>;
};

export function useHandlers<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  onChange?: ChangeHandler<Leaf>,
): Result<Leaf> {
  const changeRef: MutableRefObject<ChangeHandler<Leaf> | undefined> = useRef();

  useEffect(() => {
    changeRef.current = onChange;
  }, [onChange]);

  const handleChangeLeaf = useCallback<ItemChangeHandler<Leaf>>(
    (id: Leaf['id'], isChecked: boolean) => {
      changeRef?.current?.([id], isChecked);
    },
    [],
  );

  const handleChangeBranch = useCallback<ItemChangeHandler<Leaf>>(
    (id: Leaf['id'], isChecked: boolean) => {
      if (changeRef.current == null) {
        return;
      }

      const ids: Array<Leaf['id']> = [];

      for (const { isLeaf, node } of depth(tree, { subTree: id })) {
        if (isLeaf) {
          ids.push(node.id);
        }
      }

      changeRef.current(ids, isChecked);
    },
    [tree],
  );

  return {
    onChangeLeaf: handleChangeLeaf,
    onChangeBranch: handleChangeBranch,
  };
}
