import { ComponentType, FC } from 'react';

import clsx from 'clsx';

import { variants } from './UiButton48.css';

import { UiButton, Props as UiButtonProps } from './UiButton';

export type Props = UiButtonProps & {
  icon?: ComponentType;
  variant: keyof typeof variants;
};

export const UiButton48: FC<Props> = ({ children, className, icon: Icon, variant, ...props }) => (
  <UiButton className={clsx(className, variants[variant])} hasIcon={Icon != null} {...props}>
    {children}
    {Icon && <Icon />}
  </UiButton>
);
