import { FC } from 'react';

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
};

export default meta;

export const Default: FC<Args> = (args) => <UiButton20 {...toProps(args)} />;
