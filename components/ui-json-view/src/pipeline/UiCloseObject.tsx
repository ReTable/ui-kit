import { FC } from 'react';

import { root } from './UiCloseArray.css';

type Props = {
  level: number;
};

export const UiCloseObject: FC<Props> = ({ level }) => {
  return (
    <pre className={root}>
      {''.padStart(level * 2)}
      {'}'}
    </pre>
  );
};