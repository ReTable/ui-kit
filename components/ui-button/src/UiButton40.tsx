import { FC } from 'react';

import { variants } from './UiButton40.css';
import { icon } from './common.css';

import { UiButton } from './UiButton';
import { titleOf } from './helpers';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton40: FC<Props> = ({ children, icon: Icon, title, variant, ...props }) => (
  <UiButton
    hasIcon={Icon != null}
    title={titleOf(title, children)}
    variantClassName={variants[variant]}
    {...props}
  >
    {Icon && <Icon className={icon} />}
    {children}
  </UiButton>
);
