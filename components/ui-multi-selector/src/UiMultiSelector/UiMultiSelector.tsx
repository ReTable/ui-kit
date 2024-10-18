import { ReactNode } from 'react';

import { Container } from '../Container';
import { Provider } from '../Context';
import { Option, SelectAll, SelectFound, Size, Variant } from '../types';

import { useController } from './UiMultiSelector.hooks';

export type Props = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onChange: (value: Set<string>) => void;
  options: Option[];
  selectAll?: SelectAll;
  selectFound?: SelectFound;
  size: Size;
  value: Set<string>;
  variant: Variant;
};

export function UiMultiSelector({
  onChange,
  value,
  selectAll = 'Select all',
  selectFound = 'Select all containing {search}',
  ...props
}: Props): ReactNode {
  const { onAdd, onRemove, onClear } = useController({ onChange, value });

  return (
    <Provider
      onAdd={onAdd}
      onClear={onClear}
      onRemove={onRemove}
      selectAll={selectAll}
      selectFound={selectFound}
      value={value}
      {...props}
    >
      <Container />
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
