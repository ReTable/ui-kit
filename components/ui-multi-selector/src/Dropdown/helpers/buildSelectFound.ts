import { SelectFound } from '../../types';

import { Item } from '../Dropdown.types';

import { renderFound } from './renderFound';

type Options = {
  ids: string[];
  onAdd: (ids: string[]) => void;
  search: string;
  selectFound: SelectFound;
};

export function buildSelectFound({ ids, onAdd, selectFound, search }: Options): Item {
  const handleClick = () => {
    onAdd(ids);
  };

  const { icon, label } = typeof selectFound === 'string' ? { label: selectFound } : selectFound;

  return {
    type: 'item',
    icon,
    id: 'select-found',
    label: renderFound(label, search),
    onClick: handleClick,
  };
}
