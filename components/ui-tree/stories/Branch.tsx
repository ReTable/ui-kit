import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { BranchComponentProps } from '~';

import * as styles from './styles.css';

import { Data } from './types';

export const Branch: FC<BranchComponentProps<number, Data>> = ({
  data,
  isExpanded,
  level,
  onToggle,
}) => (
  <div className={styles.item} style={assignInlineVars({ [styles.level]: level.toString() })}>
    <button className={styles.toggle} onClick={onToggle} type="button">
      {isExpanded ? '-' : '+'}
    </button>
    <span>{data.name}</span>
  </div>
);
