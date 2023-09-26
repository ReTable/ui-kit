import { FC } from 'react';

import { root } from './UiOpenObject.css';

import { UiParentKey } from './UiParentKey';
import { UiSize } from './UiSize';

type Props = {
  isCollapsed: boolean;
  level: number;
  parentKey?: number | string;
  size: number;
};

export const UiOpenObject: FC<Props> = ({ isCollapsed, level, parentKey, size }) => (
  <pre className={root}>
    {''.padStart(level * 2)}
    {parentKey != null && <UiParentKey>{parentKey}</UiParentKey>}
    {isCollapsed ? (
      <>
        {'{ ... }'} <UiSize>{size}</UiSize>
      </>
    ) : (
      <>
        {'{'} <UiSize>{size}</UiSize>
      </>
    )}
  </pre>
);
