import { ForwardedRef, ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import * as styles from './UiAiChat.css';
import { variants } from '../shared.css';

import { PromptInput } from '../PromptInput';
import { RequestView } from '../RequestView';
import { Controller, Request, TableAction, Variant } from '../types';

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
    const [conversationRef, promptRef] = useController(ref);

    const isEmpty = conversation.length === 0;
    const isPending = conversation.some((it) => it.id == null);
    const isSendAllowed = !isPending && prompt.trim().length > 0;

    return (
      <div className={clsx(styles.root, variants[variant], isEmpty && styles.isEmpty, className)}>
        <div className={styles.conversation} ref={conversationRef}>
          <div className={styles.requests}>
            {isEmpty
              ? empty?.()
              : conversation.map((request) => (
                  <RequestView
                    editDisabled={isPending}
                    key={request.id ?? 'pending-request'}
                    maxPromptLength={maxPromptLength}
                    onEdit={onEdit}
                    request={request}
                    tableActions={tableActions}
                  />
                ))}
          </div>
        </div>
        <div className={styles.prompt}>
          <PromptInput
            className={styles.promptInput}
            isSendable={isSendAllowed}
            isSending={isPending}
            maxLength={maxPromptLength}
            onChange={onChangePrompt}
            onSend={onSend}
            placeholder={placeholder ?? 'Ask GPT'}
            ref={promptRef}
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
