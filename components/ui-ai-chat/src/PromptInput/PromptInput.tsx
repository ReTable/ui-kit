import { ChangeEventHandler, KeyboardEventHandler, ReactNode, useCallback } from 'react';

import clsx from 'clsx';
import TextArea from 'react-textarea-autosize';

import { ReactComponent as SendIcon } from './assets/send.svg';
import { ReactComponent as SendingIcon } from './assets/sending.svg';

import * as styles from './PromptInput.css';

const MIN_VISIBLE_ROWS_COUNT = 1;
const MAX_VISIBLE_ROWS_COUNT = 10;

type Props = {
  className?: string;
  isSendable: boolean;
  isSending: boolean;
  maxLength?: number;
  onChange: (nextValue: string) => void;
  onSend: () => void;
  placeholder: string;
  value: string;
};

export function PromptInput({
  className,
  isSendable,
  isSending,
  maxLength,
  onChange,
  onSend,
  placeholder,
  value,
}: Props): ReactNode {
  const isAllowToSend = isSendable && !isSending;

  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (event) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLTextAreaElement>>(
    (event) => {
      if (event.shiftKey || event.key !== 'Enter') {
        return;
      }

      event.preventDefault();

      if (isAllowToSend) {
        onSend();
      }
    },
    [isAllowToSend, onSend],
  );

  return (
    <div className={clsx(styles.root, isSending && styles.isSending, className)}>
      <TextArea
        className={styles.input}
        maxLength={maxLength}
        maxRows={MAX_VISIBLE_ROWS_COUNT}
        minRows={MIN_VISIBLE_ROWS_COUNT}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={value}
      />
      <button
        className={styles.send}
        disabled={!isAllowToSend}
        onClick={onSend}
        title="Send"
        type="button"
      >
        {isSending ? <SendingIcon /> : <SendIcon />}
      </button>
    </div>
  );
}

if (import.meta.env.DEV) {
  PromptInput.displayName = 'ui-ai-chat(PromptInput)';
}
