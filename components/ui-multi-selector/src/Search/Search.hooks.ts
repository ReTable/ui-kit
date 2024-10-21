import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';

import { CompleteKey } from '../types';

// region Types

type KeyboardHandler = KeyboardEventHandler<HTMLInputElement>;

type ChangeHandler = ChangeEventHandler<HTMLInputElement>;

// endregion Types

// region Constants

const SPECIAL_KEYS = new Set(['ArrowDown', 'ArrowUp', 'Enter', 'Escape', 'Tab']);

// endregion Constants

type Options = {
  completeKey: CompleteKey;
  onArrowDown: () => void;
  onArrowUp: () => void;
  onComplete: () => void;
  onEscape: () => void;
  onSearch: (value: string) => void;
};

type Result = {
  onChange: ChangeHandler;
  onKeyDown: KeyboardHandler;
};

export function useHandlers({
  completeKey,
  onArrowDown,
  onArrowUp,
  onComplete,
  onEscape,
  onSearch,
}: Options): Result {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      onSearch(event.target.value);
    },
    [onSearch],
  );

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (event) => {
      if (!SPECIAL_KEYS.has(event.key)) {
        return;
      }

      if ((event.key === 'Enter' || event.key === 'Tab') && event.key !== completeKey) {
        return;
      }

      event.preventDefault();

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();

          onArrowDown();

          break;
        }
        case 'ArrowUp': {
          event.preventDefault();

          onArrowUp();

          break;
        }
        case 'Enter':
        case 'Tab': {
          onComplete();

          break;
        }
        case 'Escape': {
          onEscape();

          break;
        }
      }
    },
    [completeKey, onArrowDown, onArrowUp, onComplete, onEscape],
  );

  return { onChange: handleChange, onKeyDown: handleKeyDown };
}
