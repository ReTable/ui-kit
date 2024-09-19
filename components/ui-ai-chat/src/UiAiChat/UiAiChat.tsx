import { ForwardedRef, ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import * as styles from './UiAiChat.css';
import { variants } from '../shared.css';

import { PromptInput } from '../PromptInput';
import { RequestView } from '../RequestView';
import { Settings } from '../Settings';
import { Controller, Mode, Request, TableAction, Variant } from '../types';

import { useController } from './UiAiChat.hooks';

export type ModeProps =
  | {
      mode: Mode;
      supportedModes: Mode[];
      onChangeMode: (mode: Mode) => void;
    }
  | {
      mode: Mode;
      supportedModes?: never;
      onChangeMode?: never;
    };

export type ContextProps =
  | {
      context: string;
      onChangeContext: (context: string) => void;
    }
  | {
      context?: never;
      onChangeContext?: never;
    };

export type Props = {
  className?: string;
  conversation: Request[];
  empty?: () => ReactNode;
  maxPromptLength?: number;
  maxTemperature: number;
  minTemperature: number;
  onChangePrompt: (prompt: string) => void;
  onChangeTemperature: (temperature: number) => void;
  onCloseSettings?: () => void;
  onEdit: (index: number, prompt: string) => void;
  onSend: () => void;
  placeholder?: string;
  prompt: string;
  showSettings?: boolean;
  tableActions?: TableAction[];
  temperature: number;
  variant?: Variant;
} & ModeProps &
  ContextProps;

export const UiAiChat = forwardRef<Controller, Props>(
  (
    {
      className,
      context,
      conversation,
      empty,
      maxPromptLength,
      maxTemperature,
      minTemperature,
      mode,
      onChangeContext,
      onChangeMode,
      onChangePrompt,
      onChangeTemperature,
      onEdit,
      onSend,
      placeholder,
      prompt,
      showSettings = false,
      supportedModes,
      tableActions = [],
      temperature,
      onCloseSettings,
      variant = 'normal',
    }: Props,
    ref: ForwardedRef<Controller>,
  ) => {
    const [conversationRef, promptRef] = useController(ref);

    const isEmpty = conversation.length === 0;
    const isPending = conversation.some((it) => it.id == null);
    const isSendAllowed = !isPending && prompt.trim().length > 0;

    return (
      <div className={clsx(styles.root, variants[variant], isEmpty && styles.isEmpty, className)}>
        <div className={styles.conversation} ref={conversationRef}>
          <div className={styles.requests}>
            {isEmpty
              ? empty?.()
              : conversation.map((request) => (
                  <RequestView
                    editDisabled={isPending}
                    key={request.id ?? 'pending-request'}
                    maxPromptLength={maxPromptLength}
                    onEdit={onEdit}
                    request={request}
                    tableActions={tableActions}
                  />
                ))}
          </div>
        </div>
        <div className={styles.prompt}>
          <PromptInput
            className={styles.promptInput}
            isSendable={isSendAllowed}
            isSending={isPending}
            maxLength={maxPromptLength}
            onChange={onChangePrompt}
            onSend={onSend}
            placeholder={placeholder ?? 'Ask GPT'}
            ref={promptRef}
            value={prompt}
          />
        </div>
        <Settings
          className={styles.drawer}
          context={context}
          isOpened={showSettings}
          maxTemperature={maxTemperature}
          minTemperature={minTemperature}
          mode={mode}
          onChangeContext={onChangeContext}
          onChangeMode={onChangeMode}
          onChangeTemperature={onChangeTemperature}
          onClose={onCloseSettings}
          supportedModes={supportedModes}
          temperature={temperature}
        />
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  UiAiChat.displayName = 'ui-ai-chat(UiAiChat)';
}
