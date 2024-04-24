import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { LeafComponentProps } from '~';

import * as styles from './styles.css';

import { Leaf as LeafType } from './types';

export const Leaf: FC<LeafComponentProps<LeafType>> = ({ level, node }) => (
  <div className={styles.item} style={assignInlineVars({ [styles.level]: level.toString() })}>
    {node.name}
  </div>
);
