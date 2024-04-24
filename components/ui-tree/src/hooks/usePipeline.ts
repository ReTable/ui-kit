import { Tree, TreeLeaf } from '@tabula/tree-utils';

import { Match, RenderPipeline } from '../types';

import { useDefaultIteratorOptions } from './useDefaultIteratorOptions';
import { useIterator } from './useIterator';
import { useMatch } from './useMatch';
import { useSearchIteratorOptions } from './useSearchIteratorOptions';

type Options<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  pattern?: string;
  match?: Match<Leaf>;
};

export function usePipeline<Leaf extends TreeLeaf>({
  match,
  pattern,
  tree,
}: Options<Leaf>): RenderPipeline<Leaf> {
  const isMatches = useMatch({ match, pattern });

  const defaultOptions = useDefaultIteratorOptions(tree);
  const searchOptions = useSearchIteratorOptions(tree, isMatches);

  return useIterator(tree, isMatches == null ? defaultOptions : searchOptions);
}
