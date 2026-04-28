import { StoryObj } from '@storybook/react';

import { UiAnalytics } from '~';

import { UseUiTrackIds } from './UseUiTrackIds';

type Args = {
  trackId?: string | null;
};

export default {
  title: 'useUiTrackIds',

  argTypes: {
    trackId: {
      control: 'text',
    },
  },
};

type Story = StoryObj<Args>;

export const Default: Story = {
  args: {
    trackId: 'parent',
  },

  render({ trackId }) {
    return (
      <UiAnalytics trackId={trackId}>
        <UseUiTrackIds />
      </UiAnalytics>
    );
  },
};
