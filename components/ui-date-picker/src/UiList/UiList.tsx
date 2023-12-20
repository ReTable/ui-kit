import {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import clsx from 'clsx';

import { item, root } from './UiList.css';

import { UiButton } from '../UiButton';

export type Props = PropsWithChildren<{
  className?: string;

  labelOf?: (value: number) => string;

  from: number;
  to: number;

  selected?: number;

  onSelect: (value: number) => void;
}>;

export const UiList: FC<Props> = ({ className, from, labelOf, onSelect, selected, to }) => {
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

    for (let value = from; value < to; value += 1) {
      const isSelected = value === selected;

      nodes.push(
        <UiButton
          className={clsx(isSelected ? item.selected : item.default)}
          data-value={value}
          disabled={isSelected}
          onClick={handleClick}
          key={value}
          ref={isSelected ? selectedRef : null}
        >
          {labelOf == null ? value : labelOf(value)}
        </UiButton>,
      );
    }

    return nodes;
  }, [from, to, selected, handleClick, labelOf]);

  useEffect(() => {
    selectedRef.current?.scrollIntoView({
      behavior: 'instant',
      block: 'center',
    });
  }, []);

  return <div className={clsx(root, className)}>{items}</div>;
};

UiList.displayName = `ui-date-picker(UiList)`;
