import { FC } from 'react';

import { variants } from './UiButton32.css';

import { UiButton } from './UiButton';
import { titleOf } from './helpers';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton32: FC<Props> = ({ children, icon: Icon, title, variant, ...props }) => (
  <UiButton
    hasIcon={Icon != null}
    title={titleOf(title, children)}
    variantClassName={variants[variant]}
    {...props}
  >
    {Icon && <Icon />}
    {children}
  </UiButton>
);
