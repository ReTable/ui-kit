import { ReactNode } from 'react';

import { UiButton24 } from '@tabula/ui-button';

import { ReactComponent as CheckedIcon } from './assets/checked.svg';

import * as styles from './Prompt.css';

import { TextArea } from '../TextArea';

type Props = {
  maxLength?: number;
  onChange: (value: string) => void;
  onApply: () => void;
  onCancel: () => void;
  value: string;
};

export function Edit({ onApply, maxLength, onChange, onCancel, value }: Props): ReactNode {
  return (
    <div className={styles.edit}>
      <TextArea
        autoFocus
        className={styles.input}
        maxLength={maxLength}
        onChange={onChange}
        onEnter={onApply}
        onEscape={onCancel}
        value={value}
      />
      <div className={styles.controls}>
        <UiButton24 onClick={onCancel} variant="cancel">
          Cancel
        </UiButton24>
        <UiButton24 icon={CheckedIcon} onClick={onApply} variant="primary">
          Apply
        </UiButton24>
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  Edit.displayName = 'ui-ai-chat(PromptEdit)';
}
