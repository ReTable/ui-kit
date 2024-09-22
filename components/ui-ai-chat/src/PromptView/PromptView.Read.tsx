import { ReactNode } from 'react';

import { ReactComponent as EditIcon } from './assets/edit.svg';

import * as styles from './PromptView.css';

type Props = {
  isEditable: boolean;

  onStartEdit: () => void;

  prompt: string;
};

export function Read({ isEditable, onStartEdit, prompt }: Props): ReactNode {
  return (
    <div className={styles.view}>
      {isEditable && (
        <button className={styles.startEdit} onClick={onStartEdit} title="Edit" type="button">
          <EditIcon />
        </button>
      )}
      {prompt}
    </div>
  );
}

if (import.meta.env.DEV) {
  Read.displayName = 'ui-ai-chat(PromptView.Read)';
}
