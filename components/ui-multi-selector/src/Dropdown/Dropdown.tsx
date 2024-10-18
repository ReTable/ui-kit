import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { useContext } from '../Context';

type Props = {
  className?: string;
};

export function Dropdown({ className }: Props): ReactNode {
  const { onAdd, options, value } = useContext();

  const items: ReactNode[] = [];

  let hasIcons = false;

  for (const { id, icon: Icon, label } of options) {
    if (value.has(id)) {
      continue;
    }

    const handleAdd = () => {
      onAdd([id]);
    };

    if (Icon != null) {
      hasIcons = true;
    }

    items.push(
      <button className={styles.item} onClick={handleAdd} type="button">
        {Icon != null && <Icon className={styles.icon} />}{' '}
        <span className={styles.label}>{label}</span>
      </button>,
    );
  }

  return <div className={clsx(styles.root, hasIcons && styles.hasIcons, className)}>{items}</div>;
}
