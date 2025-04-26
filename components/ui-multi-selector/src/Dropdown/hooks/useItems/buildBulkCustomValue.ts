import { BatchAction, UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

import { renderFound } from './renderFound';

type Options = {
  addFound: BatchAction;
  onUpdate: UpdateHandler;
  values: string[];
};

export function buildBulkCustomValue({ addFound, onUpdate, values }: Options): Item {
  const handleClick = () => {
    onUpdate('add-custom', values);
  };

  const { icon, label } = typeof addFound === 'string' ? { label: addFound } : addFound;

  return {
    key: 'bulk-custom-value',

    icon,
    label: renderFound(label, values),

    onSelect: handleClick,
  };
}
