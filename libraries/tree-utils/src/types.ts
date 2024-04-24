export type TreeLeaf = {
  [key: string]: unknown;

  id: number | string;
};

export type TreeBranch<Leaf extends TreeLeaf> = Leaf & {
  children: Array<Leaf | TreeBranch<Leaf>>;
};

export type TreeNode<Leaf extends TreeLeaf> = Leaf | TreeBranch<Leaf>;

export type Tree<Leaf extends TreeLeaf> = Array<TreeNode<Leaf>>;
