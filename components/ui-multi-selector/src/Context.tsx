import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext as useContextInner,
  useMemo,
} from 'react';

import {
  AddHandler,
  ClearHandler,
  Option,
  RemoveHandler,
  SelectAll,
  SelectFound,
  Selected,
  Size,
  Variant,
} from './types';

type Value = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;

  isDisabled?: boolean;

  onAdd: AddHandler;
  onRemove: RemoveHandler;
  onClear: ClearHandler;

  options: Option[];
  selected: Selected;

  selectAll: SelectAll;
  selectFound: SelectFound;

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
  selected: new Set(),

  selectAll: '',
  selectFound: '',

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
  selected,
  size,
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

      options,
      selected,

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
      selected,
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
