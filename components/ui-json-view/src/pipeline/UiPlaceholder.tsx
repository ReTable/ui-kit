import { FC } from 'react';

import { line } from '../style.css';

import { useLevel } from './useLevel';

type Props = {
  level: number;

  placeholder: string;
};

export const UiPlaceholder: FC<Props> = ({ level, placeholder }) => {
  const style = useLevel(level);

  return (
    <div className={line.placeholder} style={style}>
      {placeholder}
    </div>
  );
};
