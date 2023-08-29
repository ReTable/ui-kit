import { ComponentType, FC, MouseEventHandler, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { variants, withIcon } from './UiButton40.css';

export type Props = PropsWithChildren<{
  className?: string;
  icon?: ComponentType;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
  variant: keyof typeof variants;
}>;

export const UiButton40: FC<Props> = ({
  children,
  className,
  icon: Icon,
  isDisabled,
  onClick,
  variant,
}) => (
  <button
    className={clsx(className, variants[variant], Icon != null && withIcon)}
    disabled={isDisabled}
    onClick={onClick}
    type="button"
  >
    {Icon && <Icon />}
    {children}
  </button>
);
