import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { LeafComponentProps } from '~';

import * as styles from './styles.css';

import { Data } from './types';

export const Leaf: FC<LeafComponentProps<number, Data>> = ({ data, level }) => (
  <div className={styles.item} style={assignInlineVars({ [styles.level]: level.toString() })}>
    {data.name}
  </div>
);
