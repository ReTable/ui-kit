import { CSSProperties, memo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';

import { controls, level, position, variants } from './UiLine.css';

import { UiActions } from './UiActions';
import { UiProperty } from './UiProperty';
import { UiSize } from './UiSize';
import { UiStringValue } from './UiStringValue';
import { UiToggle } from './UiToggle';
import { UiType } from './UiType';
import { Line, LineKind } from './types';

type Props = {
  line: Line;
  style?: CSSProperties;
};

export const UiLine = memo<Props>(({ line, style }) => {
  const positionClassName = clsx(line.isFirst && position.isFirst, line.isLast && position.isLast);

  const rootStyle = { ...style, ...assignInlineVars({ [level]: `${line.level}` }) };

  switch (line.kind) {
    case LineKind.Value: {
      const { jsonPath, property, type, value } = line;

      return (
        <div className={clsx(variants[type], positionClassName)} style={rootStyle}>
          <UiProperty property={property} />
          <UiType type={type} />
          {type === 'string' ? <UiStringValue>{value}</UiStringValue> : value}
          <UiActions className={controls.action} jsonPath={jsonPath} />
        </div>
      );
    }
    case LineKind.Open: {
      const { closeSymbol, isCollapsed, jsonPath, openSymbol, path, property, size } = line;

      return (
        <div className={clsx(variants.boundary, positionClassName)} style={rootStyle}>
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
        <div className={clsx(variants.boundary, positionClassName)} style={rootStyle}>
          {closeSymbol}
        </div>
      );
    }
    case LineKind.Placeholder: {
      const { placeholder } = line;

      return (
        <div className={clsx(variants.placeholder, positionClassName)} style={rootStyle}>
          {placeholder}
        </div>
      );
    }
  }
});

UiLine.displayName = 'UiLine';
