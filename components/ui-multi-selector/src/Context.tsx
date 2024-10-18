import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext as useContextInner,
  useMemo,
} from 'react';

import { Option, SelectAll, Size, Variant } from './types';

type Value = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;

  isDisabled?: boolean;

  onAdd: (ids: string[]) => void;
  onClear: () => void;
  onRemove: (id: string) => void;

  options: Option[];
  value: Set<string>;

  selectAll?: SelectAll;
  selectFound?: SelectAll;

  variant: Variant;
  size: Size;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const Context = createContext<Value>({
  onAdd: noop,
  onClear: noop,
  onRemove: noop,

  options: [],
  value: new Set(),

  size: 'small',
  variant: 'contrast',
});

export function Provider({
  children,
  defaultPlaceholder,
  emptyPlaceholder,
  isDisabled,
  onAdd,
  onClear,
  onRemove,
  options,
  selectAll,
  selectFound,
  size,
  value,
  variant,
}: PropsWithChildren<Value>): ReactNode {
  const context: Value = useMemo(
    () => ({
      emptyPlaceholder,
      defaultPlaceholder,

      isDisabled,

      onAdd,
      onClear,
      onRemove,

      value,
      options,

      selectAll,
      selectFound,

      size,
      variant,
    }),
    [
      emptyPlaceholder,
      defaultPlaceholder,
      isDisabled,
      onAdd,
      onClear,
      onRemove,
      value,
      options,
      selectAll,
      selectFound,
      size,
      variant,
    ],
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export function useContext(): Value {
  return useContextInner(Context);
}
