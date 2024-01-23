import { StoryObj } from '@storybook/react';

import { UseTrackId } from './UseTrackId';

export default {
  component: UseTrackId,

  title: 'use-track-id',

  argTypes: {
    scope: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof UseTrackId>;

export const Default: Story = {
  render({ scope }) {
    return <UseTrackId scope={scope} />;
  },
};
