import { memo } from 'react';

import { lines, meta, property as propertyStyle, toggleButton } from './style.css';

import { useOptions } from './UiOptions';
import { levelOf } from './helpers';
import { OpenLine } from './types';

type Props = {
  isCollapsed: boolean;
  line: OpenLine;
};

export const UiOpen = memo<Props>(({ isCollapsed, line }) => {
  const { isInteractive, showObjectSize, toggle } = useOptions();

  const handleToggle = () => {
    toggle(line.path);
  };

  const count = line.size === 1 ? '1 item' : `${line.size} items`;
  const collapseLabel = isCollapsed ? '+' : '-';

  let propertyName: number | string | null = null;

  if (line.property != null) {
    propertyName =
      typeof line.property === 'number' ? line.property : JSON.stringify(line.property);
  }

  return (
    <div className={lines.boundary} style={levelOf(line)}>
      {isCollapsed ? (
        <>
          {isInteractive && (
            <button className={toggleButton} onClick={handleToggle} type="button">
              {collapseLabel}
            </button>
          )}
          {line.property != null && (
            <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>
          )}
          {line.openSymbol} ... {line.closeSymbol}{' '}
          {showObjectSize && <span className={meta}>&nbsp;{count}</span>}
        </>
      ) : (
        <>
          {isInteractive && (
            <button className={toggleButton} onClick={handleToggle} type="button">
              {collapseLabel}
            </button>
          )}
          {line.property != null && (
            <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>
          )}
          {line.openSymbol} {showObjectSize && <span className={meta}>&nbsp;{count}</span>}
        </>
      )}
    </div>
  );
});

UiOpen.displayName = `UiJsonView(UiOpen)`;
