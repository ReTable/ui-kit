import {
  ChangeEventHandler,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import clsx from 'clsx';
import BaseTextArea from 'react-textarea-autosize';

import * as styles from './TextArea.css';

export const MIN_VISIBLE_ROWS_COUNT = 1;
export const MAX_VISIBLE_ROWS_COUNT = 10;

export type Props = {
  autoSelect?: boolean;
  className?: string;
  maxLength?: number;
  onChange: (value: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
  placeholder?: string;
  value: string;
};

export function TextArea({
  autoSelect,
  className,
  maxLength,
  onChange,
  onEnter,
  onEscape,
  placeholder,
  value,
}: Props): ReactNode {
  const ref = useRef<HTMLTextAreaElement>(null);

  // NOTE: Select content only on initial render.
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (autoSelect) {
      ref.current?.select();
    }
  }, []);
  /* eslint-enable */

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
}

if (import.meta.env.DEV) {
  TextArea.displayName = 'ui-ai-chat(TextArea)';
}
