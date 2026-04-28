import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';

import { UiLayoutView } from '~';

import { LayoutContainer } from './LayoutContainer';
import { body, leftSidebar, rightSidebar, root } from './style.css';

type SidebarState = {
  isLeftSidebarVisible: boolean;
  isRightSidebarVisible: boolean;
};

export default {
  component: UiLayoutView,

  title: 'UiLayoutView',
};

type Story = StoryObj;

function renderLeftSidebar(): string {
  return 'left sidebar';
}

function renderRightSidebar(): string {
  return 'right sidebar';
}

function renderBothSidebars({
  isLeftSidebarVisible,
  isRightSidebarVisible,
}: SidebarState): ReactElement {
  return (
    <UiLayoutView
      rootClassName={root}
      bodyClassName={body}
      isLeftSidebarVisible={isLeftSidebarVisible}
      leftSidebar={renderLeftSidebar}
      leftSidebarClassName={leftSidebar}
      isRightSidebarVisible={isRightSidebarVisible}
      rightSidebar={renderRightSidebar}
      rightSidebarClassName={rightSidebar}
    >
      body
    </UiLayoutView>
  );
}

function BothSidebarsView(): ReactElement {
  return (
    <LayoutContainer leftSidebar rightSidebar>
      {renderBothSidebars}
    </LayoutContainer>
  );
}

export const BothSidebars: Story = {
  render() {
    return <BothSidebarsView />;
  },
};
