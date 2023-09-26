import { FC } from 'react';

import { root } from './UiOpenArray.css';

import { UiParentKey } from './UiParentKey';
import { UiSize } from './UiSize';

type Props = {
  level: number;
  isCollapsed: boolean;
  parentKey?: number | string;
  size: number;
};

export const UiOpenArray: FC<Props> = ({ isCollapsed, level, parentKey, size }) => (
  <pre className={root}>
    {''.padStart(level * 2)}
    {parentKey != null && <UiParentKey>{parentKey}</UiParentKey>}
    {isCollapsed ? (
      <>
        [ ... ] <UiSize>{size}</UiSize>
      </>
    ) : (
      <>
        [ <UiSize>{size}</UiSize>
      </>
    )}
  </pre>
);
