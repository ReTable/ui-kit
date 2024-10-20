import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { useContext } from '../Context';
import { Tag } from '../Tag';

export function Tags(): ReactNode {
  const { isDisabled, options, size, value } = useContext();

  const tags = options.reduce<ReactNode[]>((nodes, it) => {
    if (value.has(it.value)) {
      nodes.push(
        <Tag
          className={styles.tag}
          icon={it.icon}
          key={it.value}
          label={it.label}
          value={it.value}
        />,
      );
    }

    return nodes;
  }, []);

  return (
    <div className={clsx(styles.root, styles.sizes[size], isDisabled && styles.isDisabled)}>
      {!isDisabled && tags.length > 0 && <Clear className={styles.clear} />}

      {tags}
    </div>
  );
}
