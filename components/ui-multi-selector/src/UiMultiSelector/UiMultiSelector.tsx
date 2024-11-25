import { ReactNode } from 'react';

import { FloatingPortal } from '@floating-ui/react';
import { clsx } from 'clsx';

import { ReactComponent as ChevronIcon } from './assets/chevron.svg';

import * as shared from '../shared.css';
import * as styles from './UiMultiSelector.css';

import { Dropdown } from '../Dropdown';
import { Search } from '../Search';
import { Tags } from '../Tags';
import {
  ChangeHandler,
  CompleteKey,
  Option,
  SelectAll,
  SelectFound,
  Selected,
  Size,
  Variant,
} from '../types';

import { useDropdown, useSearch, useTagRenderer, useUpdateHandler } from './hooks';

export type Props = {
  allowsCustomValue?: boolean;
  className?: string;
  completeKey?: CompleteKey;
  defaultPlaceholder?: string;
  emptyPlaceholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isWarning?: boolean;
  onChange: ChangeHandler;
  options: Option[];
  selectAll?: SelectAll;
  selectFound?: SelectFound;
  selected: Selected;
  size: Size;
  variant: Variant;
  withDropdownChevron?: boolean;
};

export function UiMultiSelector({
  allowsCustomValue,
  className,
  completeKey = 'Enter',
  defaultPlaceholder,
  emptyPlaceholder,
  isDisabled,
  isInvalid,
  isWarning,
  onChange,
  options,
  selectAll = 'Select all',
  selectFound = 'Select all containing {search}',
  selected,
  size,
  variant,
  withDropdownChevron,
}: Props): ReactNode {
  const isEmpty = selected.size === 0;

  const { onEscape, onSearch, searchId, searchRef, search } = useSearch(isDisabled);

  const onUpdate = useUpdateHandler({
    onChange,
    searchRef,
    onSearch,
    selected,
  });

  const {
    dropdownRef,
    floatingRef,
    isOpen,
    onGoNext,
    onGoPrevious,
    onSelectCurrent,
    onShowDropdown,
    referenceRef,
    style,
    getFloatingProps,
    getReferenceProps,
  } = useDropdown();

  const renderTag = useTagRenderer({
    isDisabled,
    onUpdate,
    size,
    variant,
  });

  return (
    <div
      className={clsx(
        styles.root,
        shared.variants[variant],
        shared.sizes[size],
        withDropdownChevron && shared.hasChevron,
        isDisabled && styles.state.isDisabled,
        isEmpty && styles.state.isEmpty,
        isInvalid && styles.state.isInvalid,
        isWarning && styles.state.isWarning,
        className,
      )}
      ref={referenceRef}
      {...getReferenceProps()}
    >
      {withDropdownChevron && !isDisabled && <ChevronIcon className={styles.chevron} />}
      {!isEmpty && (
        <Tags
          allowsCustomValue={allowsCustomValue}
          isDisabled={isDisabled}
          onUpdate={onUpdate}
          options={options}
          renderTag={renderTag}
          searchId={searchId}
          selected={selected}
        />
      )}
      {(!isDisabled || isEmpty) && (
        <Search
          completeKey={completeKey}
          defaultPlaceholder={defaultPlaceholder}
          emptyPlaceholder={emptyPlaceholder}
          id={searchId}
          isDisabled={isDisabled}
          onArrowDown={onGoNext}
          onArrowUp={onGoPrevious}
          onComplete={onSelectCurrent}
          onEscape={onEscape}
          onFocus={onShowDropdown}
          onSearch={onSearch}
          ref={searchRef}
          value={search}
        />
      )}
      {!isDisabled && (
        <FloatingPortal preserveTabOrder={false}>
          <div ref={floatingRef} style={style} {...getFloatingProps()}>
            {isOpen && (
              <Dropdown
                allowsCustomValue={allowsCustomValue}
                completeKey={completeKey}
                onUpdate={onUpdate}
                options={options}
                ref={dropdownRef}
                search={search}
                selectAll={selectAll}
                selectFound={selectFound}
                selected={selected}
              />
            )}
          </div>
        </FloatingPortal>
      )}
    </div>
  );
}

if (import.meta.env.DEV) {
  UiMultiSelector.displayName = 'ui-multi-selector(UiMultiSelector)';
}
