import { FC } from 'react';

import { root } from './UiButton.css';

export type Props = {
  className?: string;
};

export const UiButton: FC<Props> = ({ className = '' }) => (
  <div className={`${root} ${className}`} />
);
