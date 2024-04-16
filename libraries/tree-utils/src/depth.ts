import { TraverseItem, TraverseOptions, traverse } from './traverse';
import { Tree, TreeLeaf } from './types';

export function* depth<Leaf extends TreeLeaf>(
  tree: Tree<Leaf>,
  options?: TraverseOptions<Leaf>,
): Generator<TraverseItem<Leaf>> {
  for (const item of traverse(tree, 'depth-first', options)) {
    yield item;
  }
}
