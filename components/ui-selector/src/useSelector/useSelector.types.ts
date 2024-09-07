import { ReactNode } from 'react';

import { Config, ItemConfigGetter } from '../Selector.types';

export type BaseOptions<T> = {
  value: T;
  onChange: (value: T) => void;
  itemConfigGetter: ItemConfigGetter<T>;
  minItemsForSearch?: number;
};

export type BaseResult = {
  config: Config;
  triggerRenderer: () => ReactNode;
  showSearchField?: boolean;
};
