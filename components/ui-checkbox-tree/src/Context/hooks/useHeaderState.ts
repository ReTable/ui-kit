import { useContext } from 'react';

import { Context } from '../Context';
import { ItemsChangeHandler } from '../types';

type Result = {
  isChecked: boolean;

  isDisabled: boolean;

  isIndeterminate: boolean;

  onChange: ItemsChangeHandler;
};

export function useHeaderState(): Result {
  const {
    headerState: { isDisabled, isEmpty, ...state },
    onChangeAll,
  } = useContext(Context);

  return { isDisabled: isDisabled || isEmpty, ...state, onChange: onChangeAll };
}
