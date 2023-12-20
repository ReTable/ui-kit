import { FC, MouseEventHandler, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

import clsx from 'clsx';

import { root } from './UiCentury.css';

import { UiItem } from '../UiItem';

export type Props = {
  className?: string;

  shown: Date;

  onSelect: (year: number) => void;
};

export const UiCentury: FC<Props> = ({ className, shown, onSelect }) => {
  const currentYear = shown.getFullYear();

  const selectedRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback<MouseEventHandler>(
    ({ currentTarget }) => {
      if (!(currentTarget instanceof HTMLElement)) {
        return;
      }

      const { value } = currentTarget.dataset;

      if (value == null) {
        return;
      }

      onSelect(Number.parseInt(value, 10));
    },
    [onSelect],
  );

  const items = useMemo(() => {
    const nodes: ReactNode[] = [];

    for (let year = 1900; year < 2100; year += 1) {
      const isSelected = year === currentYear;

      nodes.push(
        <UiItem
          isSelected={isSelected}
          key={year}
          onClick={handleClick}
          ref={isSelected ? selectedRef : null}
          value={year}
        >
          {year}
        </UiItem>,
      );
    }

    return nodes;
  }, [currentYear, handleClick]);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({
      behavior: 'instant',
      block: 'center',
    });
  }, []);

  return <div className={clsx(root, className)}>{items}</div>;
};
