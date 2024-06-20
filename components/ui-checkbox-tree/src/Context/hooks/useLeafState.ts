import { useCallback, useContext } from 'react';

import { TreeLeaf } from '../../types';

import { Context } from '../Context';

type Result = {
  isChecked: boolean;

  isDisabled: boolean;

  onChange: (isChecked: boolean) => void;

  label: string;
};

export function useLeafState<Leaf extends TreeLeaf>(node: Leaf): Result {
  const { itemStates, labelOf, onChangeLeaf } = useContext(Context);

  const { isChecked = false, isDisabled = false } = itemStates.get(node.id) ?? {};

  const handleChange = useCallback(() => {
    onChangeLeaf(node.id);
  }, [node.id, onChangeLeaf]);

  const label = labelOf(node);

  return { isChecked, isDisabled, label, onChange: handleChange };
}
