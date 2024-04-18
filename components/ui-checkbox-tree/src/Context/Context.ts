import { createContext } from 'react';

import { TreeLeaf } from '@tabula/tree-utils';

import { ContextValue } from './types';

export const Context = createContext<ContextValue<TreeLeaf>>({
  itemStates: new Map(),

  onChangeLeaf: () => {},
  onChangeBranch: () => {},

  labelOf: () => '',
});
