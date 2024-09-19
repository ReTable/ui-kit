import { ReactNode } from 'react';

import { TableAction, UiAiChat, Variant } from '~';

import { Container } from '../Container';
import { MAX_PROMPT_LENGTH } from '../const';

import { useChat } from './Chat.hooks';

type Props = {
  tableActions: TableAction[];
  variant: Variant;
};

export function Chat({ tableActions, variant }: Props): ReactNode {
  const chat = useChat();

  return (
    <Container variant={variant}>
      <UiAiChat
        {...chat}
        maxPromptLength={MAX_PROMPT_LENGTH}
        placeholder="Ask Universe"
        tableActions={tableActions}
        variant={variant}
      />
    </Container>
  );
}
