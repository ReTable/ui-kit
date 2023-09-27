import { FC } from 'react';

import { line } from './style.css';

type Props = {
  level: number;
};

export const UiCloseObject: FC<Props> = ({ level }) => {
  return (
    <pre className={line.boundary}>
      {''.padStart(level * 2)}
      {'}'}
    </pre>
  );
};
