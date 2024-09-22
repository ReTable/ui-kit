import { ReactNode, useCallback, useState } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './PromptView.css';

import { Edit } from './PromptView.Edit';
import { Read } from './PromptView.Read';

type Props = {
  className?: string;

  id?: number;
  prompt: string;
  maxLength?: number;

  isEditable: boolean;

  onResend: (id: number, prompt: string) => void;
};

export function PromptView({
  className,
  id,
  isEditable,
  maxLength,
  onResend,
  prompt,
}: Props): ReactNode {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(prompt);

  const handleCancel = useCallback(() => {
    setIsEditing(false);

    setEditInput(prompt);
  }, [prompt]);

  const handleApply = useCallback(() => {
    setIsEditing(false);

    if (id != null) {
      onResend(id, editInput);
    }
  }, [editInput, id, onResend]);

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
        <Read isEditable={isEditable && id != null} onStartEdit={handleStartEdit} prompt={prompt} />
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  PromptView.displayName = 'ui-ai-chat(PromptView)';
}
