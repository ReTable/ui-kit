import { depth } from '@tabula/tree-utils';
import { Tree, TreeLeaf } from '@tabula/ui-tree';

export function collectIds<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  id: Leaf['id'],
): Array<Leaf['id']> {
  const result: Array<Leaf['id']> = [];

  for (const { isLeaf, node } of depth(tree, { subTree: id })) {
    if (isLeaf) {
      result.push(node.id);
    }
  }

  return result;
}
