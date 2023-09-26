import { FC } from 'react';

import { root } from './UiEmpty.css';

type Props = {
  level: number;
};

export const UiEmpty: FC<Props> = ({ level }) => {
  return <pre className={root}>{''.padStart(level * 2)}empty</pre>;
};
