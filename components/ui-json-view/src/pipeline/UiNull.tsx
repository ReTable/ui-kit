import { FC } from 'react';

import { line } from './style.css';

import { UiProperty } from './UiProperty';

type Props = {
  level: number;
  parentKey?: number | string;
};

export const UiNull: FC<Props> = ({ level, parentKey }) => {
  return (
    <pre className={line.null}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiProperty>{parentKey}</UiProperty>}
      null
    </pre>
  );
};
