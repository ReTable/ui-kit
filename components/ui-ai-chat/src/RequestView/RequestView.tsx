import { ReactNode } from 'react';

import { ReactComponent as AiIcon } from './assets/ai.svg';

import * as styles from './RequestView.css';

import { Answer } from '../Answer';
import { Prompt } from '../Prompt';
import { Request, TableAction } from '../types';

type Props = {
  editDisabled: boolean;
  maxPromptLength?: number;
  onEdit: (id: number, prompt: string) => void;
  pendingPlaceholder?: string;
  request: Request;
  tableActions: TableAction[];
};

export function RequestView({
  editDisabled,
  maxPromptLength,
  onEdit,
  pendingPlaceholder,
  request,
  tableActions,
}: Props): ReactNode {
  return (
    <div className={styles.root}>
      <Prompt
        className={styles.prompt}
        id={request.id}
        isEditable={!editDisabled}
        maxLength={maxPromptLength}
        onEdit={onEdit}
        prompt={request.prompt}
      />
      <div className={styles.answer}>
        <AiIcon className={styles.answerIcon} />
        <Answer
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
