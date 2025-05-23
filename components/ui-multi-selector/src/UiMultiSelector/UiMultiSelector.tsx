import { ReactNode, useMemo } from 'react';

import { FloatingPortal } from '@floating-ui/react';
import { clsx } from 'clsx';

import { ReactComponent as ChevronIcon } from './assets/chevron.svg';

import * as shared from '../shared.css';
import * as styles from './UiMultiSelector.css';

import { Dropdown } from '../Dropdown';
import { Search } from '../Search';
import { Tags } from '../Tags';
import { BatchAction, ChangeHandler, CompleteKey, Option, Selected, Size, Variant } from '../types';

import { useDropdown, useSearch, useTagRenderer, useUpdateHandler } from './hooks';

export type Props = {
  addFound?: BatchAction;
  allowsCustomValue?: boolean;
  className?: string;
  completeKey?: CompleteKey;
  defaultPlaceholder?: string;
  disabledPlaceholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isWarning?: boolean;
  maxSelectedLimit?: number;
  onChange: ChangeHandler;
  options: Option[];
  selectAll?: BatchAction;
  selectFound?: BatchAction;
  selected: Selected;
  size: Size;
  variant: Variant;
  withDropdownChevron?: boolean;
};

export function UiMultiSelector({
  addFound = 'Add {search}',
  allowsCustomValue,
  className,
  completeKey = 'Enter',
  defaultPlaceholder,
  disabledPlaceholder,
  isDisabled,
  isInvalid,
  isWarning,
  maxSelectedLimit,
  onChange,
  options,
  selectAll = 'Select all',
  selectFound = 'Select all containing {search}',
  selected,
  size,
  variant,
  withDropdownChevron,
}: Props): ReactNode {
  const { onEscape, onSearch, searchId, searchRef, search } = useSearch(isDisabled);

  const onUpdate = useUpdateHandler({
    maxSelectedLimit,
    onChange,
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
    onHideDropdown,
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

  const isEmpty = selected.size === 0;
  const isFilled =
    (maxSelectedLimit != null && selected.size >= maxSelectedLimit) ||
    (!allowsCustomValue && options.length > 0 && selected.size === options.length);

  const isPopupVisible = !isDisabled && !isFilled;
  const isSearchVisible = isPopupVisible || (isDisabled && isEmpty);

  const searchPlaceholder = useMemo(() => {
    if (isDisabled) {
      return disabledPlaceholder;
    }

    if (!isEmpty) {
      return;
    }

    return defaultPlaceholder;
  }, [defaultPlaceholder, disabledPlaceholder, isDisabled, isEmpty]);

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

      {/* NOTE: Allows to focus on search input when click on space between tags/clear button. */}
      {isSearchVisible && (
        <label className={styles.label} aria-label={searchPlaceholder} htmlFor={searchId} />
      )}
      <Tags
        allowsCustomValue={allowsCustomValue}
        isDisabled={isDisabled}
        onUpdate={onUpdate}
        options={options}
        renderTag={renderTag}
        selected={selected}
      >
        {isSearchVisible && (
          <Search
            className={clsx(styles.search, search === '' && styles.state.isEmptySearch)}
            completeKey={completeKey}
            id={searchId}
            isDisabled={isDisabled}
            onArrowDown={onGoNext}
            onArrowUp={onGoPrevious}
            onBlurByTab={onHideDropdown}
            onComplete={onSelectCurrent}
            onEscape={onEscape}
            onFocus={onShowDropdown}
            onSearch={onSearch}
            placeholder={searchPlaceholder}
            ref={searchRef}
            value={search}
          />
        )}
      </Tags>
      {isPopupVisible && (
        <FloatingPortal preserveTabOrder={false}>
          <div ref={floatingRef} style={style} {...getFloatingProps()}>
            {isOpen && (
              <Dropdown
                addFound={addFound}
                allowsCustomValue={allowsCustomValue}
                completeKey={completeKey}
                maxSelectedLimit={maxSelectedLimit}
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
