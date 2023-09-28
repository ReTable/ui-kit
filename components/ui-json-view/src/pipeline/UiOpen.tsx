import { FC } from 'react';

import { line, meta, property as propertyStyle, toggleButton } from '../style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';

import { useLevel } from './useLevel';

type Props = {
  closeSymbol: string;
  isCollapsed: boolean;
  level: number;
  openSymbol: string;
  path: string;
  property?: number | string;
  size: number;
};

export const UiOpen: FC<Props> = ({
  closeSymbol,
  isCollapsed,
  level,
  openSymbol,
  path,
  property,
  size,
}) => {
  const { isInteractive, showObjectSize, toggle } = useJsonViewOptions();
  const style = useLevel(level);

  const handleToggle = () => {
    toggle(path);
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
