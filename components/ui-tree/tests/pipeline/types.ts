export type Data = {
  name: string;
};

export enum Kind {
  VisibleBranch = 'VisibleBranch',
  HiddenBranch = 'HiddenBranch',
  VisibleLeaf = 'VisibleLeaf',
  HiddenLeaf = 'HiddenLeaf',
}

export type Meta = {
  id: number;

  name: string;

  testId: string;
};

export type VisibleBranch = Meta & {
  kind: Kind.VisibleBranch;

  level: number;
  isExpanded: boolean;
};

export type HiddenBranch = Meta & {
  kind: Kind.HiddenBranch;
};

export type VisibleLeaf = Meta & {
  kind: Kind.VisibleLeaf;

  level: number;
};

export type HiddenLeaf = Meta & {
  kind: Kind.HiddenLeaf;
};
export type PipelineItem = VisibleBranch | VisibleLeaf | HiddenBranch | HiddenLeaf;

export type Pipeline = PipelineItem[];
