import { Ref, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { DropdownController } from '../../types';

import { Item } from '../Dropdown.types';

type Options = {
  items: Item[];

  search: string;
};

type Result = {
  currentIndex: number;

  rootRef: RefObject<HTMLDivElement>;
  currentRef: RefObject<HTMLButtonElement>;
};

export function useController(
  controllerRef: Ref<DropdownController>,
  { items, search }: Options,
): Result {
  const rootRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLButtonElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [search]);

  useEffect(() => {
    const { current } = currentRef;

    if (current == null) {
      return;
    }

    current.scrollIntoView({
      block: 'nearest',
    });
  }, [currentIndex]);

  useImperativeHandle(
    controllerRef,
    () => ({
      goToPrevious: () => {
        if (items.length === 0) {
          return;
        }

        setCurrentIndex((current) => {
          return current === 0 ? items.length - 1 : current - 1;
        });
      },

      goToNext: () => {
        if (items.length === 0) {
          return;
        }

        setCurrentIndex((current) => {
          return current === items.length - 1 ? 0 : current + 1;
        });
      },

      selectCurrent: () => {
        const item = items.at(currentIndex);

        // NOTE: If `items` array is empty, then item will be `undefined` even for index equals to `0`.
        if (item == null) {
          return;
        }

        item.onSelect();
      },
    }),
    [currentIndex, items],
  );

  return { currentIndex, rootRef, currentRef };
}
