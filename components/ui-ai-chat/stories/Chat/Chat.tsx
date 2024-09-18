import { ReactNode } from 'react';

import { TableAction, UiAiChat, Variant } from '~';

import { Container } from '../Container';

import { Features } from './Chat.types';
import { useChat } from './hooks';

type Props = Features & {
  tableActions: TableAction[];
  variant: Variant;
};

export function Chat({ tableActions, variant, ...features }: Props): ReactNode {
  const chat = useChat(features);

  return (
    <Container variant={variant}>
      <UiAiChat
        {...chat}
        title={chat.mode.name}
        placeholder="Ask Universe"
        tableActions={tableActions}
        variant={variant}
      />
    </Container>
  );
}
