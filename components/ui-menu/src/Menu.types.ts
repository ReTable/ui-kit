import { ReactNode } from 'react';

import { PublicProps, SelectHandler } from './blocks/Item';

type Base = {
  id: string;
};

export type Item = Base & PublicProps;

export type ItemWithSubMenu = Item & {
  emptyContent?: ReactNode;
  config: Array<Item | Title | Divider>;
  menuClassName?: string;
  popupClassName?: string;
};

export type Divider = Base & {
  divider: true;
};

export type Title = Base & {
  menuTitle: true;
  content: ReactNode;
};

export type ConfigItem = Item | ItemWithSubMenu | Title | Divider;

export enum Sizes {
  SmallSize = 'smallSize',
  MediumSize = 'mediumSize',
}

export enum View {
  Normal = 'normalView',
  Inverse = 'inverseView',
}

export type Props = {
  className?: string;
  subMenuClassName?: string;
  size: Sizes;
  view?: View;
  config: Array<ConfigItem>;
  emptyContent?: ReactNode;
  onSelect?: SelectHandler;
};
