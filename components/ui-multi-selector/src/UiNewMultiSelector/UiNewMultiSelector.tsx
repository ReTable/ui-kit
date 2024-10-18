import { ReactNode, useCallback, useMemo, useState } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiNewMultiSelector.css';

import { Provider } from '../Context';
import { Search } from '../Search';
import { Tags } from '../Tags';
import { Option, Size, Variant } from '../types';

export type Props = {
  empty?: string;
  isDisabled?: boolean;
  onChange: (value: Set<string>) => void;
  options: Option[];
  placeholder?: string;
  size: Size;
  value: Set<string>;
  variant: Variant;
};

export function UiNewMultiSelector({
  empty,
  isDisabled = false,
  options,
  placeholder,
  size,
  value,
  variant,
  onChange,
}: Props): ReactNode {
  const selected = useMemo(() => options.filter((it) => value.has(it.id)), [options, value]);

  const [search, setSearch] = useState('');

  const searchPlaceholder = useMemo(() => {
    if (isDisabled) {
      const isEmpty = selected.length === 0;

      return isEmpty ? empty : '';
    }

    return placeholder;
  }, [empty, isDisabled, placeholder, selected.length]);

  const handleRemove = useCallback(
    (id: string) => {
      const next = new Set(value);

      next.delete(id);

      onChange(next);
    },
    [onChange, value],
  );

  const handleClear = useCallback(() => {
    onChange(new Set());
  }, [onChange]);

  const isEmpty = selected.length === 0;

  return (
    <Provider
      isDisabled={isDisabled}
      onClear={handleClear}
      onRemove={handleRemove}
      size={size}
      variant={variant}
    >
      <div
        className={clsx(
          styles.root,
          styles.sizes[size],
          styles.variants[variant],
          isDisabled && styles.isDisabled,
        )}
      >
        {!isEmpty && <Tags options={selected} />}
        {(!isDisabled || isEmpty) && (
          <Search onChange={setSearch} placeholder={searchPlaceholder} value={search} />
        )}
      </div>
    </Provider>
  );
}

if (import.meta.env.DEV) {
  UiNewMultiSelector.displayName = 'ui-multi-selector(UiNewMultiSelector)';
}
