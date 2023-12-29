import { ReactElement } from 'react';

import { StoryObj } from '@storybook/react';
import clsx from 'clsx';

import { UiButton24, UiButton24Props } from '~';

import { darkBackground, paddings } from './style.css';

import { ArgsOf, argTypes as baseArgTypes, toProps } from './helpers';

type Args = ArgsOf<UiButton24Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = [
  'primary',
  'secondary',
  'primaryHeader',
  'secondaryHeader',
  'cancel',
  'cancelFilled',
  'edit',
  'test',
  'ai',
];

const meta = {
  title: 'UiButton24',

  argTypes,

  args: {
    as: 'button',
    label: 'Press me!',
    variant: argTypes.variant.options[0],
  },
};

export default meta;

function render(args: Args): ReactElement {
  return <UiButton24 {...toProps(args)} />;
}

function darkRender(args: Args): ReactElement {
  return (
    <div className={clsx(darkBackground, paddings)}>
      <UiButton24 {...toProps(args)} />
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

export const PrimaryHeader: Story = {
  args: {
    variant: 'primaryHeader',
  },
  render,
};

export const SecondaryHeader: Story = {
  args: {
    variant: 'secondaryHeader',
  },
  render: darkRender,
};

export const Cancel: Story = {
  args: {
    variant: 'cancel',
  },
  render,
};

export const CancelFilled: Story = {
  args: {
    variant: 'cancelFilled',
  },
  render,
};

export const Edit: Story = {
  args: {
    variant: 'edit',
  },
  render,
};

export const Test: Story = {
  args: {
    variant: 'test',
  },
  render,
};

export const AI: Story = {
  args: {
    variant: 'ai',
  },
  render,
};
