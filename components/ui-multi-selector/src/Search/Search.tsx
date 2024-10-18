import { ChangeEventHandler, ReactNode, useCallback, useEffect } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Search.css';

import { useContext } from '../Context';

type Props = {
  className?: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  value: string;
};

export function Search({ className, onSearch, placeholder, value }: Props): ReactNode {
  const { isDisabled, variant } = useContext();

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

  return (
    <input
      className={clsx(styles.root, styles.variants[variant], className)}
      disabled={isDisabled}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
