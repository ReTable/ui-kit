import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

import { JsonViewOptions, OnToggleFn } from './types';

// region Types

type Value = JsonViewOptions & {
  onToggle: OnToggleFn;
};

// endregion

// region Context

const defaultValue: Value = {
  isInteractive: false,
  showDataTypes: false,
  showObjectSize: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onToggle: () => {},
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const UiOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  isInteractive = defaultValue.isInteractive,
  showDataTypes = defaultValue.showDataTypes,
  showObjectSize = defaultValue.showObjectSize,
  onToggle = defaultValue.onToggle,
}) => {
  const value = useMemo<Value>(
    () => ({
      isInteractive,
      showDataTypes,
      showObjectSize,
      onToggle,
    }),
    [isInteractive, showDataTypes, showObjectSize, onToggle],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// endregion

// region Hook

export function useOptions(): Value {
  return useContext(Context);
}

// endregion
