import * as styles from '../../Dropdown.css';

import { UpdateHandler } from '../../../types';

import { Item } from '../../Dropdown.types';

type Options = {
  onUpdate: UpdateHandler;
  search: string;
};

export function buildCustomValue({ onUpdate, search }: Options): Item {
  const handleClick = () => {
    onUpdate('add-custom', [search]);
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
