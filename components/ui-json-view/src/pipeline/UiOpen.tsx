import { FC } from 'react';

import { line, meta, property as propertyStyle, toggleButton } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';
import { LineType, OpenLineType } from '../lines';

import { useLevel } from './useLevel';

type Props = {
  isCollapsed: boolean;
  level: number;
  lineKey: string;
  property?: number | string;
  size: number;
  type: OpenLineType;
};

export const UiOpen: FC<Props> = ({ lineKey, isCollapsed, level, property, size, type }) => {
  const { isInteractive, showObjectSize, toggle } = useJsonViewOptions();
  const style = useLevel(level);

  const [openSymbol, closeSymbol] = type === LineType.ArrayOpen ? ['[', ']'] : ['{', '}'];

  const handleToggle = () => {
    toggle(lineKey);
  };

  const count = size === 1 ? '1 item' : `${size} items`;
  const collapseLabel = isCollapsed ? '+' : '-';

  let propertyName: number | string | null = null;

  if (property != null) {
    propertyName = typeof property === 'number' ? property : JSON.stringify(property);
  }

  return (
    <div className={line.boundary} style={style}>
      {isCollapsed ? (
        <>
          {isInteractive && (
            <button className={toggleButton} onClick={handleToggle} type="button">
              {collapseLabel}
            </button>
          )}
          {property != null && <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>}
          {openSymbol} ... {closeSymbol}{' '}
          {showObjectSize && <span className={meta}>&nbsp;{count}</span>}
        </>
      ) : (
        <>
          {isInteractive && (
            <button className={toggleButton} onClick={handleToggle} type="button">
              {collapseLabel}
            </button>
          )}
          {property != null && <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>}
          {openSymbol} {showObjectSize && <span className={meta}>&nbsp;{count}</span>}
        </>
      )}
    </div>
  );
};
