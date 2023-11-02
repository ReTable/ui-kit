import {
  enterLeftSidebar,
  enterLeftSidebarActive,
  enterRightSidebar,
  enterRightSidebarActive,
  exitLeftSidebar,
  exitLeftSidebarActive,
  exitRightSidebar,
  exitRightSidebarActive,
} from './UiLayoutView.css';

export const DURATION = 150;

export const LEFT_SIDEBAR_CLASS_NAMES = {
  enter: enterLeftSidebar,
  enterActive: enterLeftSidebarActive,
  enterDone: enterLeftSidebarActive,
  exit: exitLeftSidebar,
  exitActive: exitLeftSidebarActive,
  exitDone: exitLeftSidebarActive,
};

export const RIGHT_SIDEBAR_CLASS_NAMES = {
  enter: enterRightSidebar,
  enterActive: enterRightSidebarActive,
  enterDone: enterRightSidebarActive,
  exit: exitRightSidebar,
  exitActive: exitRightSidebarActive,
  exitDone: exitRightSidebarActive,
};
