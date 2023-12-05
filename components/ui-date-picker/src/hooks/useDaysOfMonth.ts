import { useMemo } from 'react';

import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import { DayOfMonth } from '../types';

const WEEK_OPTIONS = {
  weekStartsOn: 1,
} as const;

export function useDaysOfMonth(shown: Date, selected?: Date): DayOfMonth[] {
  const days = useMemo(() => {
    const monthStart = startOfMonth(shown);
    const monthEnd = endOfMonth(monthStart);

    const dates = eachDayOfInterval({
      start: startOfWeek(monthStart, WEEK_OPTIONS),
      end: endOfWeek(monthEnd, WEEK_OPTIONS),
    });

    return dates.map((date) => ({
      date: date,

      isOutOfMonth: !isSameMonth(shown, date),
      isSelected: false,
    }));
  }, [shown]);

  return useMemo(() => {
    if (selected == null) {
      return days;
    }

    const index = days.findIndex(({ date }) => isSameDay(date, selected));

    if (index === -1) {
      return days;
    }

    return days.toSpliced(index, 1, { ...days[index], isSelected: true });
  }, [days, selected]);
}
