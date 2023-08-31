import { FC } from 'react';

import { UiButton40, UiButton40Props } from '~';

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

export const Default: FC<Args> = (args) => <UiButton40 {...toProps(args)} />;
