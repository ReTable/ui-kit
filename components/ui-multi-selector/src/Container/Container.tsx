import { ReactNode, useCallback, useEffect, useState } from 'react';

import { clsx } from 'clsx/lite';

import { useFlag } from '@tabula/use-flag';

import * as styles from './Container.css';

import { useContext } from '../Context';
import { Dropdown } from '../Dropdown';
import { Search } from '../Search';
import { Tags } from '../Tags';

export function Container(): ReactNode {
  const { emptyPlaceholder, defaultPlaceholder, isDisabled, variant, selected } = useContext();

  const isEmpty = selected.size === 0;

  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isDisabled) {
      setSearch('');
    }
  }, [isDisabled]);

  const [isDropdownVisible, { on: showDropdown, off: hideDropdown }] = useFlag(false);

  const handleArrowDown = useCallback(() => {
    console.log('arrow down');
  }, []);

  const handleArrowUp = useCallback(() => {
    console.log('arrow up');
  }, []);

  const handleTab = useCallback(() => {
    console.log('tab');
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
      {!isDisabled && isDropdownVisible && <Dropdown className={styles.dropdown} search={search} />}
    </div>
  );
}
