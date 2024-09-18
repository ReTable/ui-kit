import { ReactNode, useCallback, useState } from 'react';

import { UiButton24 } from '@tabula/ui-button';

import { ReactComponent as AiIcon } from './assets/ai.svg';
import { ReactComponent as CheckedIcon } from './assets/checked.svg';
import { ReactComponent as EditIcon } from './assets/edit.svg';

import * as styles from './RequestView.css';

import { Answer } from '../Answer';
import { TextArea } from '../TextArea';
import { Request, TableAction } from '../types';

type Props = {
  editDisabled: boolean;
  maxPromptLength?: number;
  onEdit: (id: number, prompt: string) => void;
  request: Request;
  tableActions: TableAction[];
};

export function RequestView({
  editDisabled,
  maxPromptLength,
  onEdit,
  request,
  tableActions,
}: Props): ReactNode {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(request.prompt);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsEditing(false);

    setEditInput(request.prompt);
  }, [request.prompt]);

  const handleApply = useCallback(() => {
    setIsEditing(false);

    if (request.id != null) {
      onEdit(request.id, editInput);
    }
  }, [editInput, onEdit, request.id]);

  return (
    <div className={styles.root}>
      <div className={styles.prompt}>
        {isEditing ? (
          <div className={styles.editGroupContainer}>
            <div className={styles.editTextAreaContainer}>
              <TextArea
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className={styles.textarea}
                maxLength={maxPromptLength}
                onChange={setEditInput}
                placeholder="Ask GPT"
                rows={3}
                value={editInput}
              />
            </div>
            <div className={styles.editControls}>
              <UiButton24 onClick={handleCancel} variant="cancel">
                Cancel
              </UiButton24>
              <UiButton24 icon={CheckedIcon} onClick={handleApply} variant="primary">
                Apply
              </UiButton24>
            </div>
          </div>
        ) : (
          <>
            {request.prompt}
            {!editDisabled && (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div className={styles.editButton} onClick={handleEdit}>
                <EditIcon />
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.answer}>
        <AiIcon className={styles.answerIcon} />
        <Answer className={styles.answerBody} request={request} tableActions={tableActions} />
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  RequestView.displayName = 'ui-ai-chat(RequestView)';
}
