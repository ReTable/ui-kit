import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { root, vars } from './Duration.css';

type Props = {
  duration: string;
};

export const Duration: FC<Props> = ({ duration }) => (
  <div className={root} style={assignInlineVars(vars, { duration })} />
);
