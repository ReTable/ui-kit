import * as styles from '../../Dropdown.css';

import { AddHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

type Options = {
  onAdd: AddHandler;
  search: string;
};

export function buildCustomValue({ onAdd, search }: Options): Item {
  const handleClick = () => {
    onAdd([search]);
  };

  return {
    key: 'custom-value',

    label: [
      'Add ',
      <span className={styles.highlight} key="search">
        {search}
      </span>,
    ],

    onSelect: handleClick,
  };
}
