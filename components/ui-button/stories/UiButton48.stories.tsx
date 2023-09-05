import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';

import { UiButton48, UiButton48Props } from '~';

import { ChevronRightIcon } from './ChevronIcon';
import { ArgsOf, argTypes as baseArgTypes, toProps } from './helpers';

type Args = ArgsOf<UiButton48Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = ['primary', 'secondary'];

const meta = {
  title: 'UiButton48',

  argTypes,

  args: {
    as: 'button',
    label: 'Press me!',
    variant: argTypes.variant.options[0],
  },
};

export default meta;

function render(args: Args): ReactElement {
  const props = toProps<UiButton48Props>(args);

  if (props.variant === 'secondary' && props.icon != null) {
    props.icon = ChevronRightIcon;
  }

  return <UiButton48 {...props} />;
}

type Story = StoryObj<Args>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render,
};
