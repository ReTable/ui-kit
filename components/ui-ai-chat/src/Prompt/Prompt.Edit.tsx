import {
  ChangeEventHandler,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import TextArea from 'react-textarea-autosize';

import { UiButton24 } from '@tabula/ui-button';

import { ReactComponent as CheckedIcon } from './assets/checked.svg';

import * as styles from './Prompt.css';
import { MAX_VISIBLE_ROWS_COUNT, MIN_VISIBLE_ROWS_COUNT } from '../shared.css';

type Props = {
  maxLength?: number;
  onChange: (value: string) => void;
  onApply: () => void;
  onCancel: () => void;
  value: string;
};

export function Edit({ onApply, maxLength, onChange, onCancel, value }: Props): ReactNode {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.select();
  }, []);

  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (event) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLTextAreaElement>>(
    (event) => {
      if (event.shiftKey) {
        return;
      }

      if (event.key !== 'Enter' && event.key !== 'Escape') {
        return;
      }

      event.preventDefault();

      if (event.key === 'Enter') {
        onApply();
      } else {
        onCancel();
      }
    },
    [onApply, onCancel],
  );

  return (
    <div className={styles.edit}>
      <TextArea
        className={styles.input}
        maxLength={maxLength}
        maxRows={MAX_VISIBLE_ROWS_COUNT}
        minRows={MIN_VISIBLE_ROWS_COUNT}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={ref}
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
