import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { BranchComponentProps } from '~';

import * as styles from '../shared.css';

import { Leaf } from '../types';

export const Branch: FC<BranchComponentProps<Leaf>> = ({ isExpanded, level, node, onToggle }) => (
  <div className={styles.item} style={assignInlineVars({ [styles.level]: level.toString() })}>
    <button className={styles.toggle} onClick={onToggle} type="button">
      {isExpanded ? '-' : '+'}
    </button>
    <span>{node.name}</span>
  </div>
);
