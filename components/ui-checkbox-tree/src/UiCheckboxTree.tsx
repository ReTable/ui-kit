import { ReactElement } from 'react';

import { root } from './UiCheckboxTree.css';

export type Props = {
  className?: string;
};

export function UiCheckboxTree({ className = '' }: Props): ReactElement {
  return <div className={`${root} ${className}`} />;
}
