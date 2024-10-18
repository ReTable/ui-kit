import { ReactNode } from 'react';

import { Container } from '../Container';
import { Provider } from '../Context';
import { Option, SelectAll, Size, Variant } from '../types';

import { useController } from './UiMultiSelector.hooks';

export type Props = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onChange: (value: Set<string>) => void;
  options: Option[];
  selectAll?: SelectAll;
  selectFound?: SelectAll;
  size: Size;
  value: Set<string>;
  variant: Variant;
};

export function UiMultiSelector({ onChange, value, ...props }: Props): ReactNode {
  const { onAdd, onRemove, onClear } = useController({ onChange, value });

  return (
    <Provider onAdd={onAdd} onClear={onClear} onRemove={onRemove} value={value} {...props}>
      <Container />
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
