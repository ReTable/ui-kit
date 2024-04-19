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

  testId?: string;
};

export function UiCheckboxTree<Leaf extends TreeLeaf>({
  tree,
  labelOf,
  selected,
  onChange,
  testId,
}: Props<Leaf>): ReactNode {
  const [rootTestId, headerTestId, treeTestId] =
    testId == null ? [] : [testId, `${testId}--header`, `${testId}--tree`];

  return (
    <Provider labelOf={labelOf} onChange={onChange} selected={selected} tree={tree}>
      <div className={styles.root} data-testid={rootTestId}>
        <Header
          className={styles.header}
          onChange={onChange}
          selected={selected}
          testId={headerTestId}
          tree={tree}
        />
        <UiTree
          branch={BranchComponent}
          className={styles.list}
          leaf={LeafComponent}
          testId={treeTestId}
          tree={tree}
        />
      </div>
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
