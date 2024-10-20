import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { DropdownController } from '../types';

import { DropdownItem } from './Dropdown.Item';
import { useController, useItems } from './hooks';

type Props = {
  className?: string;

  search: string;
};

export const Dropdown = forwardRef<DropdownController, Props>(({ className, search }, ref) => {
  const items = useItems(search);

  const rootRef = useController(ref);

  const nodes: ReactNode[] = [];

  let hasIcons = false;

  for (const item of items) {
    if (item.type === 'divider') {
      nodes.push(<div className={styles.divider} key={item.key} />);

      continue;
    }

    const { key, icon, onClick, label } = item;

    if (icon != null) {
      hasIcons = true;
    }

    nodes.push(
      <DropdownItem key={key} onClick={onClick} icon={icon}>
        {label}
      </DropdownItem>,
    );
  }

  return (
    <div className={clsx(styles.root, hasIcons && styles.hasIcons, className)} ref={rootRef}>
      {nodes}
    </div>
  );
});

if (import.meta.env.DEV) {
  Dropdown.displayName = 'Dropdown';
}
