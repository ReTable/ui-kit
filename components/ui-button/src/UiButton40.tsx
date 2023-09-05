import { FC } from 'react';

import { variants } from './UiButton40.css';

import { UiButton } from './UiButton';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton40: FC<Props> = ({ children, icon, variant, ...props }) => (
  <UiButton leftIcon={icon} variantClassName={variants[variant]} {...props}>
    {children}
  </UiButton>
);
