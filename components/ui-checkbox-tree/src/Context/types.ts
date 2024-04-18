import { TreeLeaf, TreeNode } from '@tabula/ui-tree';

import { CheckboxState } from '../types';

// region States

export type CheckboxesStates<Leaf extends TreeLeaf> = Map<Leaf['id'], CheckboxState>;

// endregion States

// region Handlers

export type ItemChangeHandler<Leaf extends TreeLeaf> = (id: Leaf['id'], isChecked: boolean) => void;

// endregion Handlers

// region Getters

export type LabelGetter<Leaf extends TreeLeaf> = (node: TreeNode<Leaf>) => string;

// endregion Getters

// region Context

export type ContextValue<Leaf extends TreeLeaf = TreeLeaf> = {
  itemStates: CheckboxesStates<Leaf>;

  onChangeLeaf: ItemChangeHandler<Leaf>;
  onChangeBranch: ItemChangeHandler<Leaf>;

  labelOf: LabelGetter<Leaf>;
};

// endregion Context
