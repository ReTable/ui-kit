import { PropsWithChildren, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { IconComponent } from '../types';

type Props = PropsWithChildren<{
  icon?: IconComponent;

  isCurrent?: boolean;

  onClick: () => void;
}>;

export const DropdownItem = forwardRef<HTMLButtonElement, Props>(
  ({ children, icon: Icon, isCurrent, onClick }, ref) => (
    <button
      className={clsx(styles.item, isCurrent && styles.isCurrent)}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      {Icon != null && <Icon className={styles.icon} />}

      <span className={styles.label}>{children}</span>

      {isCurrent && <span className={styles.key}>Tab</span>}
    </button>
  ),
);

if (import.meta.env.DEV) {
  DropdownItem.displayName = 'DropdownItem';
}
