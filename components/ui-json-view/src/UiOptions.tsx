import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

import { JsonViewOptions, OnActionFn, OnToggleFn } from './types';

// region Types

type Value = JsonViewOptions & {
  onAction: OnActionFn;
  onToggle: OnToggleFn;
};

// endregion

// region Context

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const defaultValue: Value = {
  isInteractive: false,
  showDataTypes: false,
  showObjectSize: false,

  onAction: noop,
  onToggle: noop,
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const UiOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  isInteractive = defaultValue.isInteractive,
  showDataTypes = defaultValue.showDataTypes,
  showObjectSize = defaultValue.showObjectSize,
  onAction = defaultValue.onAction,
  onToggle = defaultValue.onToggle,
}) => {
  const value = useMemo<Value>(
    () => ({
      isInteractive,
      showDataTypes,
      showObjectSize,
      onAction,
      onToggle,
    }),
    [isInteractive, showDataTypes, showObjectSize, onAction, onToggle],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// endregion

// region Hook

export function useOptions(): Value {
  return useContext(Context);
}

// endregion
