import { forwardRef } from 'react';

import * as styles from './Prompt.css';

import { PromptContext } from '../PromptContext';
import { PromptInput } from '../PromptInput';
import { PromptInputController } from '../types';

type Props = {
  context?: string;
  isSendable: boolean;
  isSending: boolean;
  maxLength?: number;
  onChangePrompt: (nextValue: string) => void;
  onClearContext?: () => void;
  onSend: () => void;
  placeholder: string;
  prompt: string;
};

export const Prompt = forwardRef<PromptInputController, Props>(
  (
    {
      context,
      isSendable,
      isSending,
      maxLength,
      onChangePrompt,
      onClearContext,
      onSend,
      placeholder,
      prompt,
    },
    ref,
  ) => (
    <div className={styles.root}>
      {context != null && (
        <PromptContext className={styles.context} onClear={onClearContext} value={context} />
      )}
      <PromptInput
        className={styles.input}
        isSendable={isSendable}
        isSending={isSending}
        maxLength={maxLength}
        onChange={onChangePrompt}
        onSend={onSend}
        placeholder={placeholder}
        ref={ref}
        value={prompt}
      />
    </div>
  ),
);

if (import.meta.env.DEV) {
  Prompt.displayName = 'ui-ai-chat(Prompt)';
}
