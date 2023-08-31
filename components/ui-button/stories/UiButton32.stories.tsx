import { FC } from 'react';

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
    as: 'button',
    label: 'Press me!',
    variant: argTypes.variant.options[0],
  },
};

export default meta;

export const Default: FC<Args> = (args) => <UiButton32 {...toProps(args)} />;
