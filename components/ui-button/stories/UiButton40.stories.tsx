import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';
import { clsx } from 'clsx/lite';

import { UiButton40, UiButton40Props } from '~';

import { darkBackground, paddings } from './style.css';

import { ArgsOf, argTypes as baseArgTypes, toProps } from './helpers';

type Args = ArgsOf<UiButton40Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = ['primary', 'secondary', 'secondaryBlue', 'secondaryFilled'];

const meta = {
  title: 'UiButton40',

  argTypes,

  args: {
    as: 'button',
    label: 'Press me!',
    variant: argTypes.variant.options[0],
  },
};

export default meta;

function render(args: Args): ReactElement {
  return <UiButton40 {...toProps(args)} />;
}

function darkRender(args: Args): ReactElement {
  return (
    <div className={clsx(darkBackground, paddings)}>
      <UiButton40 {...toProps(args)} />
    </div>
  );
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

export const SecondaryBlue: Story = {
  args: {
    variant: 'secondaryBlue',
  },
  render,
};

export const SecondaryFilled: Story = {
  args: {
    variant: 'secondaryFilled',
  },
  render,
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondaryDark',
  },
  render: darkRender,
};
