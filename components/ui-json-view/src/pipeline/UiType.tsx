import { FC, PropsWithChildren } from 'react';

import { root } from './UiType.css';

export const UiType: FC<PropsWithChildren> = ({ children }) => (
  <span className={root}>{children}</span>
);
