import { useMemo } from 'react';

import { AddHandler, Option, SelectAll, SelectFound, Selected } from '../../../types';

import { Item } from '../../Dropdown.types';

import { buildCustomValue } from './buildCustomValue';
import { buildItems } from './buildItems';
import { buildSelectAll } from './buildSelectAll';
import { buildSelectFound } from './buildSelectFound';

type Options = {
  allowsCustomValue?: boolean;
  onAdd: AddHandler;
  options: Option[];
  search: string;
  selectAll: SelectAll;
  selectFound: SelectFound;
  selected: Selected;
};

export function useItems({
  allowsCustomValue,
  onAdd,
  options,
  search,
  selectAll,
  selectFound,
  selected,
}: Options): Item[] {
  return useMemo(() => {
    const [values, items] = buildItems({ onAdd, options, search, selected });

    const hasSearch = search.length > 0;

    if (allowsCustomValue) {
      if (hasSearch) {
        items.unshift(buildCustomValue({ onAdd, search }));
      }
    } else if (items.length > 0) {
      if (hasSearch) {
        items.unshift(buildSelectFound({ onAdd, search, selectFound, values }));
      }

      items.unshift(
        buildSelectAll({ hasDividerAfter: !hasSearch, onAdd, options, selectAll, selected }),
      );
    }

    return items;
  }, [onAdd, options, search, selected, allowsCustomValue, selectAll, selectFound]);
}
