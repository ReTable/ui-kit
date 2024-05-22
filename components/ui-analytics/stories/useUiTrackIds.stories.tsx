import { Meta, StoryObj } from '@storybook/react';

import { UiAnalytics } from '~';

import { TrackIds } from './components';

// region Meta

const meta: Meta = {
  component: UiAnalytics,

  title: 'useUiTrackIds',
};

export default meta;

// endregion Meta

export const Example: StoryObj = {
  render() {
    return (
      <UiAnalytics trackId="parent">
        <TrackIds />
      </UiAnalytics>
    );
  },

  tags: ['!dev'],
};
