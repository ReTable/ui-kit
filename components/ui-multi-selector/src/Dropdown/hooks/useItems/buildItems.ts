import { Option, Selected, UpdateHandler } from '../../../types';

import { Item, Part } from '../../Dropdown.types';

import { match } from './match';
import { renderParts } from './renderParts';

type Options = {
  allowsCustomValue?: boolean;
  onUpdate: UpdateHandler;
  options: Option[];
  search: string;
  selected: Selected;
};

export function buildItems({
  allowsCustomValue,
  onUpdate,
  options,
  search,
  selected,
}: Options): [string[], Item[]] {
  const values: string[] = [];
  const items: Item[] = [];

  // NOTE: If custom values are allowed and search is empty, then just don't
  //       suggest any items.
  if (allowsCustomValue && search.length === 0) {
    return [values, items];
  }

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
      key: `item-${value}`,

      icon,
      label: renderParts(parts),
      title: label,

      onSelect: () => {
        onUpdate('add', [value]);
      },
    });
  }

  return [values, items];
}
