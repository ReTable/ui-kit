import { useCallback, useContext } from 'react';

import { TreeLeaf } from '../../types';

import { Context } from '../Context';

type Result = {
  isChecked: boolean;
  isIndeterminate: boolean;

  isDisabled: boolean;

  onChange: (isChecked: boolean) => void;

  label: string;
};

export function useBranchState<Leaf extends TreeLeaf>(node: Leaf): Result {
  const { itemStates, labelOf, onChangeBranch } = useContext(Context);

  const {
    isChecked = false,
    isDisabled = false,
    isIndeterminate = false,
  } = itemStates.get(node.id) ?? {};

  const handleChange = useCallback(
    (nextIsChecked: boolean) => {
      onChangeBranch(node.id, nextIsChecked);
    },
    [node.id, onChangeBranch],
  );

  const label = labelOf(node);

  return { isChecked, isDisabled, isIndeterminate, label, onChange: handleChange };
}
