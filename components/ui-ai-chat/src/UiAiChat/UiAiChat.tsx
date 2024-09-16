import { ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';

import { useFlag } from '@tabula/use-flag';

import * as styles from './UiAiChat.css';

import { Header } from '../Header';
import { PromptInput } from '../PromptInput';
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

    return (
      <div className={clsx(styles.root, className)}>
        <Header
          onStartNewChat={onStartNewChat}
          onFullscreen={() => {}}
          onOpenSettings={onOpenSettings}
        >
          {mode.name}
        </Header>
        <div className={styles.input}>
          <PromptInput
            className={styles.inputControl}
            isSendable={isSendAllowed}
            isSending={isPending}
            maxLength={maxPromptLength}
            onChange={onChangePrompt}
            onSend={onSend}
            placeholder={placeholder ?? 'Ask GPT'}
            value={prompt}
          />
        </div>
        <div className={styles.chat} ref={conversationRef}>
          {conversation.map((request) => (
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
        <Settings
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
