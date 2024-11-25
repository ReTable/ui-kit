import { CSSProperties, Ref, RefObject, useCallback, useMemo, useRef } from 'react';

import {
  FloatingContext,
  autoUpdate,
  flip,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
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

  getFloatingProps: () => Record<string, unknown>;
  getReferenceProps: () => Record<string, unknown>;

  style: CSSProperties;

  onShowDropdown: () => void;
  onHideDropdown: () => void;

  onGoNext: () => void;
  onGoPrevious: () => void;

  onSelectCurrent: () => void;
};

export function useDropdown(): Result {
  const dropdownRef = useRef<DropdownController>(null);

  const [open, { on: onShowDropdown, off: onHideDropdown, change: onToggleDropdown }] =
    useFlag(false);

  // NOTE: Hide dropdown with timeout.
  //
  //       We hide dropdown when search input lose its focus. In that case, `blur` event will be fired early, dropdown
  //       will be hidden, and click by option will not work.
  const handleHideDropdown = useCallback(() => {
    setTimeout(onHideDropdown, 0);
  }, [onHideDropdown]);

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

    onOpenChange(state: boolean) {
      onToggleDropdown(state);
    },

    middleware: [
      offset({ mainAxis: 4 }),
      flip(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
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

  const dismiss = useDismiss(context, {
    escapeKey: true,
    outsidePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const { isMounted: isOpen, styles: transitionStyles } = useTransitionStyles(context);

  const style = useMemo(
    () => ({ ...floatingStyles, ...transitionStyles }),
    [floatingStyles, transitionStyles],
  );

  return {
    isOpen,

    context,

    dropdownRef,
    floatingRef: refs.setFloating,
    referenceRef: refs.setReference,

    getReferenceProps,
    getFloatingProps,

    style,

    onShowDropdown,
    onHideDropdown: handleHideDropdown,

    onGoNext: handleGoNext,
    onGoPrevious: handleGoPrevious,
    onSelectCurrent: handleSelect,
  };
}
