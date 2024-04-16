import { Tree, TreeLeaf, breadth } from '@tabula/tree-utils';

function expand<Id>(current: Set<Id>, id: Id): Set<Id> {
  const next = new Set(current);

  next.add(id);

  return next;
}
function collapse<Leaf extends TreeLeaf>(
  current: Set<Leaf['id']>,
  id: Leaf['id'],
  tree: Tree<Leaf>,
): Set<Leaf['id']> {
  const next = new Set(current);

  for (const { node } of breadth(tree, { subTree: id })) {
    next.delete(node.id);
  }

  return next;
}
2;
export function toggle<Leaf extends TreeLeaf>(
  current: Set<Leaf['id']>,
  id: Leaf['id'],
  tree: Tree<Leaf>,
): Set<Leaf['id']> {
  return current.has(id) ? collapse(current, id, tree) : expand(current, id);
}
