import { FC } from 'react';

import { root } from './UiNumber.css';

import { UiParentKey } from './UiParentKey';

type Props = {
  level: number;
  parentKey?: number | string;
};

export const UiNull: FC<Props> = ({ level, parentKey }) => {
  return (
    <pre className={root}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiParentKey>{parentKey}</UiParentKey>}
      null
    </pre>
  );
};
