import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import {
  AddHandler,
  CompleteKey,
  DropdownController,
  Option,
  SelectAll,
  SelectFound,
  Selected,
} from '../types';

import { DropdownItem } from './Dropdown.Item';
import { useController, useItems } from './hooks';

type Props = {
  allowsCustomValue?: boolean;
  className?: string;
  completeKey: CompleteKey;
  onAdd: AddHandler;
  options: Option[];
  search: string;
  selectAll: SelectAll;
  selectFound: SelectFound;
  selected: Selected;
};

export const Dropdown = forwardRef<DropdownController, Props>(
  (
    {
      allowsCustomValue,
      className,
      completeKey,
      onAdd,
      options,
      search,
      selectAll,
      selectFound,
      selected,
    },
    ref,
  ) => {
    const items = useItems({
      allowsCustomValue,
      onAdd,
      options,
      search,
      selectAll,
      selectFound,
      selected,
    });

    const { currentIndex, currentRef, onMouseEnter, onMouseLeave, rootRef } = useController(ref, {
      items,
      selected,
      search,
    });

    if (items.length === 0) {
      return null;
    }

    const nodes: ReactNode[] = [];

    let hasIcons = false;

    for (const [idx, item] of items.entries()) {
      const { key, icon, onSelect, label, hasDividerAfter } = item;

      if (icon != null) {
        hasIcons = true;
      }

      nodes.push(
        <DropdownItem
          completeKey={completeKey}
          icon={icon}
          isCurrent={idx === currentIndex}
          key={key}
          onClick={onSelect}
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
      <div
        className={clsx(styles.root, hasIcons && styles.hasIcons, className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={rootRef}
        tabIndex={-1}
      >
        {nodes}
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  Dropdown.displayName = 'Dropdown';
}
