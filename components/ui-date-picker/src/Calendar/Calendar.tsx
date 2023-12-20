import { FC, useCallback, useState } from 'react';

import clsx from 'clsx';
import { add, format, setYear, sub } from 'date-fns';
import { CSSTransition } from 'react-transition-group';

import { UiButton24 } from '@tabula/ui-button';

import * as styles from './Calendar.css';

import { Expand } from '../Expand';
import { Header } from '../Header';
import { List } from '../List';
import { Month } from '../Month';
import { Navigate } from '../Navigate';

import { useDaysOfMonth } from './Calendar.hooks';

type Props = {
  className?: string;

  selected?: Date | null;

  onSelect: (date: Date) => void;
};

export const Calendar: FC<Props> = ({ className, selected, onSelect }) => {
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
    <div className={clsx(styles.root, className)}>
      <Header className={styles.header}>
        <div className={styles.slots.left}>
          <span className={styles.title}>{format(shown, 'MMMM yyyy')}</span>

          <Expand isExpanded={isYearsVisible} onClick={handleToggleYears} />
        </div>

        <div className={styles.slots.right}>
          <UiButton24 variant="cancelFilled" onClick={handleToday}>
            Today
          </UiButton24>

          <Navigate onPrevious={handlePreviousMonth} onNext={handleNextMonth} />
        </div>
      </Header>
      <div className={styles.body}>
        <Month days={days} onSelect={onSelect} />

        <CSSTransition
          addEndListener={handleEndListener}
          classNames={styles.yearsTransitions}
          in={isYearsVisible}
          mountOnEnter
          unmountOnExit
        >
          <List
            className={styles.years}
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
