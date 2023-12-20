import { FC, MouseEventHandler, ReactNode, useCallback, useMemo } from 'react';

import clsx from 'clsx';
import { format } from 'date-fns';

import { dayOfMonth, dayOfWeek, outOfMonth, root, selected } from './UiMonth.css';

import { DayOfMonth } from './UiMonth.types';

export type Props = {
  className?: string;

  days: DayOfMonth[];

  onSelect: (date: Date) => void;
};

export const UiMonth: FC<Props> = ({ className, days, onSelect }) => {
  const handleClick = useCallback<MouseEventHandler>(
    ({ currentTarget }) => {
      if (!(currentTarget instanceof HTMLElement)) {
        return;
      }

      const { value } = currentTarget.dataset;

      if (value == null) {
        return;
      }

      onSelect(new Date(value));
    },
    [onSelect],
  );

  const items = useMemo(() => {
    const nodes: ReactNode[] = [];

    for (const { date } of days.slice(0, 7)) {
      const label = format(date, 'EEEEEE');

      nodes.push(
        <div className={clsx(dayOfWeek)} key={label}>
          {label}
        </div>,
      );
    }

    for (const { date, isOutOfMonth, isSelected } of days) {
      const label = date.getDate();
      const value = date.toString();

      nodes.push(
        <button
          className={clsx(dayOfMonth, isOutOfMonth && outOfMonth, isSelected && selected)}
          data-value={value}
          disabled={isSelected}
          key={value}
          onClick={handleClick}
          type="button"
        >
          {label}
        </button>,
      );
    }

    return nodes;
  }, [days, handleClick]);

  return <div className={clsx(root, className)}>{items}</div>;
};

UiMonth.displayName = `ui-date-picker(UiMonth)`;
