import { FC, useState } from 'react';

import { Tree } from '@tabula/ui-tree';

import { UiCheckboxTree } from '~';

import * as styles from './styles.css';

import { Leaf } from './types';

type Props = {
  tree: Tree<Leaf>;
};

const labelOf = (item: Leaf) => item.name;

export const CheckboxTree: FC<Props> = ({ tree }) => {
  const [selected, setSelected] = useState<Set<Leaf['id']>>(new Set());

  return (
    <div className={styles.container}>
      <UiCheckboxTree tree={tree} labelOf={labelOf} selected={selected} onChange={setSelected} />
    </div>
  );
};
