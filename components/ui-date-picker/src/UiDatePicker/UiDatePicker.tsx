import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { set } from 'date-fns';

import * as styles from './UiDatePicker.css';

import { Calendar } from '../Calendar';
import { Clock } from '../Clock';

import { Type } from './UiDatePicker.types';

export type Props = {
  className?: string;

  /**
   * The current selected date.
   */
  selected?: Date | null;

  /**
   * Handler which called when a new date was selected.
   *
   * @param date A new date.
   */
  onSelect: (date: Date) => void;

  /**
   * Type of widget.
   */
  type: Type;
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
        <div className={clsx(styles.root.date, className)}>
          <Calendar className={styles.calendar} selected={selected} onSelect={handleSelectDate} />
        </div>
      );
    }
    case 'time': {
      return (
        <div className={clsx(styles.root.time, className)}>
          <Clock className={styles.clock} selected={selected} onSelect={handleSelectTime} />
        </div>
      );
    }
    case 'datetime': {
      return (
        <div className={clsx(styles.root.datetime, className)}>
          <Calendar className={styles.calendar} selected={selected} onSelect={handleSelectDate} />
          <Clock className={styles.clock} selected={selected} onSelect={handleSelectTime} />
        </div>
      );
    }
  }
};

if (import.meta.env.DEV) {
  UiDatePicker.displayName = 'ui-date-picker(UiDatePicker)';
}
