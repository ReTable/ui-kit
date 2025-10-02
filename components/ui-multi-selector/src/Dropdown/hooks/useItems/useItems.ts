import { useMemo } from 'react';

import { BatchAction, Option, Selected, UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

import { buildBulkCustomValue } from './buildBulkCustomValue';
import { buildCustomValue } from './buildCustomValue';
import { buildItems } from './buildItems';
import { buildSelectAll } from './buildSelectAll';
import { buildSelectFound } from './buildSelectFound';

const PENDING_ITEMS: Item[] = [
  { key: 'pending-1', skeleton: true },
  { key: 'pending-2', skeleton: true },
  { key: 'pending-3', skeleton: true },
];

type Options = {
  addFound: BatchAction;
  allowsCustomValue?: boolean;
  isPending: boolean;
  maxSelectedLimit?: number;
  onUpdate: UpdateHandler;
  options: Option[];
  search: string;
  selectAll: BatchAction;
  selectFound: BatchAction;
  selected: Selected;
};

export function useItems({
  addFound,
  allowsCustomValue,
  isPending,
  maxSelectedLimit,
  onUpdate,
  options,
  search,
  selectAll,
  selectFound,
  selected,
}: Options): Item[] {
  return useMemo(() => {
    if (isPending) {
      return PENDING_ITEMS;
    }

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
        items.unshift(buildCustomValue({ addFound, onUpdate, search }));

        const fromSearchValues = search.split(/,\s|,/).filter((it) => it.trim().length > 0);
        // NOTE: Suggest apply custom values batch of search split by comma
        if (fromSearchValues.length > 1) {
          items.unshift(
            buildBulkCustomValue({
              addFound,
              onUpdate,
              values: fromSearchValues,
            }),
          );
        }
      }
      return items;
    }

    const isSatisfiesSelectedLimits = maxSelectedLimit == null || maxSelectedLimit > 1;
    if (isSatisfiesSelectedLimits && items.length > 1) {
      // NOTE: Suggest `Select found` option only when search isn't empty.
      if (hasSearch) {
        items.unshift(buildSelectFound({ onUpdate, search, selectFound, values }));
      }

      items.unshift(
        buildSelectAll({ hasDividerAfter: !hasSearch, onUpdate, options, selectAll, selected }),
      );
    }

    return items;
  }, [
    addFound,
    allowsCustomValue,
    isPending,
    maxSelectedLimit,
    onUpdate,
    options,
    search,
    selected,
    selectAll,
    selectFound,
  ]);
}
