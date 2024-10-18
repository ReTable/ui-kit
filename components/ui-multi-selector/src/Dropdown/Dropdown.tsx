import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { DropdownItem } from './Dropdown.Item';
import { useItems, useSelectAll } from './hooks';

type Props = {
  className?: string;
};

export function Dropdown({ className }: Props): ReactNode {
  const selectAll = useSelectAll();
  const items = useItems();

  const nodes: ReactNode[] = [];

  let hasIcons = false;

  if (selectAll != null) {
    const { id, icon, onClick, label } = selectAll;

    if (icon != null) {
      hasIcons = true;
    }

    nodes.push(<DropdownItem key={id} onClick={onClick} icon={icon} label={label} />);
  }

  for (const { icon, id, onClick, label } of items) {
    if (icon != null) {
      hasIcons = true;
    }

    nodes.push(<DropdownItem key={id} onClick={onClick} icon={icon} label={label} />);
  }

  return <div className={clsx(styles.root, hasIcons && styles.hasIcons, className)}>{nodes}</div>;
}
