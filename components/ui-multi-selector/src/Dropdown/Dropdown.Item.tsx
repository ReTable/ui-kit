import { PropsWithChildren, ReactNode } from 'react';

import * as styles from './Dropdown.css';

import { IconComponent } from '../types';

type Props = PropsWithChildren<{
  icon?: IconComponent;

  onClick: () => void;
}>;

export function DropdownItem({ children, icon: Icon, onClick }: Props): ReactNode {
  return (
    <button className={styles.item} onClick={onClick} type="button">
      {Icon != null && <Icon className={styles.icon} />}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
