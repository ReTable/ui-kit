import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';

import { CompleteKey } from '../types';

// region Types

type KeyboardHandler = KeyboardEventHandler<HTMLInputElement>;

type ChangeHandler = ChangeEventHandler<HTMLInputElement>;

// endregion Types

type Options = {
  completeKey: CompleteKey;
  onArrowDown: () => void;
  onArrowUp: () => void;
  onBlurByTab: () => void;
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
  onBlurByTab,
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

  // NOTE: Handle special keys: arrow navigation, blur or completion.
  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (event) => {
      // NOTE: We can handle the `Tab` in two ways depends on the `completeKey` option:
      //         - if `completeKey` is `Tab`, then we activate completion and cancel default behavior;
      //         - otherwise, we don't block default behavior, but close the dropdown (we close dropdown on focus loose
      //           ONLY when move to the previous/next taggable element, not by click on dropdown/tags/etc.).
      if (event.key === 'Tab') {
        if (completeKey === 'Tab') {
          event.preventDefault();

          onComplete();
        } else {
          onBlurByTab();
        }

        return;
      }

      // NOTE: Handle then `Enter` key only if `completeKey` is `Enter`.
      if (event.key === 'Enter') {
        if (completeKey === 'Enter') {
          event.preventDefault();

          onComplete();
        }

        return;
      }

      // NOTE: Skip any non-special keys.
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Escape') {
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
        case 'Escape': {
          onEscape();

          break;
        }
      }
    },
    [completeKey, onArrowDown, onArrowUp, onBlurByTab, onComplete, onEscape],
  );

  return { onChange: handleChange, onKeyDown: handleKeyDown };
}
