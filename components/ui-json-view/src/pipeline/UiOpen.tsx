import { FC } from 'react';

import { line, meta, property, toggleButton } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';
import { LineType, OpenLineType } from '../lines';

import { useLevel } from './useLevel';

type Props = {
  isCollapsed: boolean;
  level: number;
  lineKey: string;
  parentKey?: number | string;
  size: number;
  type: OpenLineType;
};

export const UiOpen: FC<Props> = ({ lineKey, isCollapsed, level, parentKey, size, type }) => {
  const { showObjectSize, toggle } = useJsonViewOptions();
  const style = useLevel(level);

  const [openSymbol, closeSymbol] = type === LineType.ArrayOpen ? ['[', ']'] : ['{', '}'];

  const handleToggle = () => {
    toggle(lineKey);
  };

  const count = size === 1 ? '1 item' : `${size} items`;
  const collapseLabel = isCollapsed ? '+' : '-';

  let propertyName: number | string | null = null;

  if (parentKey != null) {
    propertyName = typeof parentKey === 'number' ? parentKey : JSON.stringify(parentKey);
  }

  return (
    <div className={line.boundary} style={style}>
      {isCollapsed ? (
        <>
          <button className={toggleButton} onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
          {parentKey != null && <span className={property}>{propertyName}&nbsp;:&nbsp;</span>}
          {openSymbol} ... {closeSymbol}{' '}
          {showObjectSize && <span className={meta}>&nbsp;{count}</span>}
        </>
      ) : (
        <>
          <button className={toggleButton} onClick={handleToggle} type="button">
            {collapseLabel}
          </button>
          {parentKey != null && <span className={property}>{propertyName}&nbsp;:&nbsp;</span>}
          {openSymbol} {showObjectSize && <span className={meta}>&nbsp;{count}</span>}
        </>
      )}
    </div>
  );
};
