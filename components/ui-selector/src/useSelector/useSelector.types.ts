import { ReactNode } from 'react';

import { Config, ItemConfigGetter } from '../Selector.types';

export type BaseOptions<T> = {
  itemConfigGetter: ItemConfigGetter<T>;
  minItemsForSearch?: number;
  onChange: (value: T) => void;
  value: T;
};

export type BaseResult = {
  config: Config;
  showSearchField?: boolean;
  triggerRenderer: () => ReactNode;
};
