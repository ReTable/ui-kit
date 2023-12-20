import { FC, MouseEventHandler, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';

import clsx from 'clsx';

import { root } from './UiCylinder.css';

import { UiItem } from '../UiItem';

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
        <UiItem
          isSelected={isSelected}
          key={value}
          onClick={handleClick}
          ref={isSelected ? selectedRef : null}
          value={value}
        >
          {value.toString().padStart(2, '0')}
        </UiItem>,
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
