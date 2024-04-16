import { TraverseFilter, TraverseItem, traverse } from './traverse';
import { Tree, TreeLeaf } from './types';

export function* depth<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  filter?: TraverseFilter<Leaf>,
): Generator<TraverseItem<Leaf>> {
  for (const item of traverse(tree, 'depth-first', filter)) {
    yield item;
  }
}
