import { useMemo } from 'react';

import { BatchAction, IconComponent, Option } from '../../types';

type Options = {
  addFound: BatchAction;
  allowsCustomValue?: boolean;
  options: Option[];
  selectAll: BatchAction;
  selectFound: BatchAction;
};

function hasIcon<Item extends string | { icon?: IconComponent }>(item: Item): boolean {
  return typeof item !== 'string' && item.icon != null;
}

export function useHasIcons({
  addFound,
  allowsCustomValue,
  options,
  selectAll,
  selectFound,
}: Options): boolean {
  return useMemo(() => {
    if (options.some((it) => hasIcon(it))) {
      return true;
    }

    return (!allowsCustomValue && hasIcon(selectAll)) || hasIcon(addFound) || hasIcon(selectFound);
  }, [addFound, allowsCustomValue, options, selectAll, selectFound]);
}
