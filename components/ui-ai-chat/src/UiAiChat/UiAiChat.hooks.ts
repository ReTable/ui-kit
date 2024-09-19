import { Ref, RefObject, useImperativeHandle } from 'react';

import { Controller, ConversationController, PromptInputController } from '../types';

type Options = {
  ref: Ref<Controller>;

  conversationRef: RefObject<ConversationController>;
  promptInputRef: RefObject<PromptInputController>;
};

export function useController({ ref, conversationRef, promptInputRef }: Options): void {
  useImperativeHandle(
    ref,
    () => ({
      prompt: {
        focus: () => {
          promptInputRef.current?.focus();
        },

        blur: () => {
          promptInputRef.current?.blur();
        },

        select: () => {
          promptInputRef.current?.select();
        },
      },

      conversation: {
        scrollToTop: (behavior?: ScrollBehavior) => {
          conversationRef.current?.scrollToTop(behavior);
        },

        scrollToBottom: (behavior?: ScrollBehavior) => {
          conversationRef.current?.scrollToBottom(behavior);
        },
      },
    }),
    [conversationRef, promptInputRef],
  );
}
