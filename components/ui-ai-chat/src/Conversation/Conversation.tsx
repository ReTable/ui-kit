import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Conversation.css';

import { RequestView } from '../RequestView';
import { InternalConversationController, Request, TableAction } from '../types';

import { useController } from './Conversation.hooks';

export type Props = {
  className?: string;
  conversation: Request[];
  empty?: () => ReactNode;
  isPending: boolean;
  maxPromptLength?: number;
  onEdit: (index: number, prompt: string) => void;
  pendingPlaceholder?: string;
  tableActions: TableAction[];
};

export const Conversation = forwardRef<InternalConversationController, Props>(
  (
    {
      className,
      conversation,
      empty,
      isPending,
      maxPromptLength,
      onEdit,
      pendingPlaceholder,
      tableActions,
    },
    ref,
  ) => {
    const conversationRef = useController(ref);

    const isEmpty = conversation.length === 0;

    return (
      <div className={clsx(styles.root, className)} ref={conversationRef}>
        <div className={isEmpty ? styles.placeholder : styles.requests}>
          {isEmpty
            ? empty?.()
            : conversation.map((request) => (
                <RequestView
                  editDisabled={isPending}
                  key={request.id ?? 'pending-request'}
                  maxPromptLength={maxPromptLength}
                  onEdit={onEdit}
                  pendingPlaceholder={pendingPlaceholder}
                  request={request}
                  tableActions={tableActions}
                />
              ))}
        </div>
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  Conversation.displayName = 'ui-ai-chat(Conversation)';
}
