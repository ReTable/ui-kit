import { ComponentType } from 'react';

export type Leaf<Data, Id> = {
  id: Id;

  data: Data;
};

export type Branch<Data, Id> = {
  id: Id;

  data: Data;

  children: Array<Leaf<Data, Id> | Branch<Data, Id>>;
};

export type Item<Data, Id> = Leaf<Data, Id> | Branch<Data, Id>;

export type Tree<Data, Id> = Array<Item<Data, Id>>;

export type LeafComponentProps<Data, Id> = {
  id: Id;

  data: Data;

  level: number;
};

export type BranchComponentProps<Data, Id> = {
  id: Id;

  data: Data;

  level: number;
  isExpanded: boolean;

  onToggle: () => void;
};

export type LeafComponentType<Data, Id> = ComponentType<LeafComponentProps<Data, Id>>;

export type BranchComponentType<Data, Id> = ComponentType<BranchComponentProps<Data, Id>>;
