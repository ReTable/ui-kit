import { FC } from 'react';

import { root } from './UiOpenArray.css';

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

export const UiOpenArray: FC<Props> = ({ lineKey, isCollapsed, level, parentKey, size }) => {
  const { showObjectSize, toggle } = useJsonViewOptions();

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
          [ ... ]{' '}
          {showObjectSize && (
            <>
              <UiSize>{size}</UiSize>{' '}
            </>
          )}
          <button onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
        </>
      ) : (
        <>
          [{' '}
          {showObjectSize && (
            <>
              <UiSize>{size}</UiSize>{' '}
            </>
          )}
          <button onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
        </>
      )}
    </pre>
  );
};
