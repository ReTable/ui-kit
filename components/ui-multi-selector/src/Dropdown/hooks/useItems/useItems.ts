import { useMemo } from 'react';

import { Option, SelectAll, SelectFound, Selected, UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

import { buildCustomValue } from './buildCustomValue';
import { buildItems } from './buildItems';
import { buildSelectAll } from './buildSelectAll';
import { buildSelectFound } from './buildSelectFound';

type Options = {
  allowsCustomValue?: boolean;
  onUpdate: UpdateHandler;
  options: Option[];
  search: string;
  selectAll: SelectAll;
  selectFound: SelectFound;
  selected: Selected;
};

export function useItems({
  allowsCustomValue,
  onUpdate,
  options,
  search,
  selectAll,
  selectFound,
  selected,
}: Options): Item[] {
  return useMemo(() => {
    const [values, items] = buildItems({ allowsCustomValue, onUpdate, options, search, selected });

    const hasSearch = search.length > 0;

    // NOTE: When option `allowsCustomValue` is used, we should build items list in different way.
    //
    //       When option is on, we suggest an option to apply current input as a new item.
    //
    //       Otherwise, we suggest select all and found options and append divider between select options and regular
    //       items. We should suggest that options only if any items has been available to use.
    if (allowsCustomValue) {
      // NOTE: Suggest apply custom value only if input isn't empty.
      if (hasSearch) {
        items.unshift(buildCustomValue({ onUpdate, search }));
      }
    } else if (items.length > 0) {
      // NOTE: Suggest `Select found` option only when search isn't empty.
      if (hasSearch) {
        items.unshift(buildSelectFound({ onUpdate, search, selectFound, values }));
      }

      items.unshift(
        buildSelectAll({ hasDividerAfter: !hasSearch, onUpdate, options, selectAll, selected }),
      );
    }

    return items;
  }, [onUpdate, options, search, selected, allowsCustomValue, selectAll, selectFound]);
}
