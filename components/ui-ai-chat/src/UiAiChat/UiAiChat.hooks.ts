import { Ref, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { Controller } from '../types';

type Direction = 'top' | 'bottom';

export function useController(ref: Ref<Controller>): RefObject<HTMLDivElement> {
  const conversationRef = useRef<HTMLDivElement>(null);

  // NOTE: We use state to scroll conversation, because usually we want to
  //       scroll after some message has been added.
  //
  //       If we call `scrollTo` directly on the moment of call, then we
  //       scroll an element to position before a new elements has been added.

  const [direction, setDirection] = useState<Direction | null>(null);

  useEffect(() => {
    const { current: conversation } = conversationRef;

    if (conversation == null || direction == null) {
      return;
    }

    const y = direction === 'top' ? 0 : conversation.scrollHeight;

    conversation.scrollTo(0, y);
  });

  useImperativeHandle(
    ref,
    () => ({
      scrollToTop: () => {
        setDirection('top');
      },

      scrollToBottom: () => {
        setDirection('bottom');
      },
    }),
    [],
  );

  return conversationRef;
}
