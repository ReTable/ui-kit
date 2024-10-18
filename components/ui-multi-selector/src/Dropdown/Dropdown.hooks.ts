import { useMemo } from 'react';

import { useContext } from '../Context';

import { Item } from './Dropdown.types';
import { buildItems, buildSelectAll, buildSelectFound } from './helpers';

export function useItems(search: string): Item[] {
  const { onAdd, options, selectAll, selectFound, value } = useContext();

  return useMemo(() => {
    const [ids, items] = buildItems({ onAdd, options, search, value });

    if (items.length === 0) {
      return items;
    }

    items.unshift({ type: 'divider' });

    if (search.length > 0) {
      items.unshift(buildSelectFound({ ids, onAdd, search, selectFound }));
    }

    items.unshift(buildSelectAll({ onAdd, options, selectAll, value }));

    return items;
  }, [onAdd, options, search, value, selectAll, selectFound]);
}
