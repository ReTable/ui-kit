import { FC } from 'react';

import { icon as iconClassName, variants } from './UiButton48.css';

import { Button } from '../Button';
import { VariantProps } from '../types';

export type Variant = keyof typeof variants;

export type Props = VariantProps<Variant>;

export const UiButton48: FC<Props> = ({ children, icon, variant, ...props }) => {
  return (
    <Button
      iconClassName={iconClassName}
      rightIcon={icon}
      variantClassName={variants[variant]}
      {...props}
    >
      {children}
    </Button>
  );
};
