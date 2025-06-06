import { BatchAction, UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

import { renderFound } from './renderFound';

type Options = {
  addFound: BatchAction;
  onUpdate: UpdateHandler;
  search: string;
};

export function buildCustomValue({ addFound, onUpdate, search }: Options): Item {
  const handleClick = () => {
    onUpdate('add-custom', [search]);
  };

  const { icon, label } = typeof addFound === 'string' ? { label: addFound } : addFound;

  return {
    key: 'custom-value',

    icon,
    label: renderFound(label, [search]),

    onSelect: handleClick,

    hasDividerAfter: true,
  };
}
