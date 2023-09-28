import { memo } from 'react';

import { lines, meta, property as propertyStyle } from './style.css';

import { useOptions } from './UiOptions';
import { levelOf } from './helpers';
import { ValueLine } from './types';

type Props = {
  line: ValueLine;
};

export const UiValue = memo<Props>(({ line }) => {
  const { showDataTypes } = useOptions();

  let propertyName: number | string | null = null;

  if (line.property != null) {
    propertyName =
      typeof line.property === 'number' ? line.property : JSON.stringify(line.property);
  }

  return (
    <div className={lines[line.type]} style={levelOf(line)}>
      {propertyName != null && <span className={propertyStyle}>{propertyName}&nbsp;:&nbsp;</span>}
      {showDataTypes && line.type != 'null' && <span className={meta}>{line.type}&nbsp;</span>}
      {line.value}
    </div>
  );
});

UiValue.displayName = `UiJsonView(UiValue)`;
