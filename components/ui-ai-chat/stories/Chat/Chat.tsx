import { ReactNode } from 'react';

import { TableAction, UiAiChat } from '~';

import { Container, Variant } from '../Container';
import { MAX_PROMPT_LENGTH } from '../const';

import { useChat } from './Chat.hooks';

type Props = {
  context?: string;
  onClearContext?: () => void;
  suggestions?: string[];
  tableActions: TableAction[];
  variant: Variant;
};

export function Chat({
  context,
  onClearContext,
  suggestions,
  tableActions,
  variant,
}: Props): ReactNode {
  const chat = useChat();

  return (
    <Container variant={variant}>
      <UiAiChat
        {...chat}
        context={context}
        maxPromptLength={MAX_PROMPT_LENGTH}
        onClearContext={onClearContext}
        placeholder="Ask Universe"
        suggestions={suggestions}
        tableActions={tableActions}
      />
    </Container>
  );
}
