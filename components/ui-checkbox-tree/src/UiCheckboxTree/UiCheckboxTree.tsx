import { ReactNode } from 'react';

import { TreeLeaf } from '@tabula/tree-utils';
import { Tree, UiTree } from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { Branch as BranchComponent } from '../Branch';
import { ChangeHandler, LabelGetter, Provider, Selected } from '../Context';
import { Leaf as LeafComponent } from '../Leaf';

type Props<Leaf extends TreeLeaf> = {
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
      <UiTree className={styles.root} branch={BranchComponent} leaf={LeafComponent} tree={tree} />
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
