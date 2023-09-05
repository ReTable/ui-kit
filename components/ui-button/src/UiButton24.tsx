import { FC } from 'react';

import { variants } from './UiButton24.css';

import { UiButton } from './UiButton';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton24: FC<Props> = ({ children, icon, variant, ...props }) => (
  <UiButton leftIcon={icon} variantClassName={variants[variant]} {...props}>
    {children}
  </UiButton>
);
