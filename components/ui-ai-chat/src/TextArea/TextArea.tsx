import {
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
} from 'react';

import clsx from 'clsx';

import * as styles from './TextArea.css';

export type Props = {
  autoFocus?: boolean;
  className?: string;
  maxLength?: number;
  onChange?: (value: string) => void;
  onEnterPressed?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  value: string;
};

export function TextArea({
  autoFocus,
  className,
  maxLength,
  onChange,
  onEnterPressed,
  placeholder,
  rows,
  value,
}: Props): ReactNode {
  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLTextAreaElement>>(
    (event) => {
      if (event.key === 'Enter') {
        onEnterPressed?.(event);
      }
    },
    [onEnterPressed],
  );

  const handleChange = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (event) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <textarea
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      className={clsx(styles.root, className, 'input-root')}
      maxLength={maxLength}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      rows={rows}
      value={value}
    />
  );
}

if (import.meta.env.DEV) {
  TextArea.displayName = 'ui-ai-chat(TextArea)';
}
