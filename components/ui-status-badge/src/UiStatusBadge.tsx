import { ComponentType, PropsWithChildren, ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as ActiveIcon } from './assets/active.svg';
import { ReactComponent as ErrorIcon } from './assets/error.svg';
import { ReactComponent as SuccessIcon } from './assets/success.svg';

import * as styles from './UiStatusBadge.css';

export type Variant = keyof typeof styles.variants;

export type Icon = ComponentType<{ className?: string }>;

const ICONS: Partial<Record<Variant, Icon>> = {
  active: ActiveIcon,
  error: ErrorIcon,
  success: SuccessIcon,
};

export type Props = PropsWithChildren<{
  className?: string;
  icon?: boolean | Icon;
  variant: Variant;
}>;

export function UiStatusBadge({ children, className, icon = true, variant }: Props): ReactNode {
  let Icon = ICONS[variant];

  if (icon === false) {
    Icon = undefined;
  } else if (icon !== true) {
    Icon = icon;
  }

  return (
    <div className={clsx(styles.variants[variant], className)}>
      {Icon != null && <Icon className={styles.icon} />}
      {children}
    </div>
  );
}

if (import.meta.env.DEV) {
  UiStatusBadge.displayName = 'ui-status-badge(UiStatusBadge)';
}
