import { ReactNode } from 'react';

import clsx from 'clsx';

import { ReactComponent as ClearIcon } from '../assets/clear.svg';

import * as styles from './Search.css';

import { Props } from './Search.types';

export function Search({
  autoFocus,
  className,
  forwardedRef,
  inputClassName,
  onChange,
  onClear,
  onClick,
  placeholder,
  showClearControl = true,
  value,
}: Props): ReactNode {
  return (
    <div className={className}>
      <div className={styles.root}>
        <div className={styles.inputWrapper}>
          <input
            autoFocus={autoFocus}
            className={clsx(styles.input, inputClassName)}
            onChange={onChange}
            onClick={onClick}
            placeholder={placeholder}
            ref={forwardedRef}
            type="text"
            value={value}
          />
        </div>
        {showClearControl && value !== '' && (
          <button className={styles.clear} type="button" onClick={onClear}>
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  Search.displayName = `UiSelector(SearchInput)`;
}
