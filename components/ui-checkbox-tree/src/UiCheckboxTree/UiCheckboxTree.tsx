import { ReactElement } from 'react';

import { clsx } from 'clsx/lite';

import { Tree, TreeLeaf, UiTree } from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { BranchRenderer } from '../BranchRenderer';
import { LeafRenderer } from '../LeafRenderer';

export type Props<Leaf extends TreeLeaf> = {
  className?: string;

  tree: Tree<Leaf>;
};

export function UiCheckboxTree<Leaf extends TreeLeaf>({
  className,
  tree,
}: Props<Leaf>): ReactElement {
  return (
    <UiTree
      className={clsx(styles.root, className)}
      tree={tree}
      leaf={LeafRenderer}
      branch={BranchRenderer}
    />
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
