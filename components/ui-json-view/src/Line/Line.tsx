import { CSSProperties, memo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx/lite';

import { controls, level, position, variants } from './Line.css';

import { Actions } from '../Actions';
import { Property } from '../Property';
import { Rest } from '../Rest';
import { Size } from '../Size';
import { StringValue } from '../StringValue';
import { Toggle } from '../Toggle';
import { Type } from '../Type';
import { LineKind, Line as LineType } from '../types';

type Props = {
  line: LineType;
  style?: CSSProperties;
};

export const Line = memo<Props>(function Line({ line, style }) {
  const positionClassName = clsx(line.isFirst && position.isFirst, line.isLast && position.isLast);

  const rootStyle = { ...style, ...assignInlineVars({ [level]: `${line.level}` }) };

  switch (line.kind) {
    case LineKind.Value: {
      const { jsonPath, property, type, value } = line;

      return (
        <div className={clsx(variants[type], positionClassName)} style={rootStyle}>
          <Property property={property} />
          <Type type={type} />
          {type === 'string' ? <StringValue>{value}</StringValue> : value}
          <Actions className={controls.action} jsonPath={jsonPath} />
        </div>
      );
    }
    case LineKind.Open: {
      const { closeSymbol, isCollapsed, jsonPath, openSymbol, path, property, size } = line;

      return (
        <div className={clsx(variants.boundary, positionClassName)} style={rootStyle}>
          <Toggle className={controls.toggle} isCollapsed={isCollapsed} path={path} />
          <Property property={property} />
          {isCollapsed ? (
            <>
              {openSymbol}
              <Rest path={path} />
              {closeSymbol}
            </>
          ) : (
            openSymbol
          )}
          <Size size={size} />
          <Actions className={controls.action} jsonPath={jsonPath} />
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
