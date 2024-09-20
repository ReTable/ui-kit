import { Meta, StoryObj } from '@storybook/react';

import { UiSlider } from '~';

import { Range } from './Range';

// region Meta

const meta: Meta<typeof UiSlider> = {
  title: 'UiSlider',

  argTypes: {
    isDisabled: {
      control: 'boolean',

      name: 'Is disabled?',
    },

    max: {
      control: 'number',

      name: 'Max value',
    },

    min: {
      control: 'number',

      name: 'Min value',
    },

    step: {
      control: 'number',

      name: 'Step',
    },

    variant: {
      control: 'select',

      name: 'Variant',

      options: ['normal', 'ai'],
    },
  },

  component: UiSlider,
};

export default meta;

// endregion Meta

// region Story Utilities

type Story = StoryObj<typeof Range>;

function storyOf(args: Story['args'] = {}, isInteractive = false): Story {
  return {
    args: {
      min: 0,
      max: 100,

      step: 1,

      ...args,
    },

    parameters: {
      controls: {
        exclude: isInteractive ? /^(className|id|initialValue|name|onChange|value)$/g : /(.*)/g,
      },
    },

    render(props) {
      return <Range {...props} />;
    },
  };
}

// endregion Story Utilities

export const Default = storyOf();

export const PositiveMinMax = storyOf({
  min: 10,
  max: 20,

  initialValue: 15,
});

export const MixedMinMax = storyOf({
  min: -10,
  max: 10,

  initialValue: 0,
});

export const NegativeMinMax = storyOf({
  min: -20,
  max: -10,

  initialValue: -15,
});

export const IntegerStep = storyOf({
  min: 0,
  max: 100,

  step: 10,

  initialValue: 0,
});

export const DecimalStep = storyOf({
  min: 0,
  max: 10,

  step: 0.5,

  initialValue: 0,
});

export const Disabled = storyOf({
  isDisabled: true,

  initialValue: 75,
});

export const NormalVariant = storyOf({
  variant: 'normal',

  initialValue: 75,
});

export const AiVariant = storyOf({
  variant: 'ai',

  initialValue: 75,
});

export const DisabledNormalVariant = storyOf({
  isDisabled: true,

  variant: 'normal',

  initialValue: 75,
});

export const DisabledAiVariant = storyOf({
  isDisabled: true,

  variant: 'ai',

  initialValue: 75,
});

export const Playground = storyOf(
  {
    initialValue: 0,
  },
  true,
);
