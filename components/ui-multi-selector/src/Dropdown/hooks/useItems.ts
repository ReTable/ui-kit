import { useMemo } from 'react';

import { useContext } from '../../Context';

import { Item } from '../Dropdown.types';

export function useItems(): Item[] {
  const { onAdd, options, value } = useContext();

  return useMemo(() => {
    const items: Item[] = [];

    for (const option of options) {
      if (value.has(option.id)) {
        continue;
      }

      items.push({
        ...option,

        onClick: () => {
          onAdd([option.id]);
        },
      });
    }

    return items;
  }, [value, options, onAdd]);
}
