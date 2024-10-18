import { ReactNode } from 'react';

import * as styles from './Dropdown.css';

import { IconComponent } from '../types';

type Props = {
  icon?: IconComponent;
  label: string;
  onClick: () => void;
};

export function DropdownItem({ icon: Icon, label, onClick }: Props): ReactNode {
  return (
    <button className={styles.item} onClick={onClick} type="button">
      {Icon != null && <Icon className={styles.icon} />}
      <span className={styles.label}>{label}</span>
    </button>
  );
}
