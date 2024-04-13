import { ReactElement } from 'react';

import { clsx } from 'clsx/lite';

import { Tree, UiTree } from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { Branch } from '../Branch';
import { Leaf } from '../Leaf';
import { BaseData, BaseId } from '../types';

export type Props<Id extends BaseId = BaseId, Data extends BaseData = BaseData> = {
  className?: string;

  tree: Tree<Id, Data>;
};

export function UiCheckboxTree<Id extends BaseId = BaseId, Data extends BaseData = BaseData>({
  className,
  tree,
}: Props<Id, Data>): ReactElement {
  return (
    <UiTree
      className={clsx(styles.root, className)}
      tree={tree}
      leafComponent={Leaf}
      branchComponent={Branch}
    />
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
