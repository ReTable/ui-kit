import { FC, useCallback } from 'react';

import clsx from 'clsx';
import { format, set } from 'date-fns';

import { body, cylinder, header, root, title } from './UiClock.css';

import { UiCylinder } from '../UiCylinder';
import { UiHeader } from '../UiHeader';

export type Props = {
  className?: string;

  selected?: Date;

  onSelect: (date: Date) => void;
};

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
        <UiCylinder
          className={cylinder}
          from={0}
          onSelect={handleSelectHours}
          selected={hours}
          to={23}
        />
        <UiCylinder
          className={cylinder}
          from={0}
          onSelect={handleSelectMinutes}
          selected={minutes}
          to={59}
        />
        <UiCylinder
          className={cylinder}
          from={0}
          onSelect={handleSelectSeconds}
          selected={seconds}
          to={59}
        />
      </div>
    </div>
  );
};
