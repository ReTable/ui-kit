import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { useContext } from '../Context';
import { Tag } from '../Tag';
import { Option } from '../types';

type Props = {
  options: Option[];
};

export function Tags({ options }: Props): ReactNode {
  const { isDisabled, size } = useContext();

  const tags = options.map((it) => (
    <Tag className={styles.tag} icon={it.icon} id={it.id} key={it.id} label={it.label} />
  ));

  return (
    <div className={clsx(styles.root, styles.sizes[size], isDisabled && styles.isDisabled)}>
      {!isDisabled && tags.length > 0 && <Clear className={styles.clear} />}

      {tags}
    </div>
  );
}
