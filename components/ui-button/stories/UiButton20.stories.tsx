import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';

import { UiButton20, UiButton20Props } from '~';

import { ArgsOf, argTypes as baseArgTypes, toProps } from './helpers';

type Args = ArgsOf<UiButton20Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = ['contract'];

const meta = {
  title: 'UiButton20',

  argTypes,

  args: {
    as: 'button',
    label: 'Press me!',
    variant: argTypes.variant.options[0],
  },

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

function render(args: Args): ReactElement {
  return <UiButton20 {...toProps(args)} />;
}

type Story = StoryObj<Args>;

export const Contract: Story = {
  args: {
    variant: 'contract',
  },
  render,
};
