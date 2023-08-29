import { ComponentType, FC } from 'react';

import clsx from 'clsx';

import { variants, withIcon } from './UiButton40.css';

import { UiButton, Props as UiButtonProps } from './UiButton';

export type Props = UiButtonProps & {
  icon?: ComponentType;
  variant: keyof typeof variants;
};

export const UiButton40: FC<Props> = ({ children, className, icon: Icon, variant, ...props }) => (
  <UiButton className={clsx(className, variants[variant], Icon != null && withIcon)} {...props}>
    {Icon && <Icon />}
    {children}
  </UiButton>
);
