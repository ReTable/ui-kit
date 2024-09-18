import { ReactNode, useCallback, useState } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Prompt.css';

import { Edit } from './Prompt.Edit';
import { View } from './Prompt.View';

type Props = {
  className?: string;

  id?: number;
  prompt: string;
  maxLength?: number;

  isEditable: boolean;

  onEdit: (id: number, prompt: string) => void;
};

export function Prompt({ className, id, isEditable, maxLength, onEdit, prompt }: Props): ReactNode {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(prompt);

  const handleCancel = useCallback(() => {
    setIsEditing(false);

    setEditInput(prompt);
  }, [prompt]);

  const handleApply = useCallback(() => {
    setIsEditing(false);

    if (id != null) {
      onEdit(id, editInput);
    }
  }, [editInput]);

  const handleStartEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <div className={clsx(styles.root, className)}>
      {isEditing ? (
        <Edit
          maxLength={maxLength}
          onApply={handleApply}
          onCancel={handleCancel}
          onChange={setEditInput}
          value={editInput}
        />
      ) : (
        <View isEditable={isEditable && id != null} onStartEdit={handleStartEdit} prompt={prompt} />
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  Prompt.displayName = 'ui-ai-chat(Prompt)';
}
