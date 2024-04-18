import { ReactNode } from 'react';

import { Tree, TreeLeaf, UiTree } from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { Branch as BranchComponent } from '../Branch';
import { LabelGetter, Provider } from '../Context';
import { Header } from '../Header';
import { Leaf as LeafComponent } from '../Leaf';
import { ChangeHandler, Selected } from '../types';

export type Props<Leaf extends TreeLeaf> = {
  tree: Tree<Leaf>;

  labelOf: LabelGetter<Leaf>;

  selected: Selected<Leaf>;

  onChange: ChangeHandler<Leaf>;
};

export function UiCheckboxTree<Leaf extends TreeLeaf>({
  tree,
  labelOf,
  selected,
  onChange,
}: Props<Leaf>): ReactNode {
  return (
    <Provider labelOf={labelOf} onChange={onChange} selected={selected} tree={tree}>
      <div className={styles.root}>
        <Header tree={tree} selected={selected} onChange={onChange} />
        <UiTree className={styles.list} branch={BranchComponent} leaf={LeafComponent} tree={tree} />
      </div>
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
