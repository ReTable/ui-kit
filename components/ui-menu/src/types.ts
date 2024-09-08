import { ComponentType, ReactNode } from 'react';

import { sizes, variants } from './shared.css';

import { ItemProps } from './Item';

export type Size = keyof typeof sizes;
export type Variant = keyof typeof variants;

export type IconComponentType = ComponentType<{ className?: string }>;

type Identifiable = {
  id: string;
};

export type Item = Identifiable & ItemProps;

export type ItemWithSubMenu = Item & {
  emptyContent?: ReactNode;
  config: Array<Item | Title | Divider>;
  menuClassName?: string;
  popupClassName?: string;
};

export type Divider = Identifiable & {
  divider: true;
};

export type Title = Identifiable & {
  menuTitle: true;
  content: ReactNode;
};

export type ConfigItem = Item | ItemWithSubMenu | Title | Divider;
