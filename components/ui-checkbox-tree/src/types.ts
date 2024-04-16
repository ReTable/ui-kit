import { TreeLeaf } from '@tabula/ui-tree';

export type Selected<Leaf extends TreeLeaf> = Array<Leaf['id']> | Set<Leaf['id']>;

export type BranchFlags = {
  isChecked: boolean;
  isIndeterminate: boolean;
};

export type Flags<Leaf extends TreeLeaf> = {
  branchesFlags: Map<Leaf['id'], BranchFlags>;
  leavesFlags: Map<Leaf['id'], boolean>;
};

export type ChangeHandler<Leaf extends TreeLeaf> = (
  ids: Array<Leaf['id']>,
  isSelected: boolean,
) => void;
