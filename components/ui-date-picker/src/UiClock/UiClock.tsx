import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { format, set } from 'date-fns';

import { body, header, list, root, title } from './UiClock.css';

import { UiHeader } from '../UiHeader';
import { UiList } from '../UiList';

export type Props = {
  className?: string;

  selected?: Date;

  onSelect: (date: Date) => void;
};

function labelOf(value: number) {
  return value.toString().padStart(2, '0');
}

export const UiClock: FC<Props> = ({ className, onSelect, selected }) => {
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
    <div className={clsx(root, className)}>
      <UiHeader className={header}>
        {selected != null && <span className={title}>{format(selected, 'HH:mm:ss')}</span>}
      </UiHeader>
      <div className={body}>
        <UiList
          className={list}
          from={0}
          labelOf={labelOf}
          onSelect={handleSelectHours}
          selected={hours}
          to={24}
        />
        <UiList
          className={list}
          from={0}
          labelOf={labelOf}
          onSelect={handleSelectMinutes}
          selected={minutes}
          to={60}
        />
        <UiList
          className={list}
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

UiClock.displayName = `ui-date-picker(UiClock)`;
