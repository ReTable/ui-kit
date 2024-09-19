import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

import { ConversationController } from '../types';

export function useController(ref: Ref<ConversationController>): RefObject<HTMLDivElement> {
  const conversationRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => ({
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

  return conversationRef;
}
