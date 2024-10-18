import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { DropdownItem } from './Dropdown.Item';
import { useItems } from './Dropdown.hooks';

type Props = {
  className?: string;

  search: string;
};

export function Dropdown({ className, search }: Props): ReactNode {
  const items = useItems(search);

  const nodes: ReactNode[] = [];

  let hasIcons = false;

  for (const item of items) {
    if (item.type === 'divider') {
      nodes.push(<div className={styles.divider} />);

      continue;
    }

    const { id, icon, onClick, label } = item;

    if (icon != null) {
      hasIcons = true;
    }

    nodes.push(
      <DropdownItem key={id} onClick={onClick} icon={icon}>
        {label}
      </DropdownItem>,
    );
  }

  return <div className={clsx(styles.root, hasIcons && styles.hasIcons, className)}>{nodes}</div>;
}
