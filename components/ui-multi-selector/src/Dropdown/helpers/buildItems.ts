import { AddHandler, Option, Selected } from '../../types';

import { Item, Part } from '../Dropdown.types';

import { match } from './match';
import { renderParts } from './renderParts';

type Options = {
  onAdd: AddHandler;
  options: Option[];
  search: string;
  selected: Selected;
};

export function buildItems({ onAdd, options, search, selected }: Options): [string[], Item[]] {
  const values: string[] = [];
  const items: Item[] = [];

  for (const option of options) {
    if (selected.has(option.value)) {
      continue;
    }

    const [isMatches, parts]: [boolean, Part[]] = match(option.label ?? option.value, search);

    if (!isMatches) {
      continue;
    }

    values.push(option.value);

    items.push({
      type: 'item',

      id: `item-${option.value}`,

      icon: option.icon,

      label: renderParts(parts),

      onClick: () => {
        onAdd([option.value]);
      },
    });
  }

  return [values, items];
}
