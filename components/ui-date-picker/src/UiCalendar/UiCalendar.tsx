import { FC, useCallback, useState } from 'react';

import clsx from 'clsx';
import { add, format, setYear, sub } from 'date-fns';
import { CSSTransition } from 'react-transition-group';

import { UiButton24 } from '@tabula/ui-button';

import { ReactComponent as ChevronDown } from './assets/chevronDown.svg';
import { ReactComponent as ChevronLeft } from './assets/chevronLeft.svg';
import { ReactComponent as ChevronRight } from './assets/chevronRight.svg';

import {
  body,
  expand,
  expandIcon,
  header,
  root,
  siblings,
  slots,
  title,
  today,
  yearsTransitions,
} from './UiCalendar.css';

import { UiCentury } from '../UiCentury';
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

  const [isYearsVisible, setIsYearsVisible] = useState(false);

  const days = useDaysOfMonth(shown, selected);

  const handleToday = useCallback(() => {
    const now = new Date();

    setShown(now);

    onSelect(now);
  }, [onSelect]);

  const handlePreviousMonth = useCallback(() => {
    setShown((current) => sub(current, { months: 1 }));
  }, []);

  const handleNextMonth = useCallback(() => {
    setShown((current) => add(current, { months: 1 }));
  }, []);

  const handleToggleYears = useCallback(() => {
    setIsYearsVisible((current) => !current);
  }, []);

  const handleSelectYear = useCallback((year: number) => {
    setShown((current) => setYear(current, year));

    setIsYearsVisible(false);
  }, []);

  const handleEndListener = useCallback((node: HTMLElement, done: () => void) => {
    node.addEventListener('transitionend', done, false);
  }, []);

  return (
    <div className={clsx(root, className)}>
      <UiHeader className={header}>
        <div className={slots.left}>
          <span className={title}>{format(shown, 'MMMM yyyy')}</span>

          <button className={expand} onClick={handleToggleYears} type="button">
            <ChevronDown
              className={isYearsVisible ? expandIcon.isExpanded : expandIcon.isCollapsed}
            />
          </button>
        </div>

        <div className={slots.right}>
          <UiButton24 className={today} variant="cancelFilled" onClick={handleToday}>
            Today
          </UiButton24>

          <button className={siblings.previous} onClick={handlePreviousMonth} type="button">
            <ChevronLeft />
          </button>
          <button className={siblings.next} onClick={handleNextMonth} type="button">
            <ChevronRight />
          </button>
        </div>
      </UiHeader>
      <div className={body}>
        <UiMonth days={days} onSelect={onSelect} />

        <CSSTransition
          addEndListener={handleEndListener}
          classNames={yearsTransitions}
          in={isYearsVisible}
          mountOnEnter
          unmountOnExit
        >
          <UiCentury onSelect={handleSelectYear} shown={shown} />
        </CSSTransition>
      </div>
    </div>
  );
};
