import { ReactNode, useCallback, useMemo } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiNewMultiSelector.css';

import { Clear } from '../Clear';
import { OptionTag } from '../OptionTag';
import { Option, Size, Variant } from '../types';

import { useSearch } from './hooks';

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

  const { search, onSearch, searchPlaceholder } = useSearch({
    empty,
    isDisabled,
    placeholder,
    value,
  });

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

  return (
    <div
      className={clsx(
        styles.root,
        styles.sizes[size],
        styles.variants[variant],
        isDisabled && styles.isDisabled,
      )}
    >
      <div className={styles.tags}>
        {selected.map((it) => (
          <OptionTag
            isDisabled={isDisabled}
            onRemove={handleRemove}
            option={it}
            size={size}
            variant={variant}
          />
        ))}
        <Clear className={styles.clear} onClick={handleClear} />
      </div>
      <input
        className={styles.search}
        disabled={isDisabled}
        onChange={onSearch}
        placeholder={searchPlaceholder}
        value={search}
      />
    </div>
  );
}

if (import.meta.env.DEV) {
  UiNewMultiSelector.displayName = 'ui-multi-selector(UiNewMultiSelector)';
}
