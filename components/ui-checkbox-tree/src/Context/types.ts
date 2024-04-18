import { TreeLeaf, TreeNode } from '@tabula/tree-utils';

// region States

export type ItemState = {
  isChecked: boolean;
  isIndeterminate: boolean;
};

export type ItemStates<Leaf extends TreeLeaf> = Map<Leaf['id'], ItemState>;

export type Selected<Leaf extends TreeLeaf> = Array<Leaf['id']> | Set<Leaf['id']>;

// endregion States

// region Handlers

export type ItemChangeHandler<Leaf extends TreeLeaf> = (id: Leaf['id'], isChecked: boolean) => void;

export type ChangeHandler<Leaf extends TreeLeaf> = (
  ids: Array<Leaf['id']>,
  isChecked: boolean,
) => void;

// endregion Handlers

// region Getters

export type LabelGetter<Leaf extends TreeLeaf> = (node: TreeNode<Leaf>) => string;

// endregion Getters

// region Context

export type ContextValue<Leaf extends TreeLeaf = TreeLeaf> = {
  itemStates: ItemStates<Leaf>;

  onChangeLeaf: ItemChangeHandler<Leaf>;
  onChangeBranch: ItemChangeHandler<Leaf>;

  labelOf: LabelGetter<Leaf>;
};

// endregion Context
