import { ReactNode } from 'react';

import * as styles from '../Dropdown.css';

import { Part } from '../Dropdown.types';

/* eslint-disable react/no-array-index-key */
export function renderParts(parts: Part[]): ReactNode {
  if (parts.length === 0 && !parts[0].isMatches) {
    return parts[0].substring;
  }

  return parts.map((it, index) =>
    it.isMatches ? (
      <span className={styles.highlight} key={index}>
        {it.substring}
      </span>
    ) : (
      it.substring
    ),
  );
}
/* eslint-enable */
