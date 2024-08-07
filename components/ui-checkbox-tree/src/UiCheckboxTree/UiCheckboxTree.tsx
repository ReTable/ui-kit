import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { UiTree } from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { Branch as BranchComponent } from '../Branch';
import { LabelGetter, Provider } from '../Context';
import { Header } from '../Header';
import { Leaf as LeafComponent } from '../Leaf';
import { ChangeHandler, Match, Selected, Tree, TreeLeaf } from '../types';

export type Props<Leaf extends TreeLeaf> = {
  /**
   * User defined CSS class which be assigned to the root element.
   */
  className?: string;

  /**
   * Tree of elements to render.
   */
  tree: Tree<Leaf>;

  /**
   * Function which returns a label for the given node.
   */
  labelOf: LabelGetter<Leaf>;

  /**
   * Set of selected leaf ids.
   */
  selected: Selected<Leaf>;

  /**
   * Handler which called with a new set of selected leaf ids.
   */
  onChange: ChangeHandler<Leaf>;

  /**
   * Match predicate which returns `true` if leaf matches with search value.
   */
  match?: Match<Leaf>;

  /**
   * Pattern to search nodes.
   */
  pattern?: string;

  /**
   * Optional attribute for test purposes.
   */
  testId?: string;
};

export function UiCheckboxTree<Leaf extends TreeLeaf>({
  className,
  labelOf,
  match,
  onChange,
  pattern,
  selected,
  testId,
  tree,
}: Props<Leaf>): ReactNode {
  const [rootTestId, headerTestId, treeTestId] =
    testId == null ? [] : [testId, `${testId}--header`, `${testId}--items`];

  return (
    <Provider labelOf={labelOf} onChange={onChange} selected={selected} tree={tree}>
      <div className={clsx(styles.root, className)} data-testid={rootTestId}>
        <Header className={styles.header} testId={headerTestId} />
        <UiTree
          branch={BranchComponent}
          className={styles.list}
          leaf={LeafComponent}
          match={match}
          pattern={pattern}
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
