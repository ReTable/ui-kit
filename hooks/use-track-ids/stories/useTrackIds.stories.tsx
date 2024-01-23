import { StoryObj } from '@storybook/react';

import { UseTrackIds } from './UseTrackIds';

export default {
  component: UseTrackIds,

  title: 'use-track-ids',

  argTypes: {
    scope: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof UseTrackIds>;

export const Default: Story = {
  render({ scope }) {
    return <UseTrackIds scope={scope} />;
  },
};
