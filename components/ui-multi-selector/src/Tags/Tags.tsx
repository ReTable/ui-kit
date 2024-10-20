import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './Tags.css';

import { Clear } from '../Clear';
import { useContext } from '../Context';
import { Tag } from '../Tag';

export function Tags(): ReactNode {
  const { isDisabled, options, selected, size } = useContext();

  const tags = options.reduce<ReactNode[]>((nodes, it) => {
    const { icon, label, value } = typeof it === 'string' ? { value: it } : it;

    if (selected.has(value)) {
      nodes.push(
        <Tag className={styles.tag} icon={icon} key={value} label={label} value={value} />,
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
