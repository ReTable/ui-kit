import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

import { JsonViewOptions, ToggleFn } from './types';

// region Types

type Value = JsonViewOptions & {
  toggle: ToggleFn;
};

// endregion

// region Context

const defaultValue: Value = {
  showServiceData: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const UiJsonViewOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  showServiceData = defaultValue.showServiceData,
  toggle = defaultValue.toggle,
}) => {
  const value = useMemo<Value>(
    () => ({
      showServiceData,
      toggle,
    }),
    [showServiceData, toggle],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// endregion

// region Hook

export function useJsonViewOptions(): Value {
  return useContext(Context);
}

// endregion
