import { FC } from 'react';

import { UiButton24, UiButton24Props } from '~';

import { ArgsOf, argTypes as baseArgTypes, toProps } from './helpers';

type Args = ArgsOf<UiButton24Props>;

const argTypes = structuredClone(baseArgTypes);

argTypes.variant.options = ['primary', 'secondary', 'cancel', 'cancelFilled', 'edit', 'test', 'ai'];

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

export const Default: FC<Args> = (args) => <UiButton24 {...toProps(args)} />;
