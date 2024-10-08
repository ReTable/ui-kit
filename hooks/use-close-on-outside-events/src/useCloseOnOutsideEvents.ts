import { RefObject, useCallback, useEffect } from 'react';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

type EventType = 'click' | 'touchstart' | 'mousedown' | 'blur';

type Event = MouseEvent | FocusEvent | TouchEvent;

export type OutsideListener = (event: Event) => void;

type Options = {
  capture?: boolean;
  disableBody?: boolean;
  isOpen: boolean;
  listenEvents?: EventType[];
  listener: OutsideListener;
  ref: RefObject<HTMLElement | null>;
};

const defaultListenEvents: EventType[] = ['click'];

export function useCloseOnOutsideEvents({
  ref,
  listener,
  isOpen,
  disableBody,
  listenEvents = defaultListenEvents,
  capture = false,
}: Options): void {
  const { current: domNode } = ref;

  const closeOnOutsideClick = useCallback(
    (event: Event) => {
      if (!(event.target instanceof Element)) {
        throw new TypeError('Target must be an Element');
      }

      if (domNode && !domNode.contains(event.target)) {
        listener(event);
      }
    },
    [domNode, listener],
  );

  useEffect(() => {
    if (isOpen && domNode) {
      if (disableBody) {
        disableBodyScroll(domNode, {
          allowTouchMove: (el) => {
            let current: Element | null = el;

            while (current && current !== domNode) {
              if (current instanceof HTMLElement && current.dataset.allowTouchMove) {
                return true;
              }

              current = current.parentElement;
            }

            return false;
          },
        });
      }

      for (const event of listenEvents) {
        window.addEventListener(event, closeOnOutsideClick, capture);
      }
    } else {
      for (const event of listenEvents) {
        window.removeEventListener(event, closeOnOutsideClick, capture);
      }
    }

    return () => {
      if (disableBody && domNode) {
        enableBodyScroll(domNode);
      }

      for (const event of listenEvents) {
        window.removeEventListener(event, closeOnOutsideClick, capture);
      }
    };
  }, [closeOnOutsideClick, listenEvents, disableBody, domNode, isOpen, capture]);
}
