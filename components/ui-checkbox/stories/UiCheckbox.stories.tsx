import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { UiCheckbox } from '~';

import { Complex, Simple } from './components';

// region Meta

const meta: Meta<typeof UiCheckbox> = {
  title: 'UiCheckbox',

  component: UiCheckbox,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiCheckbox>;

const staticParameters = {
  controls: {
    exclude: /.*/g,
    hideNoControlsWarning: true,
  },
};

const onChangeAction = action('onChange');

// region Story Utilities

// region Stories

export const Unchecked: Story = {
  args: {
    children: 'Is ugly?',
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const Checked: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const Indeterminate: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isIndeterminate: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const UncheckedDisabled: Story = {
  args: {
    children: 'Is ugly?',
    isDisabled: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const CheckedDisabled: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isDisabled: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

export const IndeterminateDisabled: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isDisabled: true,
    isIndeterminate: true,
    onChange: onChangeAction,
  },
  parameters: staticParameters,
};

// endregion Stories

// region Playgrounds

export const SimpleInteraction: StoryObj<typeof Simple> = {
  render() {
    return <Simple />;
  },
};

export const ComplexInteraction: StoryObj<typeof Complex> = {
  render() {
    return <Complex />;
  },
};

export const Playground: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
  },
  argTypes: {
    children: {
      name: 'Label',
      type: 'string',
    },
    isChecked: {
      name: 'Is checked?',
      type: 'boolean',
    },
    isIndeterminate: {
      name: 'Is indeterminate?',
      type: 'boolean',
    },
    isDisabled: {
      name: 'Is disabled?',
      type: 'boolean',
    },
  },
  parameters: {
    controls: {
      exclude: /^(className|id|name|onChange|testId|trackId)$/g,
    },
  },
};

// endregion Playgrounds
