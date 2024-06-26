import { createContext } from 'react';

import { ContextValue } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const labelOf = () => '';

export const Context = createContext<ContextValue>({
  itemStates: new Map(),

  headerState: {
    hasDisabled: false,
    isChecked: false,
    isDisabled: false,
    isEmpty: true,
    isIndeterminate: false,
  },

  onChangeAll: noop,
  onChangeLeaf: noop,
  onChangeBranch: noop,

  labelOf,
});
