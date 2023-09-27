import { FC } from 'react';

import { property } from './style.css';

type Props = {
  children: number | string;
};

export const UiProperty: FC<Props> = ({ children }) => (
  <span className={property}>{JSON.stringify(children)} : </span>
);
