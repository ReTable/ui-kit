import { AddHandler, SelectFound } from '../../types';

import { Item } from '../Dropdown.types';

import { renderFound } from './renderFound';

type Options = {
  onAdd: AddHandler;
  search: string;
  selectFound: SelectFound;
  values: string[];
};

export function buildSelectFound({ onAdd, selectFound, search, values }: Options): Item {
  const handleClick = () => {
    onAdd(values);
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
