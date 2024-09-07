import { ReactNode } from 'react';

import clsx from 'clsx';

import * as styles from './ItemIcon.css';

import { IconComponentType } from '../types';

type Props = {
  className?: string;
  icon?: IconComponentType;
  skipIcon?: boolean;
};

export function ItemIcon({ className, icon: Icon, skipIcon = true }: Props): ReactNode {
  if (Icon != null) {
    return <Icon className={className} />;
  }

  if (skipIcon) {
    return null;
  }

  return <span className={clsx(styles.empty, className)} />;
}

if (import.meta.env.DEV) {
  ItemIcon.displayName = 'UiMenu(ItemIcon)';
}
