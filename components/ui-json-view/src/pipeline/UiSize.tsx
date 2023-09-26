import { FC } from 'react';

import { root } from './UiSize.css';

type Props = {
  children: number;
};

export const UiSize: FC<Props> = ({ children }) => (
  <span className={root}>{children === 1 ? '1 item' : `${children} items`}</span>
);
