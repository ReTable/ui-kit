import { FC, MouseEventHandler, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

import clsx from 'clsx';

import { item } from '../shared.css';
import { root } from './UiCylinder.css';

export type Props = {
  className?: string;

  selected?: number;

  from: number;
  to: number;

  onSelect: (value: number) => void;
};

export const UiCylinder: FC<Props> = ({ className, from, selected, to, onSelect }) => {
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

    for (let value = from; value <= to; value += 1) {
      const isSelected = value === selected;

      nodes.push(
        <button
          className={isSelected ? item.selected : item.default}
          data-value={value}
          disabled={isSelected}
          key={value}
          onClick={handleClick}
          ref={isSelected ? selectedRef : null}
          type="button"
        >
          {value}
        </button>,
      );
    }

    return nodes;
  }, [from, to, selected, handleClick]);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({
      behavior: 'instant',
      block: 'center',
    });
  }, []);

  return <div className={clsx(root, className)}>{items}</div>;
};
