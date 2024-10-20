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
    const { icon, label, value } =
      typeof option === 'string' ? { label: option, value: option } : option;

    if (selected.has(value)) {
      continue;
    }

    const [isMatches, parts]: [boolean, Part[]] = match(label ?? value, search);

    if (!isMatches) {
      continue;
    }

    values.push(value);

    items.push({
      type: 'item',

      key: `item-${value}`,

      icon,

      label: renderParts(parts),

      onClick: () => {
        onAdd([value]);
      },
    });
  }

  return [values, items];
}
