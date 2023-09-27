import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

import { JsonViewOptions, ToggleFn } from './types';

// region Types

type Value = JsonViewOptions & {
  toggle: ToggleFn;
};

// endregion

// region Context

const defaultValue: Value = {
  showDataTypes: false,
  showObjectSize: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const UiJsonViewOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  showDataTypes = defaultValue.showDataTypes,
  showObjectSize = defaultValue.showObjectSize,
  toggle = defaultValue.toggle,
}) => {
  const value = useMemo<Value>(
    () => ({
      showDataTypes,
      showObjectSize,
      toggle,
    }),
    [showDataTypes, showObjectSize, toggle],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// endregion

// region Hook

export function useJsonViewOptions(): Value {
  return useContext(Context);
}

// endregion
