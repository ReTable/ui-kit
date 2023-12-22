import { FC } from 'react';

import { variants } from './UiButton20.css';

import { Button } from '../Button';
import { VariantProps } from '../types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton20: FC<Props> = ({ children, icon, variant, ...props }) => (
  <Button leftIcon={icon} variantClassName={variants[variant]} {...props}>
    {children}
  </Button>
);
