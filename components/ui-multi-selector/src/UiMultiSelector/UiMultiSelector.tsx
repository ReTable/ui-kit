import { ReactNode } from 'react';

import { clsx } from 'clsx';

import * as shared from '../shared.css';
import * as styles from './UiMultiSelector.css';

import { Dropdown } from '../Dropdown';
import { Search } from '../Search';
import { Tags } from '../Tags';
import { ChangeHandler, Option, SelectAll, SelectFound, Selected, Size, Variant } from '../types';

import { useDropdown, useModifiers, useSearch, useTagRenderer } from './hooks';

export type Props = {
  allowsCustomValue?: boolean;
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  onChange: ChangeHandler;
  options: Option[];
  selectAll?: SelectAll;
  selectFound?: SelectFound;
  selected: Selected;
  size: Size;
  variant: Variant;
};

export function UiMultiSelector({
  allowsCustomValue,
  defaultPlaceholder,
  emptyPlaceholder,
  isDisabled,
  onChange,
  options,
  selectAll = 'Select all',
  selectFound = 'Select all containing {search}',
  selected,
  size,
  variant,
}: Props): ReactNode {
  const isEmpty = selected.size === 0;

  const { onAdd, onRemove, onClear } = useModifiers({ onChange, selected });

  const [search, onSearch] = useSearch(isDisabled);

  const [dropdownRef, { onShowDropdown, onHideDropdown, onGoNext, onGoPrevious, onSelectCurrent }] =
    useDropdown();

  const renderTag = useTagRenderer({
    isDisabled,
    onRemove,
    size,
    variant,
  });

  return (
    <div
      className={clsx(
        styles.root,
        shared.variants[variant],
        shared.sizes[size],
        isDisabled && styles.isDisabled,
        isEmpty && styles.isEmpty,
      )}
    >
      {!isEmpty && (
        <Tags
          allowsCustomValue={allowsCustomValue}
          isDisabled={isDisabled}
          onClear={onClear}
          options={options}
          renderTag={renderTag}
          selected={selected}
        />
      )}
      {(!isDisabled || isEmpty) && (
        <Search
          defaultPlaceholder={defaultPlaceholder}
          emptyPlaceholder={emptyPlaceholder}
          isDisabled={isDisabled}
          onArrowDown={onGoNext}
          onArrowUp={onGoPrevious}
          onBlur={onHideDropdown}
          onFocus={onShowDropdown}
          onSearch={onSearch}
          onTab={onSelectCurrent}
          value={search}
        />
      )}
      {!isDisabled && (
        <Dropdown
          allowsCustomValue={allowsCustomValue}
          className={styles.dropdown}
          onAdd={onAdd}
          options={options}
          ref={dropdownRef}
          search={search}
          selectAll={selectAll}
          selectFound={selectFound}
          selected={selected}
        />
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
