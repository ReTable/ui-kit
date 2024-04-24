import { Tree as BaseTree } from '~';

export type Leaf = {
  id: number;
};

export type Tree = BaseTree<Leaf>;
