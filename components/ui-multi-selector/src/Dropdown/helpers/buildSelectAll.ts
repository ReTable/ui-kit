import { Option, SelectAll } from '../../types';

import { Item } from '../Dropdown.types';

type Options = {
  onAdd: (ids: string[]) => void;
  options: Option[];
  selectAll: SelectAll;
  value: Set<string>;
};

export function buildSelectAll({ onAdd, options, selectAll, value }: Options): Item {
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

  return { type: 'item', id: 'select-all', icon, onClick: handleClick, label };
}
