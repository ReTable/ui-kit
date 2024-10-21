import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import { AddHandler, DropdownController, Option, SelectAll, SelectFound, Selected } from '../types';

import { DropdownItem } from './Dropdown.Item';
import { useController, useItems } from './hooks';

type Props = {
  className?: string;
  onAdd: AddHandler;
  options: Option[];
  search: string;
  selectAll: SelectAll;
  selectFound: SelectFound;
  selected: Selected;
};

export const Dropdown = forwardRef<DropdownController, Props>(
  ({ className, onAdd, options, search, selectAll, selectFound, selected }, ref) => {
    const items = useItems({ onAdd, options, search, selectAll, selectFound, selected });

    const { currentIndex, currentRef, rootRef } = useController(ref, { items, search });

    const nodes: ReactNode[] = [];

    let hasIcons = false;

    for (const [idx, item] of items.entries()) {
      const { key, icon, onSelect, label, hasDividerAfter } = item;

      if (icon != null) {
        hasIcons = true;
      }

      nodes.push(
        <DropdownItem
          isCurrent={idx === currentIndex}
          key={key}
          onClick={onSelect}
          icon={icon}
          ref={idx === currentIndex ? currentRef : undefined}
        >
          {label}
        </DropdownItem>,
      );

      if (hasDividerAfter) {
        nodes.push(<div className={styles.divider} key={`${item.key}-divider`} />);
      }
    }

    return (
      <div className={clsx(styles.root, hasIcons && styles.hasIcons, className)} ref={rootRef}>
        {nodes}
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  Dropdown.displayName = 'Dropdown';
}
