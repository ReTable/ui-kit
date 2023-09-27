import { FC } from 'react';

import { line } from './style.css';

import { CloseLineType, LineType } from '../lines';

import { useLevel } from './useLevel';

type Props = {
  level: number;
  type: CloseLineType;
};

export const UiClose: FC<Props> = ({ level, type }) => {
  const style = useLevel(level);

  return (
    <div className={line.boundary} style={style}>
      {type === LineType.ArrayClose ? '[' : ']'}
    </div>
  );
};
