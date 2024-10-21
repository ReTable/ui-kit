import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx/lite';

import { useFlag } from '@tabula/use-flag';

import * as styles from './Container.css';

import { useContext } from '../Context';
import { Dropdown } from '../Dropdown';
import { Search } from '../Search';
import { Tags } from '../Tags';
import { DropdownController } from '../types';

export function Container(): ReactNode {
  const { emptyPlaceholder, defaultPlaceholder, isDisabled, variant, selected } = useContext();

  const dropdownRef = useRef<DropdownController>(null);

  const isEmpty = selected.size === 0;

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setSearch('');
    }
  }, [isDisabled]);

  const [, { on: showDropdown, off: hideDropdown }] = useFlag(true);

  const handleArrowDown = useCallback(() => {
    dropdownRef.current?.goToNext();
  }, []);

  const handleArrowUp = useCallback(() => {
    dropdownRef.current?.goToPrevious();
  }, []);

  const handleTab = useCallback(() => {
    dropdownRef.current?.selectCurrent();
  }, []);

  return (
    <div
      className={clsx(
        styles.root,
        styles.variants[variant],
        isDisabled && styles.isDisabled,
        isEmpty && styles.isEmpty,
      )}
    >
      {!isEmpty && <Tags />}
      {(!isDisabled || isEmpty) && (
        <Search
          defaultPlaceholder={defaultPlaceholder}
          emptyPlaceholder={emptyPlaceholder}
          isDisabled={isDisabled}
          onArrowDown={handleArrowDown}
          onArrowUp={handleArrowUp}
          onBlur={hideDropdown}
          onFocus={showDropdown}
          onSearch={setSearch}
          onTab={handleTab}
          value={search}
          variant={variant}
        />
      )}
      {!isDisabled && <Dropdown className={styles.dropdown} ref={dropdownRef} search={search} />}
    </div>
  );
}
