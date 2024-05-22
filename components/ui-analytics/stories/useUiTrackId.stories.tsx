import { Meta, StoryObj } from '@storybook/react';

import { UiAnalytics } from '~';

import { TrackId } from './components';

// region Meta

const meta: Meta = {
  component: UiAnalytics,

  title: 'useUiTrackId',
};

export default meta;

// endregion Meta

export const Example: StoryObj = {
  render() {
    return (
      <UiAnalytics trackId="parent">
        <TrackId />
      </UiAnalytics>
    );
  },

  tags: ['!dev'],
};
