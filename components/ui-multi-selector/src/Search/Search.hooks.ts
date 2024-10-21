import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';

// region Types

type KeyboardHandler = KeyboardEventHandler<HTMLInputElement>;

type ChangeHandler = ChangeEventHandler<HTMLInputElement>;

// endregion Types

// region Constants

const SPECIAL_KEYS = new Set(['ArrowDown', 'ArrowUp', 'Tab', 'Escape']);

// endregion Constants

type Options = {
  onArrowDown: () => void;
  onArrowUp: () => void;
  onEscape: () => void;
  onSearch: (value: string) => void;
  onTab: () => void;
};

type Result = {
  onChange: ChangeHandler;
  onKeyDown: KeyboardHandler;
};

export function useHandlers({
  onArrowDown,
  onArrowUp,
  onEscape,
  onSearch,
  onTab,
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

      event.preventDefault();

      switch (event.key) {
        case 'ArrowDown': {
          onArrowDown();

          break;
        }
        case 'ArrowUp': {
          onArrowUp();

          break;
        }
        case 'Tab': {
          onTab();

          break;
        }
        case 'Escape': {
          onEscape();

          break;
        }
      }
    },
    [onArrowDown, onArrowUp, onTab],
  );

  return { onChange: handleChange, onKeyDown: handleKeyDown };
}
