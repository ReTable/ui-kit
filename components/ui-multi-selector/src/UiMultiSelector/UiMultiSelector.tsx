import { ReactNode } from 'react';

import { Container } from '../Container';
import { Provider } from '../Context';
import { ChangeHandler, Option, SelectAll, SelectFound, Selected, Size, Variant } from '../types';

import { useController } from './UiMultiSelector.hooks';

export type Props = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onChange: ChangeHandler;
  options: Option[];
  selectAll?: SelectAll;
  selectFound?: SelectFound;
  size: Size;
  selected: Selected;
  variant: Variant;
};

export function UiMultiSelector({
  onChange,
  selectAll = 'Select all',
  selectFound = 'Select all containing {search}',
  selected,
  ...props
}: Props): ReactNode {
  const { onAdd, onRemove, onClear } = useController({ onChange, selected });

  return (
    <Provider
      onAdd={onAdd}
      onClear={onClear}
      onRemove={onRemove}
      selectAll={selectAll}
      selectFound={selectFound}
      selected={selected}
      {...props}
    >
      <Container />
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
