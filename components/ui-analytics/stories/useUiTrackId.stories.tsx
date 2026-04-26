import { StoryObj } from '@storybook/react';

import { UiAnalytics } from '~';

import { UseUiTrackId } from './UseUiTrackId';

type Args = {
  trackId?: string | null;
};

export default {
  title: 'useUiTrackId',

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
        <UseUiTrackId />
      </UiAnalytics>
    );
  },
};
