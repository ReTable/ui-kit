import jp from 'jsonpath';

import { JsonPrimitiveValue, JsonValue } from '../types';

import {
  Item,
  JsonPath,
  LineItem,
  LineType,
  OpenLine,
  Property,
  ValueItem,
  ValueLine,
} from './types';

// region Value Line

type TypedValue =
  | { type: LineType.Boolean; value: boolean }
  | { type: LineType.Null; value: null }
  | { type: LineType.Number; value: number }
  | { type: LineType.String; value: string };

function primitiveValueWithType(value: JsonPrimitiveValue): TypedValue {
  if (value == null) {
    return { type: LineType.Null, value: null };
  }

  switch (typeof value) {
    case 'boolean': {
      return { type: LineType.Boolean, value };
    }
    case 'number': {
      return { type: LineType.Number, value };
    }
    default: {
      return { type: LineType.String, value: JSON.stringify(value) };
    }
  }
}

type ValueLineItemFromOptions = {
  jsonPath: JsonPath;
  level: number;
  path: string;

  property?: Property;
};

export function valueLineItemFrom(
  source: JsonPrimitiveValue,
  { jsonPath: jsonPathComponents, level, path, property }: ValueLineItemFromOptions,
): LineItem {
  // Step 1: Convert JSON Path components to string.
  const jsonPath = jp.stringify(jsonPathComponents);

  // Step 2: Match value with line type.
  const valueWithType = primitiveValueWithType(source);

  // Step 3: Build a line object.
  const line: ValueLine = { jsonPath, path, level, ...valueWithType };

  // Step 4: If property is represented, then add it to the line.
  if (property != null) {
    line.property = property;
  }

  // Step 5: Return a result.
  return { isLine: true, line };
}

// endregion

// region Boundary

type OpenItemFromOptions = {
  closeSymbol: string;
  jsonPath: JsonPath;
  level: number;
  openSymbol: string;
  path: string;
  property?: Property;
  size: number;
};

export function openItemFrom({
  closeSymbol,
  jsonPath,
  level,
  openSymbol,
  path,
  property,
  size,
}: OpenItemFromOptions): LineItem {
  const line: OpenLine = {
    type: LineType.Open,

    jsonPath: jp.stringify(jsonPath),
    level,
    path,

    openSymbol,
    closeSymbol,

    size,
  };

  if (property != null) {
    line.property = property;
  }

  return { isLine: true, line };
}

type CloseItemFromOptions = {
  closeSymbol: string;
  level: number;
  path: string;
  size: number;
};

export function closeItemFrom({ closeSymbol, level, path, size }: CloseItemFromOptions): LineItem {
  return {
    isLine: true,

    line: {
      type: LineType.Close,

      level,
      // NOTE: If size is 0, then an empty placeholder will be added, and size will be 1.
      path: `${path}.${Math.max(size, 1)}`,

      closeSymbol,
    },
  };
}

// endregion

// region Placeholder

type EmptyItemFromOptions = {
  level: number;
  path: string;
};

export function emptyItemFrom({ level, path }: EmptyItemFromOptions): Item {
  return {
    isLine: true,

    line: {
      type: LineType.Placeholder,

      level: level + 1,
      path: `${path}.0`,

      placeholder: 'empty',
    },
  };
}

// endregion

// region Value

type ValueItemFromOptions = {
  index: number;
  jsonPath: JsonPath;
  level: number;
  path: string;
  property: number | string;
  value: JsonValue;
};

export function valueItemFrom({
  index,
  jsonPath,
  level,
  path,
  property,
  value,
}: ValueItemFromOptions): ValueItem {
  return {
    isLine: false,

    jsonPath: [...jsonPath, property],
    level: level + 1,
    path: `${path}.${index}`,

    property,

    value,
  };
}

// endregion
