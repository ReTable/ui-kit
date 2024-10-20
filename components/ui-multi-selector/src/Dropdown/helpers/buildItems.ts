import { Option } from '../../types';

import { Item, Part } from '../Dropdown.types';

import { match } from './match';
import { renderParts } from './renderParts';

type Options = {
  onAdd: (ids: string[]) => void;
  options: Option[];
  search: string;
  value: Set<string>;
};

export function buildItems({ onAdd, options, search, value }: Options): [string[], Item[]] {
  const ids: string[] = [];
  const items: Item[] = [];

  for (const option of options) {
    if (value.has(option.value)) {
      continue;
    }

    const [isMatches, parts]: [boolean, Part[]] = match(option.label, search);

    if (!isMatches) {
      continue;
    }

    ids.push(option.value);

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

  return [ids, items];
}
