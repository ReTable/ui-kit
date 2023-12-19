import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';

import clsx from 'clsx';

import { item } from '../shared.css';
import { root } from './UiCentury.css';

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
        <button
          className={isSelected ? item.selected : item.default}
          data-value={year}
          disabled={isSelected}
          key={year}
          onClick={handleClick}
          ref={isSelected ? selectedRef : null}
          type="button"
        >
          {year}
        </button>,
      );
    }

    return nodes;
  }, [currentYear, handleClick]);

  useLayoutEffect(() => {
    selectedRef.current?.scrollIntoView({
      block: 'center',
    });
  }, []);

  return <div className={clsx(root, className)}>{items}</div>;
};
