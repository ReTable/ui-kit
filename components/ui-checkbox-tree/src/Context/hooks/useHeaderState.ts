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
  const { headerState, onChangeAll } = useContext(Context);

  return { ...headerState, onChange: onChangeAll };
}
