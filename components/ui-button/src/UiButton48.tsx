import { FC } from 'react';

import { icon, variants } from './UiButton48.css';

import { UiButton } from './UiButton';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton48: FC<Props> = ({ children, icon: Icon, variant, ...props }) => (
  <UiButton hasIcon={Icon != null} variantClassName={variants[variant]} {...props}>
    {children}
    {Icon && <Icon className={icon} />}
  </UiButton>
);
