import { Option, SelectAll, Selected, UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

type Options = {
  hasDividerAfter?: boolean;
  onUpdate: UpdateHandler;
  options: Option[];
  selectAll: SelectAll;
  selected: Selected;
};

export function buildSelectAll({
  hasDividerAfter,
  onUpdate,
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

    onUpdate('add-all', ids);
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
