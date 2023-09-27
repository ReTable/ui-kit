import { FC } from 'react';

import { line } from './style.css';

type Props = {
  level: number;
};

export const UiEmpty: FC<Props> = ({ level }) => {
  return <pre className={line.placeholder}>{''.padStart(level * 2)}empty</pre>;
};
