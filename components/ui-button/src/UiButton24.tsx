import { ComponentType, FC } from 'react';

import clsx from 'clsx';

import { variants, withIcon } from './UiButton24.css';

import { UiButton, Props as UiButtonProps } from './UiButton';

export type Props = UiButtonProps & {
  icon?: ComponentType;
  variant: keyof typeof variants;
};

export const UiButton24: FC<Props> = ({ children, className, icon: Icon, variant, ...props }) => (
  <UiButton className={clsx(className, variants[variant], Icon != null && withIcon)} {...props}>
    {Icon && <Icon />}
    {children}
  </UiButton>
);
