import { MouseEventHandler, ReactNode, useCallback } from 'react';

import clsx from 'clsx';

import * as styles from './UiSelector.css';

import { Popup } from '../Popup';
import { Search, useSearch } from '../Search';
import { Props } from '../Selector.types';
import { Trigger } from '../Trigger';
import { useConfig, usePopup, useVisibility } from '../hooks';

export function UiSelector({
  children,
  config: outerConfig,
  defaultItem,
  emptyContent,
  invalid,
  isVisible: outerVisible,
  loading,
  offset,
  onChangeVisible: onChangeOuterVisible,
  onRenderTrigger,
  placeholder,
  readOnly,
  searchClassName,
  showSearchClear,
  showSearchField,
  triggerClassName,
  triggerContainerClassName,
  warning,
}: Props): ReactNode {
  const [searchValue, onChangeSearch, onClearSearch, searchRef] = useSearch();
  const onClickSearch = useCallback<MouseEventHandler<HTMLInputElement>>((event) => {
    // NOTE stop propagation event for prevent closing of popup on input clicks
    event.stopPropagation();
  }, []);

  const { isVisible, onChangeVisible, onTriggerClick, onPopupClick } = useVisibility({
    disabled: readOnly,
    onChangeOuterVisible,
    onClearSearch,
    outerVisible,
  });

  const config = useConfig({ outerConfig, defaultItem, searchValue, showSearchField, loading });

  const { reference, floating, popupStyle } = usePopup({
    isVisible,
    offset,
    onChangeVisible,
  });

  return (
    <>
      <div
        className={clsx(styles.triggerContainer, triggerContainerClassName)}
        onClick={onTriggerClick}
        ref={reference}
      >
        {children != null ? (
          children
        ) : (
          <Trigger
            className={triggerClassName}
            disabled={readOnly}
            invalid={invalid}
            isVisible={isVisible}
            loading={loading}
            onRenderTrigger={onRenderTrigger}
            placeholder={placeholder}
            showSearchField={showSearchField}
            warning={warning}
          />
        )}
        {showSearchField && isVisible && (
          <Search
            autoFocus
            className={clsx(styles.search, searchClassName)}
            forwardedRef={searchRef}
            inputClassName={styles.searchInput}
            onChange={onChangeSearch}
            onClear={onClearSearch}
            onClick={onClickSearch}
            placeholder={placeholder}
            showClearControl={showSearchClear}
            value={searchValue}
          />
        )}
      </div>
      <Popup
        config={config}
        emptyContent={emptyContent}
        isVisible={isVisible}
        onClick={onPopupClick}
        setRef={floating}
        style={popupStyle}
      />
    </>
  );
}
