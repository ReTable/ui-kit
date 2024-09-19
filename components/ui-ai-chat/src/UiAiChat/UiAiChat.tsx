import { ForwardedRef, ReactNode, forwardRef, useRef } from 'react';

import clsx from 'clsx';

import * as styles from './UiAiChat.css';
import { variants } from '../shared.css';

import { Conversation } from '../Conversation';
import { PromptInput } from '../PromptInput';
import {
  Controller,
  ConversationController,
  PromptInputController,
  Request,
  TableAction,
  Variant,
} from '../types';

import { useController } from './UiAiChat.hooks';

export type Props = {
  className?: string;
  conversation: Request[];
  empty?: () => ReactNode;
  maxPromptLength?: number;
  onChangePrompt: (prompt: string) => void;
  onEdit: (index: number, prompt: string) => void;
  onSend: () => void;
  placeholder?: string;
  prompt: string;
  tableActions?: TableAction[];
  variant?: Variant;
};

export const UiAiChat = forwardRef<Controller, Props>(
  (
    {
      className,
      conversation,
      empty,
      maxPromptLength,
      onChangePrompt,
      onEdit,
      onSend,
      placeholder,
      prompt,
      tableActions = [],
      variant = 'normal',
    }: Props,
    ref: ForwardedRef<Controller>,
  ) => {
    const conversationRef = useRef<ConversationController>(null);
    const promptInputRef = useRef<PromptInputController>(null);

    useController({ ref, conversationRef, promptInputRef });

    const isEmpty = conversation.length === 0;
    const isPending = conversation.some((it) => it.id == null);
    const isSendAllowed = !isPending && prompt.trim().length > 0;

    return (
      <div className={clsx(styles.root, variants[variant], isEmpty && styles.isEmpty, className)}>
        <Conversation
          className={styles.conversation}
          conversation={conversation}
          empty={empty}
          isPending={isPending}
          maxPromptLength={maxPromptLength}
          onEdit={onEdit}
          tableActions={tableActions}
          ref={conversationRef}
        />
        <div className={styles.prompt}>
          <PromptInput
            className={styles.promptInput}
            isSendable={isSendAllowed}
            isSending={isPending}
            maxLength={maxPromptLength}
            onChange={onChangePrompt}
            onSend={onSend}
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
