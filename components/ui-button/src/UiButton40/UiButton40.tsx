import { FC } from 'react';

import { variants } from './UiButton40.css';

import { Button } from '../Button';
import { VariantProps } from '../types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton40: FC<Props> = ({ children, icon, variant, ...props }) => (
  <Button leftIcon={icon} variantClassName={variants[variant]} {...props}>
    {children}
  </Button>
);

if (import.meta.env.DEV) {
  UiButton40.displayName = 'ui-button(UiButton40)';
}
