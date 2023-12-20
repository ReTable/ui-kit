import { FC } from 'react';

import { variants } from './UiButton24.css';

import { Button } from '../Button';
import { VariantProps } from '../types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton24: FC<Props> = ({ children, icon, variant, ...props }) => (
  <Button leftIcon={icon} variantClassName={variants[variant]} {...props}>
    {children}
  </Button>
);
