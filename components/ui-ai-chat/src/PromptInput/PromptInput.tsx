import { ReactNode, useCallback } from 'react';

import clsx from 'clsx';

import { ReactComponent as SendIcon } from './assets/send.svg';
import { ReactComponent as SendingIcon } from './assets/sending.svg';

import * as styles from './PromptInput.css';

import { TextArea } from '../TextArea';

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

  const handleEnter = useCallback(() => {
    if (isAllowToSend) {
      onSend();
    }
  }, [isAllowToSend, onSend]);

  return (
    <div className={clsx(styles.root, isSending && styles.isSending, className)}>
      <TextArea
        className={styles.input}
        maxLength={maxLength}
        onChange={onChange}
        onEnter={handleEnter}
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
