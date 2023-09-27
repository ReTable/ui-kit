import { FC } from 'react';

import { root } from './UiOpenObject.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';

import { UiParentKey } from './UiParentKey';
import { UiSize } from './UiSize';

type Props = {
  isCollapsed: boolean;
  level: number;
  lineKey: string;
  parentKey?: number | string;
  size: number;
};

export const UiOpenObject: FC<Props> = ({ lineKey, isCollapsed, level, parentKey, size }) => {
  const { toggle } = useJsonViewOptions();

  const handleToggle = () => {
    toggle(lineKey);
  };

  const collapseLabel = isCollapsed ? '+' : '-';

  return (
    <pre className={root}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiParentKey>{parentKey}</UiParentKey>}
      {isCollapsed ? (
        <>
          {'{ ... }'} <UiSize>{size}</UiSize>{' '}
          <button onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
        </>
      ) : (
        <>
          {'{'} <UiSize>{size}</UiSize>{' '}
          <button onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
        </>
      )}
    </pre>
  );
};
