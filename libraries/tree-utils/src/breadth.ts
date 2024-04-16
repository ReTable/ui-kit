import { TraverseItem, traverse } from './traverse';
import { Tree, TreeLeaf } from './types';

export function* breadth<Leaf extends TreeLeaf>(tree: Tree<Leaf>): Generator<TraverseItem<Leaf>> {
  for (const item of traverse(tree, 'breadth-first')) {
    yield item;
  }
}
