import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { format } from 'date-fns';

import { UiButton24 } from '@tabula/ui-button';

import { header, root, title } from './UiCalendar.css';

import { UiHeader } from '../UiHeader';
import { UiMonth } from '../UiMonth';
import { useDaysOfMonth } from '../hooks';

type Props = {
  className?: string;

  shown: Date;
  selected?: Date;

  onSelect: (date: Date) => void;
};

export const UiCalendar: FC<Props> = ({ className, selected, shown, onSelect }) => {
  const days = useDaysOfMonth(shown, selected);

  const handleToday = useCallback(() => {
    onSelect(new Date());
  }, [onSelect]);

  return (
    <div className={clsx(root, className)}>
      <UiHeader className={header}>
        <span className={title}>{format(shown, 'MMMM yyyy')}</span>
        <UiButton24 /*className={styles.today}*/ variant="cancelFilled" onClick={handleToday}>
          Today
        </UiButton24>
      </UiHeader>
      <UiMonth days={days} onSelect={onSelect} />
    </div>
  );
};
