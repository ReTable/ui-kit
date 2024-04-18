import { useCallback, useContext } from 'react';

import { TreeLeaf } from '@tabula/tree-utils';

import { Context } from '../Context';

type Result = {
  isChecked: boolean;

  onChange: (isChecked: boolean) => void;

  label: string;
};

export function useLeafState<Leaf extends TreeLeaf>(node: Leaf): Result {
  const { itemStates, labelOf, onChangeLeaf } = useContext(Context);

  const { isChecked = false } = itemStates.get(node.id) ?? {};

  const handleChange = useCallback(
    (nextIsChecked: boolean) => onChangeLeaf(node.id, nextIsChecked),
    [node.id],
  );

  const label = labelOf(node);

  return { isChecked, label, onChange: handleChange };
}
