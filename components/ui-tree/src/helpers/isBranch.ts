import { Branch, Item } from '../types';

export function isBranch<Data, Id>(item: Item<Data, Id>): item is Branch<Data, Id> {
  return 'children' in item;
}
