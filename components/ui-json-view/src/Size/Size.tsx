import { FC } from 'react';

import { root } from './Size.css';

import { useOptions } from '../OptionsProvider';

type Props = {
  size: number;
};

export const Size: FC<Props> = ({ size }) => {
  const { showObjectSize } = useOptions();

  if (!showObjectSize) {
    return null;
  }

  return <span className={root}>&nbsp;{size === 1 ? '1 item' : `${size} items`}</span>;
};
