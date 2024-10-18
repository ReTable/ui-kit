import { useMemo } from 'react';

import { useContext } from '../../Context';

import { Item } from '../Dropdown.types';

export function useSelectAll(): Item | undefined {
  const { onAdd, options, selectAll, value } = useContext();

  return useMemo(() => {
    if (selectAll == null) {
      return;
    }

    const handleClick = () => {
      const ids = options.reduce<string[]>((result, it) => {
        if (!value.has(it.id)) {
          result.push(it.id);
        }

        return result;
      }, []);

      onAdd(ids);
    };

    const { icon, label } = typeof selectAll === 'string' ? { label: selectAll } : selectAll;

    return { id: '__selectAll__', icon, onClick: handleClick, label };
  }, [onAdd, options, selectAll, value]);
}
