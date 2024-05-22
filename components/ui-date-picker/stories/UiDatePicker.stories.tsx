import { StoryObj } from '@storybook/react';

import { UiDatePicker } from '~';

import { Picker } from './components';

// region Meta

export default {
  title: 'UiDatePicker',

  component: UiDatePicker,
};

// endregion Meta

// region Stories

export const Date: StoryObj = {
  render() {
    return <Picker type="date" />;
  },
};

export const Time: StoryObj = {
  render() {
    return <Picker type="time" />;
  },
};

export const DateTime: StoryObj = {
  render() {
    return <Picker type="datetime" />;
  },
};

// endregion Stories
