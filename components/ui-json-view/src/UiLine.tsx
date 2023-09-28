import { memo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { levelVar, lines } from './style.css';

import { UiProperty } from './UiProperty';
import { UiSize } from './UiSize';
import { UiToggle } from './UiToggle';
import { UiType } from './UiType';
import { Line, LineKind } from './types';

type Props = {
  isCollapsed: boolean;
  line: Line;
};

export const UiLine = memo<Props>(({ isCollapsed, line }) => {
  const style = assignInlineVars({ [levelVar]: `${line.level}` });

  switch (line.kind) {
    case LineKind.Value: {
      const { property, type, value } = line;

      return (
        <div className={lines[type]} style={style}>
          <UiProperty property={property} />
          <UiType type={type} />
          {value}
        </div>
      );
    }
    case LineKind.Open: {
      const { closeSymbol, openSymbol, path, property, size } = line;

      return (
        <div className={lines.boundary} style={style}>
          <UiToggle isCollapsed={isCollapsed} path={path} />
          <UiProperty property={property} />
          {isCollapsed ? `${openSymbol} ${size === 0 ? '' : '...'} ${closeSymbol}` : openSymbol}
          <UiSize size={size} />
        </div>
      );
    }
    case LineKind.Close: {
      const { closeSymbol } = line;

      return (
        <div className={lines.boundary} style={style}>
          {closeSymbol}
        </div>
      );
    }
    case LineKind.Placeholder: {
      const { placeholder } = line;

      return (
        <div className={lines.placeholder} style={style}>
          {placeholder}
        </div>
      );
    }
  }
});

UiLine.displayName = `UiJsonView(UiLine)`;
