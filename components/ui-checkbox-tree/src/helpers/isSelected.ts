import { TreeLeaf } from '@tabula/ui-tree';

import { Selected } from '../types';

export function isSelected<Leaf extends TreeLeaf>(
  id: Leaf['id'],
  selected: Selected<Leaf>,
): boolean {
  return Array.isArray(selected) ? selected.includes(id) : selected.has(id);
}
