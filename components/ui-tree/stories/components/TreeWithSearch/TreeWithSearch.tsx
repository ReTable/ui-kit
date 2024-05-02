import { ChangeEventHandler, ReactNode, useCallback, useState } from 'react';

import { Tree, TreeNode } from '@tabula/tree-utils';

import { UiTree } from '~';

import { treeWithSearch } from './TreeWithSearch.css';

import { Branch } from '../Branch';
import { Leaf } from '../Leaf';
import { Leaf as LeafType } from '../types';

type Props = {
  tree: Tree<LeafType>;
};

function match(node: TreeNode<LeafType>, search: string): boolean {
  return node.name.includes(search);
}

export function TreeWithSearch({ tree }: Props): ReactNode {
  const [pattern, setPattern] = useState('');

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    setPattern(event.target.value);
  }, []);

  return (
    <div className={treeWithSearch}>
      <input onChange={handleChange} value={pattern} />
      <UiTree tree={tree} leaf={Leaf} branch={Branch} pattern={pattern} match={match} />
    </div>
  );
}
