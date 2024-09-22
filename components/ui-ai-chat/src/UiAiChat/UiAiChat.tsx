import { ForwardedRef, ReactNode, forwardRef, useRef } from 'react';

import clsx from 'clsx';

import * as styles from './UiAiChat.css';

import { Conversation } from '../Conversation';
import { Prompt } from '../Prompt';
import {
  Controller,
  InternalConversationController,
  PromptInputController,
  Request,
  TableAction,
} from '../types';

import { useAutoScroll, useController, usePrompt } from './hooks';

export type Props = {
  className?: string;
  /**
   * Optional context of prompt.
   */
  context?: string;
  /**
   * List of requests.
   */
  conversation: Request[];
  /**
   * Optional placeholder for empty chat.
   */
  empty?: () => ReactNode;
  /**
   * Optional maximal length allowed for prompt.
   */
  maxPromptLength?: number;
  /**
   * Optional context reset handler.
   */
  onClearContext?: () => void;
  /**
   * Allows to resend existing prompt.
   *
   * @param id ID of request.
   * @param prompt New prompt.
   */
  onResend: (id: number, prompt: string) => void;
  /**
   * Allows to send a new prompt.
   *
   * @param prompt New prompt.
   */
  onSend: (prompt: string) => void;
  /**
   * Optional message for pending requests.
   */
  pendingPlaceholder?: string;
  /**
   * Optional placeholder for prompt input.
   */
  placeholder?: string;
  /**
   * Optional table actions.
   */
  tableActions?: TableAction[];
};

export const UiAiChat = forwardRef<Controller, Props>(
  (
    {
      className,
      context,
      conversation,
      empty,
      maxPromptLength,
      onClearContext,
      onResend,
      onSend,
      pendingPlaceholder,
      placeholder,
      tableActions = [],
    }: Props,
    ref: ForwardedRef<Controller>,
  ) => {
    const conversationRef = useRef<InternalConversationController>(null);
    const promptInputRef = useRef<PromptInputController>(null);

    useController({ ref, conversationRef, promptInputRef });

    useAutoScroll(conversation, conversationRef);

    const {
      isPending,
      isSendable,
      onChangePrompt,
      onSend: handleSend,
      prompt,
    } = usePrompt({
      conversation,
      onSend,
      promptInputRef,
    });

    return (
      <div className={clsx(styles.root, className)}>
        <Conversation
          className={styles.conversation}
          conversation={conversation}
          empty={empty}
          isPending={isPending}
          maxPromptLength={maxPromptLength}
          onResend={onResend}
          pendingPlaceholder={pendingPlaceholder}
          ref={conversationRef}
          tableActions={tableActions}
        />
        <Prompt
          context={context}
          isSendable={isSendable}
          isSending={isPending}
          maxLength={maxPromptLength}
          onChangePrompt={onChangePrompt}
          onClearContext={onClearContext}
          onSend={handleSend}
          placeholder={placeholder ?? 'Ask GPT'}
          prompt={prompt}
          ref={promptInputRef}
        />
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  UiAiChat.displayName = 'ui-ai-chat(UiAiChat)';
}
