import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { set } from 'date-fns';

import { calendar, clock, root } from './UiDatePicker.css';

import { UiCalendar } from './UiCalendar';
import { UiClock } from './UiClock';

export type Props = {
  className?: string;

  selected?: Date;

  onSelect: (date: Date) => void;

  type: 'date' | 'time' | 'datetime';
};

export const UiDatePicker: FC<Props> = ({ className, selected, onSelect, type }) => {
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

  const handleSelectTime = useCallback(
    (value: Date) => {
      const nextValue =
        selected == null
          ? value
          : set(selected, {
              hours: value.getHours(),
              minutes: value.getMinutes(),
              seconds: value.getSeconds(),
            });

      onSelect(nextValue);
    },
    [onSelect, selected],
  );

  switch (type) {
    case 'date': {
      return (
        <div className={clsx(root.date, className)}>
          <UiCalendar className={calendar} selected={selected} onSelect={handleSelectDate} />
        </div>
      );
    }
    case 'time': {
      return (
        <div className={clsx(root.time, className)}>
          <UiClock className={clock} selected={selected} onSelect={handleSelectTime} />
        </div>
      );
    }
    case 'datetime': {
      return (
        <div className={clsx(root.datetime, className)}>
          <UiCalendar className={calendar} selected={selected} onSelect={handleSelectDate} />
          <UiClock className={clock} selected={selected} onSelect={handleSelectTime} />
        </div>
      );
    }
  }
};
