import { ReactNode, Ref } from 'react';

// ----- Sidebar definition

type HasNoLeftSidebar = {
  isLeftSidebarVisible?: never;
  leftSidebar?: never;
  leftSidebarClassName?: never;
};

type HasLeftSidebar = {
  isLeftSidebarVisible: boolean;
  leftSidebar: ReactNode;
  leftSidebarClassName?: string;
};

type HasNoRightSidebar = {
  isRightSidebarVisible?: never;
  rightSidebar?: never;
  rightSidebarClassName?: never;
};

type HasRightSidebar = {
  isRightSidebarVisible: boolean;
  rightSidebar: ReactNode;
  rightSidebarClassName?: string;
};

// ----- Combination of allowed variants

type NoSidebars = HasNoLeftSidebar & HasNoRightSidebar;

type LeftSidebar = HasLeftSidebar & HasNoRightSidebar;

type RightSidebar = HasRightSidebar & HasNoLeftSidebar;

type BothSidebars = HasLeftSidebar & HasRightSidebar;

// ----- Props

type Sidebars = NoSidebars | LeftSidebar | RightSidebar | BothSidebars;

export type Props = {
  rootClassName: string;
  bodyClassName?: string;
  children: ReactNode;
  forwardedRef?: Ref<HTMLDivElement>;
} & Sidebars;
