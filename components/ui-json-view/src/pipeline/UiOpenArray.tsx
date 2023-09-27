import { FC } from 'react';

import { line, toggleButton } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';

import { UiProperty } from './UiProperty';
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
    <pre className={line.boundary}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiProperty>{parentKey}</UiProperty>}
      {isCollapsed ? (
        <>
          [ ... ]{' '}
          {showObjectSize && (
            <>
              <UiSize>{size}</UiSize>{' '}
            </>
          )}
          <button className={toggleButton} onClick={handleToggle} type="button">
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
          <button className={toggleButton} onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
        </>
      )}
    </pre>
  );
};
