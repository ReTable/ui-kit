import { RefObject, useCallback, useRef, useState } from 'react';

import { randNumber, randParagraph, randWord } from '@ngneat/falso';

import { Controller, Request, UiAiChatProps } from '~';

async function delay(): Promise<void> {
  return new Promise((resolve) => window.setTimeout(resolve, 3000));
}

function answerWithTable(noRows = false): string {
  const colsCount = randNumber({ min: 1, max: 10 });
  const rowsCount = noRows ? 0 : randNumber({ min: 5, max: 20 });

  const buffer: string[] = [`${randParagraph()}\n\n`];

  buffer.push('|');

  for (let c = 0; c < colsCount; c += 1) {
    buffer.push(` ${randWord()} |`);
  }

  buffer.push('\n|');

  for (let c = 0; c < colsCount; c += 1) {
    buffer.push(` ----- |`);
  }

  buffer.push('\n');

  for (let r = 0; r < rowsCount; r += 1) {
    buffer.push('| ');

    for (let c = 0; c < colsCount; c += 1) {
      buffer.push(` ${randWord()} |`);
    }

    buffer.push('\n');
  }

  return buffer.join('');
}

function answerWithPlainText(): string {
  const count = randNumber({ min: 1, max: 5 });

  const paragraphs: string[] = [];

  for (let i = 0; i < count; i += 1) {
    paragraphs.push(randParagraph());
  }

  return paragraphs.join('\n\n');
}

function answerFor(prompt: string): string {
  if (prompt.includes('table with no rows')) {
    return answerWithTable(true);
  }

  return prompt.includes('table') ? answerWithTable() : answerWithPlainText();
}

const counter = {
  id: 0,

  next(): number {
    const result = this.id;

    this.id += 1;

    return result;
  },
};

type State = {
  prompt: string;

  isPending: boolean;

  conversation: Request[];
};

export function useChat(): UiAiChatProps & { ref: RefObject<Controller> } {
  const controllerRef = useRef<Controller>(null);

  const [state, setState] = useState<State>({
    prompt: '',

    isPending: false,

    conversation: [],
  });

  const handleChangePrompt = useCallback((prompt: string) => {
    setState((current) => ({ ...current, prompt }));
  }, []);

  const handleSend = useCallback(() => {
    setState((current) => ({
      prompt: '',

      isPending: true,

      conversation: [...current.conversation, { prompt: current.prompt }],
    }));

    controllerRef.current?.scrollToBottom();

    void delay().then(() => {
      setState((current) => {
        const conversation = current.conversation.map((it) => {
          if (it.id != null) {
            return it;
          }

          const id = counter.next();
          const answer = answerFor(it.prompt);

          return { id, prompt: it.prompt, answer };
        });

        return { ...current, isPending: false, conversation };
      });
    });
  }, []);

  const handleEdit = useCallback((id: number, prompt: string) => {
    setState((current) => {
      const conversation = current.conversation.map((it) => {
        if (it.id !== id) {
          return it;
        }

        return { prompt };
      });

      return { ...current, isPending: true, conversation };
    });

    void delay().then(() => {
      setState((current) => {
        const conversation = current.conversation.map((it) => {
          if (it.id != null) {
            return it;
          }

          const answer = answerFor(it.prompt);

          return { id, prompt: it.prompt, answer };
        });

        return { ...current, isPending: false, conversation };
      });
    });
  }, []);

  return {
    conversation: state.conversation,

    prompt: state.prompt,
    onChangePrompt: handleChangePrompt,

    onEdit: handleEdit,
    onSend: handleSend,

    tableActions: [],

    ref: controllerRef,
  };
}
