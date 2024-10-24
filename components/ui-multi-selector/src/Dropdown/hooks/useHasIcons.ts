import { useMemo } from 'react';

import { IconComponent, Option, SelectAll, SelectFound } from '../../types';

type Options = {
  options: Option[];
  selectAll: SelectAll;
  selectFound: SelectFound;
  allowsCustomValue?: boolean;
};

function hasIcon<Item extends string | { icon?: IconComponent }>(item: Item): boolean {
  return typeof item !== 'string' && item.icon != null;
}

export function useHasIcons({
  allowsCustomValue,
  options,
  selectAll,
  selectFound,
}: Options): boolean {
  return useMemo(() => {
    if (options.some((it) => hasIcon(it))) {
      return true;
    }

    return (!allowsCustomValue && hasIcon(selectAll)) || hasIcon(selectFound);
  }, [options, selectAll, selectFound]);
}
