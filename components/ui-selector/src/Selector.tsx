import { MouseEventHandler, ReactNode, useCallback } from 'react';

import clsx from 'clsx';
import { SearchInput, useSearchInput } from 'src/components/atoms/SearchInput';

import styles from './Selector.module.scss';

import { SelectorPopup } from './Selector.Popup';
import { SelectorTrigger } from './Selector.Trigger';
import { Props } from './Selector.types';
import { useConfig } from './hooks/useConfig';
import { usePopup } from './hooks/usePopup';
import { useVisibility } from './hooks/useVisibility';

export function Selector({
  children,
  emptyContent,
  config: outerConfig,
  defaultItem,
  loading,
  readOnly,
  invalid,
  warning,
  placeholder,
  isVisible: outerVisible,
  onChangeVisible: onChangeOuterVisible,
  onRenderTrigger,
  offset,
  triggerClassName,
  triggerContainerClassName,
  searchClassName,
  showSearchClear,
  showSearchField,
}: Props): ReactNode {
  const [searchValue, onChangeSearch, onClearSearch, searchRef] = useSearchInput();
  const onClickSearch = useCallback<MouseEventHandler<HTMLInputElement>>((event) => {
    // NOTE stop propagation event for prevent closing of popup on input clicks
    event.stopPropagation();
  }, []);

  const { isVisible, onChangeVisible, onTriggerClick, onPopupClick } = useVisibility({
    disabled: readOnly,
    outerVisible,
    onChangeOuterVisible,
    onClearSearch,
  });

  const config = useConfig({ outerConfig, defaultItem, searchValue, showSearchField, loading });

  const { reference, floating, popupStyle } = usePopup({
    offset,
    isVisible,
    onChangeVisible,
  });

  return (
    <>
      <div
        ref={reference}
        className={clsx(styles.triggerContainer, triggerContainerClassName)}
        onClick={onTriggerClick}
      >
        {children != null ? (
          children
        ) : (
          <SelectorTrigger
            isVisible={isVisible}
            placeholder={placeholder}
            loading={loading}
            onRenderTrigger={onRenderTrigger}
            className={triggerClassName}
            showSearchField={showSearchField}
            disabled={readOnly}
            invalid={invalid}
            warning={warning}
          />
        )}
        {showSearchField && isVisible && (
          <SearchInput
            className={clsx(styles.search, searchClassName)}
            inputClassName={styles.searchInput}
            autoFocus
            forwardedRef={searchRef}
            showClearControl={showSearchClear}
            placeholder={placeholder}
            value={searchValue}
            onChange={onChangeSearch}
            onClear={onClearSearch}
            onClick={onClickSearch}
          />
        )}
      </div>
      <SelectorPopup
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
