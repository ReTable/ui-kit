import { useCallback, useContext } from 'react';

import { breadth } from '@tabula/tree-utils';

import { Context } from '../Context/Context';
import { ChangeHandler, CheckboxState, Selected, Tree, TreeLeaf } from '../types';

type Options<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  onChange?: ChangeHandler<Leaf>;
};

type AllChangeHandler = (isChecked: boolean) => void;

export function useState<Leaf extends TreeLeaf>({
  onChange,
  tree,
}: Options<Leaf>): [CheckboxState, AllChangeHandler] {
  const { headerState } = useContext(Context);

  const handleChange = useCallback<AllChangeHandler>(
    (isChecked) => {
      if (onChange == null) {
        return;
      }

      if (!isChecked) {
        onChange(new Set());

        return;
      }

      const next: Selected<Leaf> = new Set();

      for (const { node, isBranch } of breadth(tree)) {
        if (!isBranch) {
          next.add(node.id);
        }
      }

      onChange(next);
    },
    [onChange, tree],
  );

  return [headerState, handleChange];
}
