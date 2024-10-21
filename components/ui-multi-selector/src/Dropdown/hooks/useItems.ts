import { useMemo } from 'react';

import { useContext } from '../../Context';

import { Item } from '../Dropdown.types';
import { buildItems, buildSelectAll, buildSelectFound } from '../helpers';

export function useItems(search: string): Item[] {
  const { onAdd, options, selectAll, selectFound, selected } = useContext();

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
