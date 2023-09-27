import { FC } from 'react';

import { meta } from './style.css';

type Props = {
  children: number;
};

export const UiSize: FC<Props> = ({ children }) => (
  <span className={meta}>{children === 1 ? '1 item' : `${children} items`}</span>
);
