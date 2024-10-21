import { forwardRef } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Search.css';

import { SearchController, SearchHandler, Variant } from '../types';

import { useController, useHandlers } from './hooks';

type Props = {
  className?: string;
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onArrowDown: () => void;
  onArrowUp: () => void;
  onBlur: () => void;
  onFocus: () => void;
  onSearch: SearchHandler;
  onTab: () => void;
  value: string;
  variant: Variant;
};

export const Search = forwardRef<SearchController, Props>(
  (
    {
      className,
      defaultPlaceholder,
      emptyPlaceholder,
      isDisabled,
      onBlur,
      onFocus,
      value,
      variant,
      ...handlers
    },
    ref,
  ) => {
    const inputRef = useController(ref);

    const { onChange, onKeyDown } = useHandlers(handlers);

    return (
      <input
        className={clsx(styles.root, styles.variants[variant], className)}
        disabled={isDisabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={isDisabled ? emptyPlaceholder : defaultPlaceholder}
        ref={inputRef}
        value={value}
      />
    );
  },
);

if (import.meta.env.DEV) {
  Search.displayName = 'Search';
}
