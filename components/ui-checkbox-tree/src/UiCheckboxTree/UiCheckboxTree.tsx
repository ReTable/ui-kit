import { ReactElement } from 'react';

import { clsx } from 'clsx/lite';

import { Tree, TreeLeaf, UiTree } from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { Branch } from '../Branch';
import { ChangeHandler, LabelGetter, Provider, Selected } from '../Context';
import { Leaf } from '../Leaf';

export type Props<Leaf extends TreeLeaf> = {
  className?: string;

  tree: Tree<Leaf>;

  labelOf: LabelGetter<Leaf>;

  onChange?: ChangeHandler<Leaf>;
  selected: Selected<Leaf>;
};

export function UiCheckboxTree<Leaf extends TreeLeaf>({
  className,
  labelOf,
  onChange,
  selected,
  tree,
}: Props<Leaf>): ReactElement {
  return (
    <Provider onChange={onChange} labelOf={labelOf} selected={selected} tree={tree}>
      <UiTree className={clsx(styles.root, className)} tree={tree} leaf={Leaf} branch={Branch} />
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
