import { FC, PropsWithChildren } from 'react';

import { root } from './Container.css';

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={root}>{children}</div>
);
