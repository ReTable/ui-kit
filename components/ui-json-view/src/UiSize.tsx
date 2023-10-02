import { FC } from 'react';

import { root } from './UiSize.css';

import { useOptions } from './UiOptions';

type Props = {
  size: number;
};

export const UiSize: FC<Props> = ({ size }) => {
  const { showObjectSize } = useOptions();

  if (!showObjectSize) {
    return null;
  }

  return <span className={root}>&nbsp;{size === 1 ? '1 item' : `${size} items`}</span>;
};
