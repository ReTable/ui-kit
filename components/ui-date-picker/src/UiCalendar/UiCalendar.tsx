import { FC, useCallback, useState } from 'react';

import clsx from 'clsx';
import { add, format, setYear, sub } from 'date-fns';
import { CSSTransition } from 'react-transition-group';

import { UiButton24 } from '@tabula/ui-button';

import { body, header, root, slots, title, years, yearsTransitions } from './UiCalendar.css';

import { UiExpand } from '../UiExpand';
import { UiHeader } from '../UiHeader';
import { UiList } from '../UiList';
import { UiMonth } from '../UiMonth';
import { UiNavigate } from '../UiNavigate';

import { useDaysOfMonth } from './UiCalendar.hooks';

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

          <UiExpand isExpanded={isYearsVisible} onClick={handleToggleYears} />
        </div>

        <div className={slots.right}>
          <UiButton24 variant="cancelFilled" onClick={handleToday}>
            Today
          </UiButton24>

          <UiNavigate onPrevious={handlePreviousMonth} onNext={handleNextMonth} />
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
          <UiList
            className={years}
            from={1900}
            to={2100}
            onSelect={handleSelectYear}
            selected={shown.getFullYear()}
          />
        </CSSTransition>
      </div>
    </div>
  );
};

UiCalendar.displayName = `ui-date-picker(UiCalendar)`;
