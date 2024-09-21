import { ChangeEventHandler, KeyboardEventHandler, forwardRef, useCallback } from 'react';

import clsx from 'clsx';
import BaseTextArea from 'react-textarea-autosize';

import * as styles from './TextArea.css';

export const MIN_VISIBLE_ROWS_COUNT = 1;
export const MAX_VISIBLE_ROWS_COUNT = 10;

export type Props = {
  className?: string;
  maxLength?: number;
  onChange: (value: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  placeholder?: string;
  value: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, maxLength, onChange, onEnter, onEscape, placeholder, value }, ref) => {
    const handleKeyDown = useCallback<KeyboardEventHandler<HTMLTextAreaElement>>(
      (event) => {
        if (event.shiftKey) {
          return;
        }

        if (event.key === 'Enter' && onEnter != null) {
          event.preventDefault();

          onEnter();
        } else if (event.key === 'Escape' && onEscape != null) {
          event.preventDefault();

          onEscape();
        }
      },
      [onEnter, onEscape],
    );

    const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
      (event) => {
        onChange(event.target.value);
      },
      [onChange],
    );

    return (
      <BaseTextArea
        className={clsx(styles.root, className, 'input-root')}
        maxLength={maxLength}
        maxRows={MAX_VISIBLE_ROWS_COUNT}
        minRows={MIN_VISIBLE_ROWS_COUNT}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        ref={ref}
        value={value}
      />
    );
  },
);

if (import.meta.env.DEV) {
  TextArea.displayName = 'ui-ai-chat(TextArea)';
}
