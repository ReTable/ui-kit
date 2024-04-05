import { FC, useCallback } from 'react';

import { clsx } from 'clsx/lite';
import { format, set } from 'date-fns';

import * as styles from './Clock.css';

import { Header } from '../Header';
import { List } from '../List';

export type Props = {
  className?: string;

  selected?: Date | null;

  onSelect: (date: Date) => void;
};

function labelOf(value: number) {
  return value.toString().padStart(2, '0');
}

export const Clock: FC<Props> = ({ className, onSelect, selected }) => {
  const hours = selected?.getHours();
  const minutes = selected?.getMinutes();
  const seconds = selected?.getSeconds();

  const handleSelectHours = useCallback(
    (nextHours: number) => {
      const value = selected ?? new Date();

      onSelect(set(value, { hours: nextHours }));
    },
    [onSelect, selected],
  );

  const handleSelectMinutes = useCallback(
    (nextMinutes: number) => {
      const value = selected ?? new Date();

      onSelect(set(value, { minutes: nextMinutes }));
    },
    [onSelect, selected],
  );

  const handleSelectSeconds = useCallback(
    (nextSeconds: number) => {
      const value = selected ?? new Date();

      onSelect(set(value, { seconds: nextSeconds }));
    },
    [onSelect, selected],
  );

  return (
    <div className={clsx(styles.root, className)}>
      <Header className={styles.header}>
        {selected != null && <span className={styles.title}>{format(selected, 'HH:mm:ss')}</span>}
      </Header>
      <div className={styles.body}>
        <List
          className={styles.list}
          from={0}
          labelOf={labelOf}
          onSelect={handleSelectHours}
          selected={hours}
          to={24}
        />
        <List
          className={styles.list}
          from={0}
          labelOf={labelOf}
          onSelect={handleSelectMinutes}
          selected={minutes}
          to={60}
        />
        <List
          className={styles.list}
          from={0}
          labelOf={labelOf}
          onSelect={handleSelectSeconds}
          selected={seconds}
          to={60}
        />
      </div>
    </div>
  );
};
