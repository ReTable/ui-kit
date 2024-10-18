import { ChangeEventHandler, ReactNode, useCallback, useEffect, useMemo } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Search.css';

import { useContext } from '../Context';

type Props = {
  className?: string;
  onBlur: () => void;
  onFocus: () => void;
  onSearch: (value: string) => void;
  value: string;
};

export function Search({ className, onBlur, onFocus, onSearch, value }: Props): ReactNode {
  const {
    emptyPlaceholder,
    defaultPlaceholder,
    isDisabled,
    value: selected,
    variant,
  } = useContext();

  useEffect(() => {
    if (isDisabled) {
      onSearch('');
    }
  }, [isDisabled, onSearch]);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      onSearch(event.target.value);
    },
    [onSearch],
  );

  const placeholder = useMemo(() => {
    if (isDisabled) {
      return selected.size === 0 ? emptyPlaceholder : '';
    }

    return defaultPlaceholder;
  }, [defaultPlaceholder, emptyPlaceholder, isDisabled, selected.size]);

  return (
    <input
      className={clsx(styles.root, styles.variants[variant], className)}
      disabled={isDisabled}
      onBlur={onBlur}
      onChange={handleChange}
      onFocus={onFocus}
      placeholder={placeholder}
      value={value}
    />
  );
}
