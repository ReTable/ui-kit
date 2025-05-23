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
  actions: {},

  isCopyPathAllowed: true,
  isCopyValueAllowed: true,
  isInteractive: false,
  showDataTypes: false,
  showObjectSize: false,

  onAction: noop,
  onToggle: noop,
};

const Context = createContext<Value>(defaultValue);

// endregion

// region Provider

export const OptionsProvider: FC<PropsWithChildren<Partial<Value>>> = ({
  actions = defaultValue.actions,
  children,
  isCopyPathAllowed = defaultValue.isCopyPathAllowed,
  isCopyValueAllowed = defaultValue.isCopyValueAllowed,
  isInteractive = defaultValue.isInteractive,
  onAction = defaultValue.onAction,
  onToggle = defaultValue.onToggle,
  onToggleDataTypes,
  onToggleObjectSize,
  shortStringAfterLength,
  showDataTypes = defaultValue.showDataTypes,
  showObjectSize = defaultValue.showObjectSize,
}) => {
  const value = useMemo<Value>(
    () => ({
      actions,
      isCopyPathAllowed,
      isCopyValueAllowed,
      isInteractive,
      onAction,
      onToggle,
      onToggleDataTypes,
      onToggleObjectSize,
      shortStringAfterLength,
      showDataTypes,
      showObjectSize,
    }),
    [
      actions,
      isCopyPathAllowed,
      isCopyValueAllowed,
      isInteractive,
      onAction,
      onToggle,
      onToggleDataTypes,
      onToggleObjectSize,
      shortStringAfterLength,
      showDataTypes,
      showObjectSize,
    ],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// endregion

// region Hook

export function useOptions(): Value {
  return useContext(Context);
}

// endregion
