import { forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Search.css';

import { CompleteKey, SearchHandler } from '../types';

import { useHandlers } from './Search.hooks';

type Props = {
  className?: string;
  completeKey: CompleteKey;
  id: string;
  isDisabled?: boolean;
  onArrowDown: () => void;
  onArrowUp: () => void;
  onBlurByTab: () => void;
  onComplete: () => void;
  onEscape: () => void;
  onFocus: () => void;
  onSearch: SearchHandler;
  placeholder?: string;
  value: string;
};

export const Search = forwardRef<HTMLInputElement, Props>(
  ({ className, id, isDisabled, onFocus, placeholder, value, ...handlers }, ref) => {
    const { onChange, onKeyDown } = useHandlers(handlers);

    return (
      <input
        className={clsx(styles.root, className)}
        disabled={isDisabled}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
        value={value}
      />
    );
  },
);

if (import.meta.env.DEV) {
  Search.displayName = 'Search';
}
