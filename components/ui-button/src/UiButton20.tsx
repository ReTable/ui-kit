import { FC } from 'react';

import { variants } from './UiButton20.css';

import { UiButton } from './UiButton';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton20: FC<Props> = ({ children, icon: Icon, variant, ...props }) => (
  <UiButton hasIcon={Icon != null} variantClassName={variants[variant]} {...props}>
    {Icon && <Icon />}
    {children}
  </UiButton>
);
