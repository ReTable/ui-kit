import { FC } from 'react';

import { icon, variants } from './UiButton48.css';

import { UiButton } from './UiButton';
import { titleOf } from './helpers';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton48: FC<Props> = ({ children, icon: Icon, title, variant, ...props }) => {
  return (
    <UiButton
      hasIcon={Icon != null}
      title={titleOf(title, children)}
      variantClassName={variants[variant]}
      {...props}
    >
      {children}
      {Icon && <Icon className={icon} />}
    </UiButton>
  );
};
