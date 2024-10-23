import { SelectFound, UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

import { renderFound } from './renderFound';

type Options = {
  onUpdate: UpdateHandler;
  search: string;
  selectFound: SelectFound;
  values: string[];
};

export function buildSelectFound({ onUpdate, selectFound, search, values }: Options): Item {
  const handleClick = () => {
    onUpdate('add-found', values);
  };

  const { icon, label } = typeof selectFound === 'string' ? { label: selectFound } : selectFound;

  return {
    key: 'select-found',

    icon,
    label: renderFound(label, search),

    onSelect: handleClick,

    hasDividerAfter: true,
  };
}
