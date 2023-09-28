import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

import { JsonViewOptions, ToggleFn } from './types';

// region Types

type Value = JsonViewOptions & {
  toggle: ToggleFn;
};

// endregion

// region Context

const defaultValue: Value = {
  isInteractive: false,
  showDataTypes: false,
  showObjectSize: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const UiOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  isInteractive = defaultValue.isInteractive,
  showDataTypes = defaultValue.showDataTypes,
  showObjectSize = defaultValue.showObjectSize,
  toggle = defaultValue.toggle,
}) => {
  const value = useMemo<Value>(
    () => ({
      isInteractive,
      showDataTypes,
      showObjectSize,
      toggle,
    }),
    [isInteractive, showDataTypes, showObjectSize, toggle],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

UiOptions.displayName = `UiJsonView(UiOptions)`;

// endregion

// region Hook

export function useOptions(): Value {
  return useContext(Context);
}

// endregion
