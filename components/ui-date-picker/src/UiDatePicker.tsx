import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { set } from 'date-fns';

import { root } from './UiDatePicker.css';

import { UiCalendar } from './UiCalendar';

export type Props = {
  className?: string;

  selected?: Date;

  onSelect: (date: Date) => void;
};

export const UiDatePicker: FC<Props> = ({ className, selected, onSelect }) => {
  const handleSelectDate = useCallback(
    (value: Date) => {
      const nextValue =
        selected == null
          ? value
          : set(selected, {
              date: value.getDate(),
              month: value.getMonth(),
              year: value.getFullYear(),
            });

      onSelect(nextValue);
    },
    [onSelect, selected],
  );

  return (
    <div className={clsx(root, className)}>
      <UiCalendar selected={selected} onSelect={handleSelectDate} />
    </div>
  );
};
