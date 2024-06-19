import { Tree as BaseTree } from '~';

export type Leaf = {
  id: number;

  isDisabled?: boolean;
};

export type Tree = BaseTree<Leaf>;
