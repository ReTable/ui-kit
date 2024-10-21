import {
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { DropdownController, Selected } from '../../types';

import { Item } from '../Dropdown.types';

type Options = {
  items: Item[];
  search: string;
  selected: Selected;
};

type Result = {
  currentIndex: number;

  onMouseEnter: () => void;
  onMouseLeave: () => void;

  rootRef: RefObject<HTMLDivElement>;
  currentRef: RefObject<HTMLButtonElement>;
};

export function useController(
  controllerRef: Ref<DropdownController>,
  { items, search, selected }: Options,
): Result {
  const rootRef = useRef<HTMLDivElement>(null);

  // NOTE: Used to scroll dropdown to current item when user navigate through keyboard.
  const currentRef = useRef<HTMLButtonElement>(null);

  // NOTE: We detect hover on the dropdown to disable keyboard interactions when item has mouse hover.
  //
  //       It needed to avoid conflicts between keyboard navigation state and mouse navigation.
  const isHoveredRef = useRef(false);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
  }, []);

  // NOTE: Index of current selected item when user uses keyboard navigation.
  const [currentIndex, setCurrentIndex] = useState(0);

  // NOTE: Reset current index when search has been changed or changed list of selected items (usually it happened when
  //       a user selected any item.
  useEffect(() => {
    setCurrentIndex(0);
  }, [search, selected]);

  // NOTE: When current index has been changed, we should scroll to the new current item.
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
        if (isHoveredRef.current || items.length === 0) {
          return;
        }

        setCurrentIndex((current) => {
          return current === 0 ? items.length - 1 : current - 1;
        });
      },

      goToNext: () => {
        if (isHoveredRef.current || items.length === 0) {
          return;
        }

        setCurrentIndex((current) => {
          return current === items.length - 1 ? 0 : current + 1;
        });
      },

      selectCurrent: () => {
        if (isHoveredRef.current) {
          return;
        }

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

  return {
    currentIndex,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    rootRef,
    currentRef,
  };
}
