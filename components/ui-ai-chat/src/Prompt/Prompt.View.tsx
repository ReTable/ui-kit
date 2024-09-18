import { ReactNode } from 'react';

import { ReactComponent as EditIcon } from './assets/edit.svg';

import * as styles from './Prompt.css';

type Props = {
  isEditable: boolean;

  onStartEdit: () => void;

  prompt: string;
};

export function View({ isEditable, onStartEdit, prompt }: Props): ReactNode {
  return (
    <div className={styles.view}>
      {isEditable && (
        <button className={styles.startEdit} onClick={onStartEdit} type="button">
          <EditIcon />
        </button>
      )}
      {prompt}
    </div>
  );
}

if (import.meta.env.DEV) {
  View.displayName = 'ui-ai-chat(PromptView)';
}
