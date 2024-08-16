import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { UiSwitch } from '~';

// region Meta

const meta: Meta<typeof UiSwitch> = {
  title: 'UiSwitch',

  component: UiSwitch,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof UiSwitch>;

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

export const Reversed: Story = {
  args: {
    children: 'Is ugly?',
    onChange: onChangeAction,
    isReversed: true,
  },
  parameters: staticParameters,
};

export const UncheckedSmall: Story = {
  args: {
    children: 'Is ugly?',
    onChange: onChangeAction,
    size: 'small',
  },
  parameters: staticParameters,
};

export const CheckedSmall: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    onChange: onChangeAction,
    size: 'small',
  },
  parameters: staticParameters,
};

export const UncheckedDisabledSmall: Story = {
  args: {
    children: 'Is ugly?',
    isDisabled: true,
    onChange: onChangeAction,
    size: 'small',
  },
  parameters: staticParameters,
};

export const CheckedDisabledSmall: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isDisabled: true,
    onChange: onChangeAction,
    size: 'small',
  },
  parameters: staticParameters,
};

export const ReversedSmall: Story = {
  args: {
    children: 'Is ugly?',
    onChange: onChangeAction,
    isReversed: true,
    size: 'small',
  },
  parameters: staticParameters,
};

// endregion Stories

// region Playgrounds

export const Playground: Story = {
  args: {
    children: 'Is awesome?',
    isChecked: true,
    isReversed: false,
    size: 'medium',
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
    isDisabled: {
      name: 'Is disabled?',
      type: 'boolean',
    },
    isReversed: {
      name: 'Is reversed?',
      type: 'boolean',
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: {
        Small: 'small',
        Medium: 'medium',
      },
    },
  },
  parameters: {
    controls: {
      exclude: /^(className|id|isReversed|name|onChange|style|testId|trackId)$/g,
    },
  },
};

// endregion Playgrounds
