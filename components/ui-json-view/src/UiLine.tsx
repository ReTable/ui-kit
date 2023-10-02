import { CSSProperties, memo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { controls, level, variants } from './UiLine.css';

import { UiActions } from './UiActions';
import { UiProperty } from './UiProperty';
import { UiSize } from './UiSize';
import { UiToggle } from './UiToggle';
import { UiType } from './UiType';
import { Line, LineKind } from './types';

type Props = {
  isCollapsed: boolean;
  line: Line;
  style: CSSProperties;
};

export const UiLine = memo<Props>(({ isCollapsed, line, style }) => {
  const rootStyle = { ...style, ...assignInlineVars({ [level]: `${line.level}` }) };

  switch (line.kind) {
    case LineKind.Value: {
      const { jsonPath, property, type, value } = line;

      return (
        <div className={variants[type]} style={rootStyle}>
          <UiProperty property={property} />
          <UiType type={type} />
          {value}
          <UiActions className={controls.action} jsonPath={jsonPath} />
        </div>
      );
    }
    case LineKind.Open: {
      const { closeSymbol, jsonPath, openSymbol, path, property, size } = line;

      return (
        <div className={variants.boundary} style={rootStyle}>
          <UiToggle className={controls.toggle} isCollapsed={isCollapsed} path={path} />
          <UiProperty property={property} />
          {isCollapsed ? `${openSymbol} ${size === 0 ? '' : '...'} ${closeSymbol}` : openSymbol}
          <UiSize size={size} />
          <UiActions className={controls.action} jsonPath={jsonPath} />
        </div>
      );
    }
    case LineKind.Close: {
      const { closeSymbol } = line;

      return (
        <div className={variants.boundary} style={rootStyle}>
          {closeSymbol}
        </div>
      );
    }
    case LineKind.Placeholder: {
      const { placeholder } = line;

      return (
        <div className={variants.placeholder} style={rootStyle}>
          {placeholder}
        </div>
      );
    }
  }
});

UiLine.displayName = 'UiLine';
