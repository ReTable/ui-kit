import { FC } from 'react';

import { line } from './style.css';

import { useLevel } from './useLevel';

type Props = {
  closeSymbol: string;
  level: number;
};

export const UiClose: FC<Props> = ({ closeSymbol, level }) => {
  const style = useLevel(level);

  return (
    <div className={line.boundary} style={style}>
      {closeSymbol}
    </div>
  );
};
