import { useMemo } from 'react';

import { AddHandler, Option, SelectAll, SelectFound, Selected } from '../../../types';

import { Item } from '../../Dropdown.types';

import { buildItems } from './buildItems';
import { buildSelectAll } from './buildSelectAll';
import { buildSelectFound } from './buildSelectFound';

type Options = {
  onAdd: AddHandler;
  options: Option[];
  search: string;
  selectAll: SelectAll;
  selectFound: SelectFound;
  selected: Selected;
};

export function useItems({
  onAdd,
  options,
  search,
  selectAll,
  selectFound,
  selected,
}: Options): Item[] {
  return useMemo(() => {
    const [values, items] = buildItems({ onAdd, options, search, selected });

    if (items.length === 0) {
      return items;
    }

    const hasSearch = search.length > 0;

    if (hasSearch) {
      items.unshift(buildSelectFound({ onAdd, search, selectFound, values }));
    }

    items.unshift(
      buildSelectAll({ hasDividerAfter: !hasSearch, onAdd, options, selectAll, selected }),
    );

    return items;
  }, [onAdd, options, search, selected, selectAll, selectFound]);
}
