import { forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Search.css';

import { SearchHandler } from '../types';

import { useHandlers } from './Search.hooks';

type Props = {
  className?: string;
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onArrowDown: () => void;
  onArrowUp: () => void;
  onBlur: () => void;
  onEscape: () => void;
  onFocus: () => void;
  onSearch: SearchHandler;
  onTab: () => void;
  value: string;
};

export const Search = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      defaultPlaceholder,
      emptyPlaceholder,
      isDisabled,
      onBlur,
      onFocus,
      value,
      ...handlers
    },
    ref,
  ) => {
    const { onChange, onKeyDown } = useHandlers(handlers);

    return (
      <input
        className={clsx(styles.root, className)}
        disabled={isDisabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={isDisabled ? emptyPlaceholder : defaultPlaceholder}
        ref={ref}
        value={value}
      />
    );
  },
);

if (import.meta.env.DEV) {
  Search.displayName = 'Search';
}
