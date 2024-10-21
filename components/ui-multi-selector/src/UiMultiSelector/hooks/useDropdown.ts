import { CSSProperties, Ref, RefObject, useCallback, useMemo, useRef } from 'react';

import {
  FloatingContext,
  autoUpdate,
  flip,
  offset,
  size,
  useFloating,
  useTransitionStyles,
} from '@floating-ui/react';

import { useFlag } from '@tabula/use-flag';

import { DropdownController } from '../../types';

type Result = {
  isOpen: boolean;

  context: FloatingContext;

  dropdownRef: RefObject<DropdownController>;
  floatingRef: Ref<HTMLDivElement>;
  referenceRef: Ref<HTMLDivElement>;

  style: CSSProperties;

  onShowDropdown: () => void;
  onHideDropdown: () => void;

  onGoNext: () => void;
  onGoPrevious: () => void;

  onSelectCurrent: () => void;
};

export function useDropdown(): Result {
  const dropdownRef = useRef<DropdownController>(null);

  const [open, { on: onShowDropdown, off: onHideDropdown }] = useFlag(false);

  const handleGoNext = useCallback(() => {
    dropdownRef.current?.goToNext();
  }, []);

  const handleGoPrevious = useCallback(() => {
    dropdownRef.current?.goToPrevious();
  }, []);

  const handleSelect = useCallback(() => {
    dropdownRef.current?.selectCurrent();
  }, []);

  const { refs, context, floatingStyles } = useFloating<HTMLDivElement>({
    placement: 'bottom-start',

    strategy: 'fixed',

    open,

    middleware: [
      offset({ mainAxis: 4 }),
      flip(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],

    whileElementsMounted(...args) {
      return autoUpdate(...args, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      });
    },
  });

  const { isMounted: isOpen, styles: transitionStyles } = useTransitionStyles(context);

  const style = useMemo(
    () => ({ ...floatingStyles, ...transitionStyles }),
    [floatingStyles, transitionStyles],
  );

  return {
    isOpen,

    context,

    dropdownRef,
    floatingRef: refs.setFloating as Ref<HTMLDivElement>,
    referenceRef: refs.setReference as Ref<HTMLDivElement>,

    style,

    onShowDropdown,
    onHideDropdown,

    onGoNext: handleGoNext,
    onGoPrevious: handleGoPrevious,
    onSelectCurrent: handleSelect,
  };
}
