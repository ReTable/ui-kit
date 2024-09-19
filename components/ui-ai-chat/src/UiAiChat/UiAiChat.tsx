import { ForwardedRef, ReactNode, forwardRef, useRef } from 'react';

import clsx from 'clsx';

import * as styles from './UiAiChat.css';
import { variants } from '../shared.css';

import { Conversation } from '../Conversation';
import { PromptInput } from '../PromptInput';
import {
  Controller,
  InternalConversationController,
  PromptInputController,
  Request,
  TableAction,
  Variant,
} from '../types';

import { useAutoScroll, useController, usePrompt } from './hooks';

export type Props = {
  className?: string;
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
  /**
   * Optional look and feel variant.
   */
  variant?: Variant;
};

export const UiAiChat = forwardRef<Controller, Props>(
  (
    {
      className,
      conversation,
      empty,
      maxPromptLength,
      onResend,
      onSend,
      pendingPlaceholder,
      placeholder,
      tableActions = [],
      variant = 'normal',
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
      <div className={clsx(styles.root, variants[variant], className)}>
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
        <div className={styles.prompt}>
          <PromptInput
            className={styles.promptInput}
            isSendable={isSendable}
            isSending={isPending}
            maxLength={maxPromptLength}
            onChange={onChangePrompt}
            onSend={handleSend}
            placeholder={placeholder ?? 'Ask GPT'}
            ref={promptInputRef}
            value={prompt}
          />
        </div>
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  UiAiChat.displayName = 'ui-ai-chat(UiAiChat)';
}
