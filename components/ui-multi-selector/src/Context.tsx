import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext as useContextInner,
  useMemo,
} from 'react';

import { Size, Variant } from './types';

type Value = {
  isDisabled?: boolean;

  onClear?: () => void;
  onRemove?: (id: string) => void;

  variant: Variant;
  size: Size;
};

const noop = () => {};

const Context = createContext<Value>({
  onClear: noop,
  onRemove: noop,

  size: 'small',
  variant: 'contrast',
});

export function Provider({
  children,
  isDisabled,
  onClear,
  onRemove,
  size,
  variant,
}: PropsWithChildren<Value>): ReactNode {
  const value: Value = useMemo(
    () => ({
      isDisabled,

      onClear,
      onRemove,

      size,
      variant,
    }),
    [isDisabled, onClear, onRemove, size, variant],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useContext(): Value {
  return useContextInner(Context);
}
