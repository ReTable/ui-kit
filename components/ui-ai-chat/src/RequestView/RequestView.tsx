import { ReactNode } from 'react';

import { ReactComponent as AiIcon } from './assets/ai.svg';

import * as styles from './RequestView.css';

import { AnswerView } from '../AnswerView';
import { PromptView } from '../PromptView';
import { Request, TableAction } from '../types';

type Props = {
  editDisabled: boolean;
  maxPromptLength?: number;
  onResend: (id: number, prompt: string) => void;
  pendingPlaceholder?: string;
  request: Request;
  tableActions: TableAction[];
};

export function RequestView({
  editDisabled,
  maxPromptLength,
  onResend,
  pendingPlaceholder,
  request,
  tableActions,
}: Props): ReactNode {
  return (
    <div className={styles.root}>
      <PromptView
        className={styles.prompt}
        id={request.id}
        isEditable={!editDisabled}
        maxLength={maxPromptLength}
        onResend={onResend}
        prompt={request.prompt}
      />
      <div className={styles.answer}>
        <AiIcon className={styles.answerIcon} />
        <AnswerView
          className={styles.answerBody}
          pendingPlaceholder={pendingPlaceholder}
          request={request}
          tableActions={tableActions}
        />
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  RequestView.displayName = 'ui-ai-chat(RequestView)';
}
