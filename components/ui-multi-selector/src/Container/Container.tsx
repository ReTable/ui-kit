import { ReactNode, useState } from 'react';

import { clsx } from 'clsx/lite';

import { useFlag } from '@tabula/use-flag';

import * as styles from './Container.css';

import { useContext } from '../Context';
import { Dropdown } from '../Dropdown';
import { Search } from '../Search';
import { Tags } from '../Tags';

export function Container(): ReactNode {
  const { isDisabled, variant, value } = useContext();

  const isEmpty = value.size === 0;

  const [search, setSearch] = useState('');

  const [, { on: showDropdown, off: hideDropdown }] = useFlag(true);

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
        <Search onBlur={hideDropdown} onFocus={showDropdown} onSearch={setSearch} value={search} />
      )}
      {!isDisabled && <Dropdown className={styles.dropdown} search={search} />}
    </div>
  );
}
