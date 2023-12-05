import { FC } from 'react';

import clsx from 'clsx';

import { root } from './UiCalendar.css';

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

  return (
    <div className={clsx(root, className)}>
      <UiMonth days={days} onSelect={onSelect} />
    </div>
  );
};
