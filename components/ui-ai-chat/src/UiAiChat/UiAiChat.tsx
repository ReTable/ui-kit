import { ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';

import { UiButton24 } from '@tabula/ui-button';
import { UiSlider } from '@tabula/ui-slider';

import { ReactComponent as AddIcon } from './assets/add.svg';

import * as styles from './UiAiChat.css';

import { Header } from '../Header';
import { ModeSelector } from '../ModeSelector';
import { PromptInput } from '../PromptInput';
import { RequestView } from '../RequestView';
import { TextArea } from '../TextArea';
import { Controller, Mode, Request, TableAction } from '../types';

import { useController } from './UiAiChat.hooks';

type ModeProps =
  | {
      mode: Mode;
      supportedModes: Mode[];
      onChangeMode: (mode: Mode) => void;
    }
  | {
      mode?: never;
      supportedModes?: never;
      onChangeMode?: never;
    };

type ContextProps =
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
  inputAtTheBottom?: boolean;
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
      inputAtTheBottom = false,
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

    const creativityLevel = `${Math.round(temperature * 10)} / 10`;

    return (
      <div className={clsx(styles.root, inputAtTheBottom && styles.isReversed, className)}>
        <Header onStartNewChat={() => {}} onFullscreen={() => {}} onOpenSettings={() => {}}>
          {mode?.name ?? ''}
        </Header>
        <div className={styles.input}>
          {mode != null && (
            <ModeSelector
              className={styles.mode}
              onChange={onChangeMode}
              options={supportedModes}
              value={mode}
            />
          )}
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
          {onStartNewChat != null && conversation.length > 0 && (
            <UiButton24
              className={styles.startNewChat}
              icon={AddIcon}
              isDisabled={isPending}
              onClick={onStartNewChat}
              variant="edit"
            >
              Start new chat
            </UiButton24>
          )}
          <div className={styles.creativity}>
            <div className={styles.creativityTitleContainer}>
              <div className={styles.creativityTitle}>AI creativity</div>
              <div className={styles.creativityLevel}>{creativityLevel}</div>
            </div>
            <UiSlider
              max={maxTemperature}
              min={minTemperature}
              onChange={onChangeTemperature}
              step={0.005}
              value={temperature}
              variant="ai"
            />
          </div>
        </div>
        {context != null && (
          <div className={styles.experimental}>
            <div className={styles.label}>Context</div>
            <TextArea
              className={styles.textarea}
              onChange={onChangeContext}
              placeholder="Context"
              rows={3}
              value={context}
            />
          </div>
        )}
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
      </div>
    );
  },
);

if (import.meta.env.DEV) {
  UiAiChat.displayName = 'ui-ai-chat(UiAiChat)';
}
