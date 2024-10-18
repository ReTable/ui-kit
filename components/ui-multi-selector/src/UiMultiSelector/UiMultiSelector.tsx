import { ReactNode } from 'react';

import { Container } from '../Container';
import { Provider } from '../Context';
import { Option, Size, Variant } from '../types';

import { useController } from './UiMultiSelector.hooks';

export type Props = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onChange: (value: Set<string>) => void;
  options: Option[];
  size: Size;
  value: Set<string>;
  variant: Variant;
};

export function UiMultiSelector({
  defaultPlaceholder,
  emptyPlaceholder,
  isDisabled,
  onChange,
  options,
  size,
  value,
  variant,
}: Props): ReactNode {
  const { onAdd, onRemove, onClear } = useController({ onChange, value });

  return (
    <Provider
      isDisabled={isDisabled}
      onAdd={onAdd}
      onClear={onClear}
      onRemove={onRemove}
      size={size}
      variant={variant}
    >
      <Container
        defaultPlaceholder={defaultPlaceholder}
        emptyPlaceholder={emptyPlaceholder}
        options={options}
        value={value}
      />
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
