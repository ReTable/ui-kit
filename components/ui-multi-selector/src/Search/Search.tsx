import { ChangeEventHandler, ReactNode, useCallback, useEffect } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Search.css';

import { useContext } from '../Context';

type Props = {
  className?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
};

export function Search({ className, onChange, placeholder, value }: Props): ReactNode {
  const { isDisabled, variant } = useContext();

  useEffect(() => {
    if (isDisabled) {
      onChange('');
    }
  }, [isDisabled, onChange]);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      onChange(event.target.value);
    },
    [onChange],
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
