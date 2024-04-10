import { ComponentType } from 'react';

export type Leaf<Id, Data> = {
  id: Id;

  data: Data;
};

export type Branch<Id, Data> = {
  id: Id;

  data: Data;

  children: Array<Leaf<Id, Data> | Branch<Id, Data>>;
};

export type Item<Id, Data> = Leaf<Id, Data> | Branch<Id, Data>;

export type Tree<Id, Data> = Array<Item<Id, Data>>;

export type LeafComponentProps<Id, Data> = {
  id: Id;

  data: Data;

  level: number;
};

export type BranchComponentProps<Id, Data> = {
  id: Id;

  data: Data;

  level: number;
  isExpanded: boolean;

  onToggle: () => void;
};

export type LeafComponentType<Id, Data> = ComponentType<LeafComponentProps<Id, Data>>;

export type BranchComponentType<Id, Data> = ComponentType<BranchComponentProps<Id, Data>>;
