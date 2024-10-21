import { ReactNode } from 'react';

import * as styles from '../../Dropdown.css';

import { searchPlaceholder } from '../../../const';

import { Part } from '../../Dropdown.types';

import { match } from './match';

/* eslint-disable react/no-array-index-key */
export function renderFound(label: string, search: string): ReactNode {
  const [isMatches, parts]: [boolean, Part[]] = match(label, searchPlaceholder);

  if (!isMatches) {
    return label;
  }

  // NOTE: Replace search input placeholder and highlight it if placeholder is available.
  return parts.map((it, index) =>
    it.isMatches ? (
      <span key={index} className={styles.search}>
        {search}
      </span>
    ) : (
      it.substring
    ),
  );
}
/* eslint-enable */
