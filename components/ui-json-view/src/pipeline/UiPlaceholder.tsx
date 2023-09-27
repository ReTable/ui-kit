import { FC } from 'react';

import { line } from './style.css';

import { LineType, PlaceholderLineType } from '../lines';

import { useLevel } from './useLevel';

type Props = {
  level: number;
  type: PlaceholderLineType;
};

const label: Record<PlaceholderLineType, string> = {
  [LineType.Empty]: 'empty',
};

export const UiPlaceholder: FC<Props> = ({ level, type }) => {
  const style = useLevel(level);

  return (
    <div className={line.placeholder} style={style}>
      {label[type]}
    </div>
  );
};
