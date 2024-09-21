import { RefObject, useEffect, useRef } from 'react';

import { InternalConversationController, Request } from '../../types';

function shouldToScroll(previous: Request | null, current: Request | null): boolean {
  if (current == null) {
    return false;
  }

  if (previous == null) {
    return true;
  }

  return (
    previous.id !== current.id ||
    previous.prompt !== current.prompt ||
    previous.answer !== current.answer
  );
}

export function useAutoScroll(
  conversation: Request[],
  conversationRef: RefObject<InternalConversationController>,
): void {
  const lastRef = useRef<Request | null>(null);

  useEffect(() => {
    if (conversationRef.current == null) {
      return;
    }

    const { current: previous } = lastRef;
    const current = conversation.at(-1) ?? null;

    if (shouldToScroll(previous, current) && !conversationRef.current.hasTextArea) {
      conversationRef.current.scrollToBottom();
    }

    lastRef.current = current;
  }, [conversation, conversationRef]);

  // NOTE: We should scroll to bottom only on at initial render.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (conversation.length > 0) {
      conversationRef.current?.scrollToBottom();
    }

    lastRef.current = conversation.at(-1) ?? null;
  }, []);
  /* eslint-enable */
}
