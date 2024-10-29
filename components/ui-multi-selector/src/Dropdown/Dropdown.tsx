import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Dropdown.css';

import {
  CompleteKey,
  DropdownController,
  Option,
  SelectAll,
  SelectFound,
  Selected,
  UpdateHandler,
} from '../types';

import { DropdownItem } from './Dropdown.Item';
import { useController, useHasIcons, useItems } from './hooks';

type Props = {
  allowsCustomValue?: boolean;
  className?: string;
  completeKey: CompleteKey;
  onUpdate: UpdateHandler;
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
      onUpdate,
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
      onUpdate,
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

    const hasIcons = useHasIcons({ allowsCustomValue, options, selectAll, selectFound });

    if (items.length === 0) {
      return null;
    }

    const nodes: ReactNode[] = [];

    for (const [idx, item] of items.entries()) {
      const { key, icon, onSelect, label, hasDividerAfter } = item;

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

      // NOTE: We don't append divider as item to list, to avoid complicated navigation logic.
      if (hasDividerAfter) {
        nodes.push(<div className={styles.divider} key={`${item.key}-divider`} />);
      }
    }

    return (
      /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
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
