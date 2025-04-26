import { ReactNode } from 'react';

import * as styles from '../../Dropdown.css';

import { searchPlaceholder } from '../../../const';

import { Part } from '../../Dropdown.types';

import { match } from './match';

/* eslint-disable react/no-array-index-key */
export function renderFound(label: string, values: string[]): ReactNode {
  const [isMatches, parts]: [boolean, Part[]] = match(label, searchPlaceholder);

  if (!isMatches) {
    return label;
  }

  // NOTE: Replace search input placeholder and highlight it if placeholder is available.
  return parts.map((it, index) => {
    if (!it.isMatches) {
      return it.substring;
    }

    const found = values.reduce<ReactNode[]>((acc, value, valueIndex) => {
      if (acc.length > 0) {
        acc.push(<span key={`separator-${valueIndex}`}>,&nbsp;</span>);
      }

      acc.push(
        <span key={`value-${valueIndex}`} className={styles.search}>
          {value}
        </span>,
      );
      return acc;
    }, []);
    return <span key={index}>{found}</span>;
  });
}
/* eslint-enable */
