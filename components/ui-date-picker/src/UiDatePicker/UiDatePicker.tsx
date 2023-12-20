import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { set } from 'date-fns';

import * as styles from './UiDatePicker.css';

import { UiCalendar } from '../UiCalendar';
import { UiClock } from '../UiClock';

import { Type } from './UiDatePicker.types';

export type Props = {
  className?: string;

  /**
   * The current selected date.
   */
  selected?: Date;

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
          <UiCalendar className={styles.calendar} selected={selected} onSelect={handleSelectDate} />
        </div>
      );
    }
    case 'time': {
      return (
        <div className={clsx(styles.root.time, className)}>
          <UiClock className={styles.clock} selected={selected} onSelect={handleSelectTime} />
        </div>
      );
    }
    case 'datetime': {
      return (
        <div className={clsx(styles.root.datetime, className)}>
          <UiCalendar className={styles.calendar} selected={selected} onSelect={handleSelectDate} />
          <UiClock className={styles.clock} selected={selected} onSelect={handleSelectTime} />
        </div>
      );
    }
  }
};

UiDatePicker.displayName = `ui-date-picker(UiDatePicker)`;
