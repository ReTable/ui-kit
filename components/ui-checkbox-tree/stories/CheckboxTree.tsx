import { ChangeEventHandler, FC, useCallback, useState } from 'react';

import { Tree, TreeNode } from '@tabula/ui-tree';

import { UiCheckboxTree } from '~';

import * as styles from './styles.css';

import { Leaf } from './types';

type Props = {
  tree: Tree<Leaf>;
};

const labelOf = (item: Leaf) => item.name;

function match(node: TreeNode<Leaf>, search: string): boolean {
  return node.name.includes(search);
}

export const CheckboxTree: FC<Props> = ({ tree }) => {
  const [selected, setSelected] = useState<Set<Leaf['id']>>(new Set());

  const [pattern, setPattern] = useState('');

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    setPattern(event.target.value);
  }, []);

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        onChange={handleChange}
        placeholder="Search"
        value={pattern}
      />
      <UiCheckboxTree
        tree={tree}
        labelOf={labelOf}
        selected={selected}
        onChange={setSelected}
        pattern={pattern}
        match={match}
      />
    </div>
  );
};
