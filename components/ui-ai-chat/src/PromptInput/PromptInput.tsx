import { KeyboardEvent, ReactNode } from 'react';

import clsx from 'clsx';

import { UiButton24 } from '@tabula/ui-button';

import { ReactComponent as SendIcon } from './assets/send.svg';
import { ReactComponent as SendingIcon } from './assets/sending.svg';

import * as styles from './PromptInput.css';

import { TextArea } from '../TextArea';

const ROWS_COUNT = 3;

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
  const handleEnterPressed = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.shiftKey) {
      return;
    }

    event.preventDefault();

    if (isSendable && !isSending) {
      onSend();
    }
  };

  return (
    <div className={clsx(styles.root, className)}>
      <TextArea
        className={className}
        maxLength={maxLength}
        onChange={onChange}
        onEnterPressed={handleEnterPressed}
        placeholder={placeholder}
        rows={ROWS_COUNT}
        value={value}
      />
      <UiButton24
        className={styles.send}
        icon={isSending ? SendingIcon : SendIcon}
        isDisabled={!isSendable || isSending}
        onClick={onSend}
        variant="ai"
      />
    </div>
  );
}

if (import.meta.env.DEV) {
  PromptInput.displayName = 'UiAiChat(PromptInput)';
}
