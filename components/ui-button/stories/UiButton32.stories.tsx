import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';

import { UiButton32, UiButton32Props } from '~';

import { ArgsOf, argTypes as baseArgTypes, toProps } from './helpers';

type Args = ArgsOf<UiButton32Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = [
  'primaryDesign',
  'secondaryDesign',
  'primaryList',
  'secondaryList',
  'dangerousList',
  'shadowList',
];

const meta = {
  title: 'UiButton32',

  argTypes,

  args: {
    type: 'button',
    label: 'Press me!',
    variant: argTypes.variant.options[0],
  },
};

export default meta;

function render(args: Args): ReactElement {
  return <UiButton32 {...toProps(args)} />;
}

type Story = StoryObj<Args>;

export const PrimaryDesign: Story = {
  args: {
    variant: 'primaryDesign',
  },
  render,
};

export const SecondaryDesign: Story = {
  args: {
    variant: 'secondaryDesign',
  },
  render,
};

export const PrimaryList: Story = {
  args: {
    variant: 'primaryList',
  },
  render,
};

export const SecondaryList: Story = {
  args: {
    variant: 'secondaryList',
  },
  render,
};

export const DangerousList: Story = {
  args: {
    variant: 'dangerousList',
  },
  render,
};

export const ShadowList: Story = {
  args: {
    variant: 'shadowList',
  },
  render,
};
