import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

import { InternalConversationController } from '../types';

export function useController(ref: Ref<InternalConversationController>): RefObject<HTMLDivElement> {
  const conversationRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      get hasTextArea(): boolean {
        const { current: conversation } = conversationRef;

        if (conversation == null) {
          return false;
        }

        return conversation.querySelector('textarea') != null;
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

  return conversationRef;
}
