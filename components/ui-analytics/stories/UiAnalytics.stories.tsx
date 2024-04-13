import { StoryObj } from '@storybook/react';

import { UiAnalytics } from '~';

import { UseUiTrackId } from './UseUiTrackId';
import { UseUiTrackIds } from './UseUiTrackIds';

export default {
  component: UiAnalytics,

  title: 'UiAnalytics',

  argTypes: {
    trackId: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof UiAnalytics>;

export const Default: Story = {
  render({ trackId }) {
    return (
      <UiAnalytics trackId={trackId}>
        <UseUiTrackId />
        <UseUiTrackIds />
      </UiAnalytics>
    );
  },
};
