import { ForwardedRef, forwardRef, useCallback } from 'react';

import clsx from 'clsx';

import { useFlag } from '@tabula/use-flag';

import * as styles from './UiAiChat.css';

import { Header } from '../Header';
import { Prompt } from '../Prompt';
import { RequestView } from '../RequestView';
import { Settings } from '../Settings';
import { Controller, Mode, Request, TableAction } from '../types';

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
  isPending?: boolean;
  isSendAllowed?: boolean;
  maxPromptLength?: number;
  maxTemperature: number;
  minTemperature: number;
  onChangePrompt: (prompt: string) => void;
  onChangeTemperature: (temperature: number) => void;
  onEdit: (index: number, prompt: string) => Promise<void> | void;
  onSend: () => Promise<void> | void;
  onStartNewChat?: () => void;
  placeholder?: string;
  prompt: string;
  tableActions?: TableAction[];
  temperature: number;
} & ModeProps &
  ContextProps;

export const UiAiChat = forwardRef<Controller, Props>(
  (
    {
      className,
      context,
      conversation,
      isPending = false,
      isSendAllowed = true,
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
      onStartNewChat,
      placeholder,
      prompt,
      supportedModes,
      tableActions = [],
      temperature,
    }: Props,
    ref: ForwardedRef<Controller>,
  ) => {
    const conversationRef = useController(ref);

    const [settingsIsOpened, { on: onOpenSettings, off: onCloseSettings }] = useFlag(false);

    const handleEdit = useCallback(
      (id: number, nextPrompt: string) => {
        void onEdit(id, nextPrompt);
      },
      [onEdit],
    );

    const handleSend = useCallback(() => {
      void onSend();
    }, [onSend]);

    return (
      <div className={clsx(styles.root, className)}>
        <Header
          className={styles.header}
          onStartNewChat={onStartNewChat}
          /* eslint-disable-next-line @typescript-eslint/no-empty-function */
          onFullscreen={() => {}}
          onOpenSettings={onOpenSettings}
        >
          {mode.name}
        </Header>
        <div className={styles.conversation} ref={conversationRef}>
          {conversation.map((request) => (
            <RequestView
              editDisabled={isPending}
              key={request.id ?? 'pending-request'}
              maxPromptLength={maxPromptLength}
              onEdit={handleEdit}
              request={request}
              tableActions={tableActions}
            />
          ))}
        </div>
        <Prompt
          className={styles.prompt}
          isSendable={isSendAllowed}
          isSending={isPending}
          maxLength={maxPromptLength}
          onChange={onChangePrompt}
          onSend={handleSend}
          placeholder={placeholder ?? 'Ask GPT'}
          value={prompt}
        />
        <Settings
          className={styles.drawer}
          context={context}
          isOpened={settingsIsOpened}
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
