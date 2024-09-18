import { ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';

import { useFlag } from '@tabula/use-flag';

import * as styles from './UiAiChat.css';
import { variants } from '../shared.css';

import { Header } from '../Header';
import { PromptInput } from '../PromptInput';
import { RequestView } from '../RequestView';
import { Settings } from '../Settings';
import { Controller, Mode, Request, TableAction, ToolbarItem, Variant } from '../types';

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
  maxPromptLength?: number;
  maxTemperature: number;
  minTemperature: number;
  onChangePrompt: (prompt: string) => void;
  onChangeTemperature: (temperature: number) => void;
  onEdit: (index: number, prompt: string) => void;
  onSend: () => void;
  placeholder?: string;
  prompt: string;
  tableActions?: TableAction[];
  temperature: number;
  title?: string;
  toolbarItems?: ToolbarItem[];
  variant?: Variant;
} & ModeProps &
  ContextProps;

export const UiAiChat = forwardRef<Controller, Props>(
  (
    {
      className,
      context,
      conversation,
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
      supportedModes,
      tableActions = [],
      temperature,
      title = '',
      toolbarItems,
      variant = 'normal',
    }: Props,
    ref: ForwardedRef<Controller>,
  ) => {
    const conversationRef = useController(ref);

    const isPending = conversation.some((it) => it.id == null);
    const isSendAllowed = !isPending && prompt.trim().length > 0;

    const [settingsIsOpened, { off: onCloseSettings }] = useFlag(false);

    return (
      <div className={clsx(styles.root, variants[variant], className)}>
        {variant === 'condensed' && (
          <Header className={styles.header} toolbarItems={toolbarItems}>
            {title}
          </Header>
        )}
        <div className={styles.conversation} ref={conversationRef}>
          <div className={styles.requests}>
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
            value={prompt}
          />
        </div>
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
