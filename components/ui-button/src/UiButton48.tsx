import { ComponentType, FC } from 'react';

import clsx from 'clsx';

import { variants, withIcon } from './UiButton48.css';

import { UiButton, Props as UiButtonProps } from './UiButton';

export type Props = UiButtonProps & {
  icon?: ComponentType;
  variant: keyof typeof variants;
};

export const UiButton48: FC<Props> = ({
  children,
  className,
  icon: Icon,
  isDisabled,
  onClick,
  variant,
}) => (
  <UiButton
    className={clsx(className, variants[variant], Icon != null && withIcon)}
    isDisabled={isDisabled}
    onClick={onClick}
  >
    {children}
    {Icon && <Icon />}
  </UiButton>
);
