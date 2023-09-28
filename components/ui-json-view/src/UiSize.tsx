import { FC } from 'react';

import { meta } from './style.css';

import { useOptions } from './UiOptions';

type Props = {
  size: number;
};

export const UiSize: FC<Props> = ({ size }) => {
  const { showObjectSize } = useOptions();

  if (!showObjectSize) {
    return null;
  }

  return <span className={meta}>&nbsp;{size === 1 ? '1 item' : `${size} items`}</span>;
};

UiSize.displayName = 'UiJsonView(UiSize)';
