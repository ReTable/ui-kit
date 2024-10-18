import { ReactNode, useMemo } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Container.css';

import { useContext } from '../Context';
import { Search } from '../Search';
import { Tags } from '../Tags';
import { Option } from '../types';

import { useSearch } from './Container.hooks';

export type Props = {
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  options: Option[];
  value: Set<string>;
};

export function Container({
  defaultPlaceholder,
  emptyPlaceholder,
  options,
  value,
}: Props): ReactNode {
  const { isDisabled, variant } = useContext();

  const selected = useMemo(() => options.filter((it) => value.has(it.id)), [options, value]);

  const isEmpty = value.size === 0;

  const {
    isVisible: isSearchVisible,
    search,
    onSearch,
    placeholder,
  } = useSearch({
    defaultPlaceholder,
    emptyPlaceholder,
    isDisabled,
    isEmpty,
  });

  return (
    <div className={clsx(styles.root, styles.variants[variant], isDisabled && styles.isDisabled)}>
      {!isEmpty && <Tags options={selected} />}
      {isSearchVisible && <Search onSearch={onSearch} placeholder={placeholder} value={search} />}
    </div>
  );
}
