import { createContext } from 'react';

import { ContextValue } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const labelOf = () => '';

export const Context = createContext<ContextValue>({
  itemStates: new Map(),

  headerState: {
    isChecked: false,
    isIndeterminate: false,
    isDisabled: false,
  },

  onChangeLeaf: noop,
  onChangeBranch: noop,

  labelOf,
});
