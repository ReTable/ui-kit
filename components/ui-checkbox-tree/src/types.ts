import { TreeLeaf } from '@tabula/ui-tree';

export type CheckboxState = {
  isChecked: boolean;
  isIndeterminate: boolean;
};

export type Selected<Leaf extends TreeLeaf> = Set<Leaf['id']>;

export type ChangeHandler<Leaf extends TreeLeaf> = (ids: Selected<Leaf>) => void;
