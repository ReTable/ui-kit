import { useCallback } from 'react';

import { ExtendedRefs } from '@floating-ui/react';

import { OutsideListener, useCloseOnOutsideEvents } from '@tabula/use-close-on-outside-events';

import { ChangeVisibleHandler, VisibleKind } from '../Selector.types';

type Options = {
  refs: ExtendedRefs<HTMLElement>;
  isVisible: boolean;
  onChangeVisible: ChangeVisibleHandler;
};

export function useClosePopupOnOutsideEvents({ refs, isVisible, onChangeVisible }: Options): void {
  const onOutsideClick = useCallback<OutsideListener>(
    (event) => {
      if (!(event.target instanceof Element)) {
        throw new TypeError('Target must be an Element');
      }

      const { current: trigger } = refs.reference;

      if (trigger == null) {
        return;
      }

      // NOTE: Check is `trigger` is not virtual element.
      if (!(trigger instanceof Element)) {
        return;
      }

      // NOTE: Exclude auto-hide popup after click by trigger node
      if (!trigger.contains(event.target)) {
        onChangeVisible(false, VisibleKind.Outside);
      }
    },
    [refs.reference, onChangeVisible],
  );

  useCloseOnOutsideEvents({
    ref: refs.floating,
    isOpen: isVisible,
    listenEvents: ['mousedown'],
    listener: onOutsideClick,
  });
}
