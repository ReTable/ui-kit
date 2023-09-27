import { FC, PropsWithChildren } from 'react';

import { meta } from './style.css';

export const UiType: FC<PropsWithChildren> = ({ children }) => (
  <span className={meta}>{children}</span>
);
