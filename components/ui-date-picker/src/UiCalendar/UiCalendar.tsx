import { FC, useCallback, useState } from 'react';

import clsx from 'clsx';
import { add, format, sub } from 'date-fns';

import { UiButton24 } from '@tabula/ui-button';

import { ReactComponent as ChevronDown } from './assets/chevronDown.svg';
import { ReactComponent as ChevronLeft } from './assets/chevronLeft.svg';
import { ReactComponent as ChevronRight } from './assets/chevronRight.svg';

import { expand, header, root, siblings, slots, title, today } from './UiCalendar.css';

import { UiHeader } from '../UiHeader';
import { UiMonth } from '../UiMonth';
import { useDaysOfMonth } from '../hooks';

type Props = {
  className?: string;

  selected?: Date;

  onSelect: (date: Date) => void;
};

export const UiCalendar: FC<Props> = ({ className, selected, onSelect }) => {
  const [shown, setShown] = useState(selected ?? new Date());

  const days = useDaysOfMonth(shown, selected);

  const handleToday = useCallback(() => {
    onSelect(new Date());
  }, [onSelect]);

  const handlePrevious = useCallback(() => {
    setShown((current) => sub(current, { months: 1 }));
  }, []);

  const handleNext = useCallback(() => {
    setShown((current) => add(current, { months: 1 }));
  }, []);

  return (
    <div className={clsx(root, className)}>
      <UiHeader className={header}>
        <div className={slots.left}>
          <span className={title}>{format(shown, 'MMMM yyyy')}</span>

          <button className={expand} type="button">
            <ChevronDown />
          </button>
        </div>

        <div className={slots.right}>
          <UiButton24 className={today} variant="cancelFilled" onClick={handleToday}>
            Today
          </UiButton24>
          <button className={siblings.previous} onClick={handlePrevious} type="button">
            <ChevronLeft />
          </button>
          <button className={siblings.next} onClick={handleNext} type="button">
            <ChevronRight />
          </button>
        </div>
      </UiHeader>
      <UiMonth days={days} onSelect={onSelect} />
    </div>
  );
};
