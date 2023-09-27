import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

import { JsonViewOptions } from './types';

// region Types

type Value = JsonViewOptions;

// endregion

// region Context

const defaultValue: Value = {
  showServiceData: false,
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const UiJsonViewOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  showServiceData = defaultValue.showServiceData,
}) => {
  const value = useMemo<Value>(
    () => ({
      showServiceData,
    }),
    [showServiceData],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// endregion

// region Hook

export function useJsonViewOptions(): Value {
  return useContext(Context);
}

// endregion
