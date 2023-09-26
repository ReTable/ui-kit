import { FC } from 'react';

import { root } from './UiParentKey.css';

type Props = {
  children: number | string;
};

export const UiParentKey: FC<Props> = ({ children }) => (
  <span className={root}>{JSON.stringify(children)} : </span>
);
