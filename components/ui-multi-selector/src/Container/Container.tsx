import { ReactNode, useState } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Container.css';

import { useContext } from '../Context';
import { Search } from '../Search';
import { Tags } from '../Tags';

export function Container(): ReactNode {
  const { isDisabled, variant, value } = useContext();

  const isEmpty = value.size === 0;

  const [search, setSearch] = useState('');

  return (
    <div className={clsx(styles.root, styles.variants[variant], isDisabled && styles.isDisabled)}>
      {!isEmpty && <Tags />}
      {(!isDisabled || isEmpty) && <Search onSearch={setSearch} value={search} />}
    </div>
  );
}
