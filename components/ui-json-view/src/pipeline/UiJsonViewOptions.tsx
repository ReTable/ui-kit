import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';

type Value = {
  showType: boolean;
};

const defaultOptions: Value = {
  showType: false,
};

const Context = createContext<Value>(defaultOptions);

export const UiJsonViewOptions: FC<PropsWithChildren<Partial<Value>>> = ({
  children,
  showType = defaultOptions.showType,
}) => {
  const value: Value = useMemo(() => ({ showType }), [showType]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export function useUiJsonViewOptions(): Value {
  return useContext(Context);
}
