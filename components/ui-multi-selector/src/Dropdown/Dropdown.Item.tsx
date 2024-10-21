import { PropsWithChildren, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { CompleteKey, IconComponent } from '../types';

type Props = PropsWithChildren<{
  completeKey: CompleteKey;

  icon?: IconComponent;

  isCurrent?: boolean;

  onClick: () => void;
}>;

export const DropdownItem = forwardRef<HTMLButtonElement, Props>(
  ({ children, completeKey, icon: Icon, isCurrent, onClick }, ref) => (
    <button
      className={clsx(styles.item, isCurrent && styles.isCurrent)}
      onClick={onClick}
      ref={ref}
      tabIndex={-1}
      type="button"
    >
      {Icon != null && <Icon className={styles.icon} />}

      <span className={styles.label}>{children}</span>

      {isCurrent && <span className={styles.key}>{completeKey}</span>}
    </button>
  ),
);

if (import.meta.env.DEV) {
  DropdownItem.displayName = 'DropdownItem';
}
