import { ReactNode, forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Conversation.css';

import { RequestView } from '../RequestView';
import { ConversationController, Request, TableAction } from '../types';

import { useController } from './Conversation.hooks';

export type Props = {
  className?: string;
  conversation: Request[];
  empty?: () => ReactNode;
  isPending: boolean;
  maxPromptLength?: number;
  onEdit: (index: number, prompt: string) => void;
  tableActions: TableAction[];
};

export const Conversation = forwardRef<ConversationController, Props>(
  ({ className, conversation, empty, isPending, maxPromptLength, onEdit, tableActions }, ref) => {
    const conversationRef = useController(ref);

    const isEmpty = conversation.length === 0;

    return (
      <div
        className={clsx(styles.root, isEmpty && styles.isEmpty, className)}
        ref={conversationRef}
      >
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
    );
  },
);
