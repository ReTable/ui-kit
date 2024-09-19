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
  conversation: Request[];
  empty?: () => ReactNode;
  maxPromptLength?: number;
  onEdit: (index: number, prompt: string) => void;
  onSend: (prompt: string) => void;
  pendingPlaceholder?: string;
  placeholder?: string;
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
      onEdit,
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
          onEdit={onEdit}
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
