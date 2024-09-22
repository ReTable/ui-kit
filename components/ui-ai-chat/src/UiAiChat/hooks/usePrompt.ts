import { RefObject, useCallback, useState } from 'react';

import { PromptInputController, Request } from '../../types';

type Options = {
  conversation: Request[];

  onSend: (prompt: string) => void;

  promptInputRef: RefObject<PromptInputController>;
};

type Result = {
  onSend: () => void;

  isPending: boolean;
  isSendable: boolean;

  prompt: string;
  onChangePrompt: (prompt: string) => void;

  onSuggest: (suggestion: string) => void;
};

export function usePrompt({ conversation, promptInputRef, onSend }: Options): Result {
  const [prompt, setPrompt] = useState('');

  const isPending = conversation.some((it) => it.id == null);
  const isSendable = !isPending && prompt.trim().length > 0;

  const handleSend = useCallback(() => {
    if (isPending || !isSendable) {
      return;
    }

    onSend(prompt);

    setPrompt('');

    promptInputRef.current?.focus();
  }, [isPending, isSendable, onSend, prompt, promptInputRef]);

  const handleSuggest = useCallback((suggestion: string) => {
    setPrompt(suggestion);

    promptInputRef.current?.focus();
  }, []);

  return {
    onSend: handleSend,

    isPending,
    isSendable,

    prompt,
    onChangePrompt: setPrompt,

    onSuggest: handleSuggest,
  };
}
