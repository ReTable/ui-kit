import { forwardRef } from 'react';

import clsx from 'clsx';

import { ReactComponent as SendIcon } from './assets/send.svg';
import { ReactComponent as SendingIcon } from './assets/sending.svg';

import * as styles from './PromptInput.css';

import { TextArea } from '../TextArea';
import { PromptInputController } from '../types';

import { useController } from './PromptInput.hooks';

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

export const PromptInput = forwardRef<PromptInputController, Props>(
  ({ className, isSendable, isSending, maxLength, onChange, onSend, placeholder, value }, ref) => {
    const inputRef = useController(ref);

    const isAllowToSend = isSendable && !isSending;

    return (
      <div className={clsx(styles.root, isSending && styles.isSending, className)}>
        <TextArea
          className={styles.input}
          maxLength={maxLength}
          onChange={onChange}
          onEnter={onSend}
          placeholder={placeholder}
          ref={inputRef}
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
  },
);

if (import.meta.env.DEV) {
  PromptInput.displayName = 'ui-ai-chat(PromptInput)';
}
