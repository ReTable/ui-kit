import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

import { Controller } from '../types';

export function useController(
  ref: Ref<Controller>,
): [RefObject<HTMLDivElement>, RefObject<HTMLTextAreaElement>] {
  const conversationRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        promptRef.current?.focus();
      },

      scrollToTop: (behavior?: ScrollBehavior) => {
        const { current: conversation } = conversationRef;

        if (conversation == null) {
          return;
        }

        conversation.scrollTo({ left: 0, top: 0, behavior });
      },

      scrollToBottom: (behavior?: ScrollBehavior) => {
        const { current: conversation } = conversationRef;

        if (conversation == null) {
          return;
        }

        conversation.scrollTo({ left: 0, top: conversation.scrollHeight, behavior });
      },
    }),
    [],
  );

  return [conversationRef, promptRef];
}
