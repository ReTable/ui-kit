import { FC } from 'react';

import { variants } from './UiButton48.css';

import { UiButton } from './UiButton';
import { VariantProps } from './types';

export type Props = VariantProps<keyof typeof variants>;

export const UiButton48: FC<Props> = ({ children, className, icon: Icon, variant, ...props }) => (
  <UiButton hasIcon={Icon != null} variantClassName={variants[variant]} {...props}>
    {children}
    {Icon && <Icon />}
  </UiButton>
);
