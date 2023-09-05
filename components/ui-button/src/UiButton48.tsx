import { FC } from 'react';

import { icon as iconClassName, variants } from './UiButton48.css';

import { UiButton } from './UiButton';
import { VariantProps } from './types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton48: FC<Props> = ({ children, icon, variant, ...props }) => {
  return (
    <UiButton
      iconClassName={iconClassName}
      rightIcon={icon}
      variantClassName={variants[variant]}
      {...props}
    >
      {children}
    </UiButton>
  );
};
