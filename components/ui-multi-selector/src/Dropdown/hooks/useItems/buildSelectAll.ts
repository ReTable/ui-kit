import { AddHandler, Option, SelectAll, Selected } from '../../../types';

import { Item } from '../../Dropdown.types';

type Options = {
  hasDividerAfter?: boolean;
  onAdd: AddHandler;
  options: Option[];
  selectAll: SelectAll;
  selected: Selected;
};

export function buildSelectAll({
  hasDividerAfter,
  onAdd,
  options,
  selectAll,
  selected,
}: Options): Item {
  const handleClick = () => {
    const ids = options.reduce<string[]>((result, it) => {
      const value = typeof it === 'string' ? it : it.value;

      if (!selected.has(value)) {
        result.push(value);
      }

      return result;
    }, []);

    onAdd(ids);
  };

  const { icon, label } = typeof selectAll === 'string' ? { label: selectAll } : selectAll;

  return {
    key: 'select-all',

    icon,
    label,

    onSelect: handleClick,

    hasDividerAfter,
  };
}
