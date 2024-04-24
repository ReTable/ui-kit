import { useCallback, useMemo } from 'react';

import { breadth } from '@tabula/tree-utils';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

import { ChangeHandler, CheckboxState, Selected } from '../types';

type Options<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  selected: Selected<Leaf>;

  onChange?: ChangeHandler<Leaf>;
};

type AllChangeHandler = (isChecked: boolean) => void;

export function useState<Leaf extends TreeLeaf>({
  onChange,
  selected,
  tree,
}: Options<Leaf>): [CheckboxState, AllChangeHandler] {
  const state = useMemo(() => {
    let count = 0;
    let isCheckedCount = 0;

    for (const { node, isBranch } of breadth(tree)) {
      if (isBranch) {
        continue;
      }

      count += 1;

      if (selected.has(node.id)) {
        isCheckedCount += 1;
      }
    }

    if (count === 0) {
      return {
        isChecked: false,
        isIndeterminate: false,
      };
    }

    return {
      isChecked: isCheckedCount === count,
      isIndeterminate: isCheckedCount > 0 && isCheckedCount < count,
    };
  }, [tree, selected]);

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

  return [state, handleChange];
}
