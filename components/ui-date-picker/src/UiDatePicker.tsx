import { ReactElement } from 'react';

import { root } from './UiDatePicker.css';

export type Props = {
  className?: string;
};

export function UiDatePicker({ className = '' }: Props): ReactElement {
  return <div className={`${root} ${className}`} />;
}
