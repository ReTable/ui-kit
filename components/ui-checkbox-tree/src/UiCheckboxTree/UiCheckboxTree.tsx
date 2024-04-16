import { ReactElement, useCallback } from 'react';

import { clsx } from 'clsx/lite';

import {
  BranchComponentType,
  LeafComponentType,
  Tree,
  TreeLeaf,
  TreeNode,
  UiTree,
} from '@tabula/ui-tree';

import * as styles from './UiCheckboxTree.css';

import { BranchRenderer } from '../BranchRenderer';
import { LeafRenderer } from '../LeafRenderer';
import { useChange, useFlags } from '../hooks';
import { ChangeHandler, Selected } from '../types';

export type Props<Leaf extends TreeLeaf> = {
  className?: string;

  tree: Tree<Leaf>;

  labelOf: (node: TreeNode<Leaf>) => string;

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
  const flags = useFlags(tree, selected);

  const [onChangeLeaf, onChangeBranch] = useChange(tree, onChange);

  const LeafComponent: LeafComponentType<Leaf> = useCallback(
    ({ node, level }) => {
      const isChecked = flags.leavesFlags.get(node.id) ?? false;

      const handleChange = (isChecked: boolean) => {
        onChangeLeaf(node.id, isChecked);
      };

      return (
        <LeafRenderer
          isChecked={isChecked}
          level={level}
          label={labelOf(node)}
          onChange={handleChange}
        />
      );
    },
    [flags.leavesFlags, labelOf, onChangeLeaf],
  );

  const BranchComponent: BranchComponentType<Leaf> = useCallback(
    ({ isExpanded, node, level, onToggle }) => {
      const { isChecked, isIndeterminate } = flags.branchesFlags.get(node.id) ?? {
        isChecked: false,
        isIndeterminate: false,
      };

      const handleChange = (isChecked: boolean) => {
        onChangeBranch(node.id, isChecked);
      };

      return (
        <BranchRenderer
          isChecked={isChecked}
          isIndeterminate={isIndeterminate}
          onToggle={onToggle}
          level={level}
          isExpanded={isExpanded}
          label={labelOf(node)}
          onChange={handleChange}
        />
      );
    },
    [flags.branchesFlags, labelOf, onChangeBranch],
  );

  return (
    <UiTree
      className={clsx(styles.root, className)}
      tree={tree}
      leaf={LeafComponent}
      branch={BranchComponent}
    />
  );
}

if (import.meta.env.DEV) {
  UiCheckboxTree.displayName = 'ui-checkbox-tree(UiCheckboxTree)';
}
