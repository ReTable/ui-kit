import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';

import { IconsTable } from './IconsTable';

export default {
  component: IconsTable,

  title: 'All icons',
};

type Story = StoryObj<typeof IconsTable>;

export const Icons: Story = {
  render(): ReactElement {
    return <IconsTable />;
  },
};
