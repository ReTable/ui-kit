import { IconMap, IconSize, IconsMap } from './Table.types';

type IconsTable = Record<string, IconMap>;

function fillWith(table: IconsTable, size: IconSize, map: IconsMap): void {
  for (const [name, component] of Object.entries(map)) {
    const key = name.slice(0, -5);

    const entry = table[key] ?? {};

    entry[size] = component;

    table[key] = entry;
  }
}

export function useTable(
  small: IconsMap,
  medium: IconsMap,
  large: IconsMap,
): Array<[string, IconMap]> {
  const table: IconsTable = {};

  fillWith(table, 'small', small);
  fillWith(table, 'medium', medium);
  fillWith(table, 'large', large);

  return [...Object.entries(table)].sort(([left], [right]) => left.localeCompare(right));
}
