import { Meta, StoryObj } from '@storybook/react';

import { UiAnalytics } from '~';

import { TrackId, TrackIds } from './components';

// region Meta

const meta: Meta<typeof UiAnalytics> = {
  component: UiAnalytics,

  title: 'UiAnalytics',

  argTypes: {
    trackId: {
      control: 'text',
    },
  },
};

export default meta;

// endregion Meta

type Story = StoryObj<typeof UiAnalytics>;

export const Playground: Story = {
  args: {
    trackId: 'parent',
  },

  render({ trackId }) {
    return (
      <UiAnalytics trackId={trackId}>
        <TrackId />
        <TrackIds />
      </UiAnalytics>
    );
  },
};
