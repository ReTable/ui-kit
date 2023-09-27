import jp from 'jsonpath';

import { JsonValue } from '../types';

import {
  Item,
  JsonPath,
  LineItem,
  LineType,
  OpenLine,
  ParentKey,
  PrimitiveValue,
  ValueItem,
  ValueLine,
} from './types';

// region Value Line

type TypedValue =
  | { type: LineType.Boolean; value: boolean }
  | { type: LineType.Null; value: null }
  | { type: LineType.Number; value: number }
  | { type: LineType.String; value: string };

function primitiveValueWithType(value: PrimitiveValue): TypedValue {
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
  key: string;
  level: number;
  parentKey?: ParentKey;
};

export function valueLineItemFrom(
  source: PrimitiveValue,
  { jsonPath: jsonPathComponents, key, level, parentKey }: ValueLineItemFromOptions,
): LineItem {
  // Step 1: Convert JSON Path components to string.
  const jsonPath = jp.stringify(jsonPathComponents);

  // Step 2: Match value with line type.
  const valueWithType = primitiveValueWithType(source);

  // Step 3: Build a line object.
  const line: ValueLine = { jsonPath, key, level, ...valueWithType };

  // Step 4: If parent key is represented, then add it to the line.
  if (parentKey != null) {
    line.parentKey = parentKey;
  }

  // Step 5: Return a result.
  return { isLine: true, line };
}

// endregion

// region Boundary

type OpenItemFromOptions = {
  jsonPath: JsonPath;
  key: string;
  level: number;
  parentKey?: ParentKey;
  size: number;
  type: LineType.ArrayOpen | LineType.ObjectOpen;
};

export function openItemFrom({
  jsonPath,
  key,
  level,
  parentKey,
  type,
  size,
}: OpenItemFromOptions): LineItem {
  const line: OpenLine = {
    jsonPath: jp.stringify(jsonPath),
    key: `${key}`,
    level,

    type,
    size,
  };

  if (parentKey != null) {
    line.parentKey = parentKey;
  }

  return { isLine: true, line };
}

type CloseItemFromOptions = {
  key: string;
  level: number;
  size: number;
  type: LineType.ArrayClose | LineType.ObjectClose;
};

export function closeItemFrom({ key, level, size, type }: CloseItemFromOptions): LineItem {
  return {
    isLine: true,

    line: {
      // NOTE: If size is 0, then an empty placeholder will be added, and size will be 1.
      key: `${key}.${Math.max(size, 1)}`,
      level,

      type,
    },
  };
}

// endregion

// region Placeholder

type EmptyItemFromOptions = {
  key: string;
  level: number;
};

export function emptyItemFrom({ key, level }: EmptyItemFromOptions): Item {
  return {
    isLine: true,

    line: {
      key: `${key}.0`,
      level: level + 1,

      type: LineType.Empty,
    },
  };
}

// endregion

// region Value

type ValueItemFromOptions = {
  index: number;
  jsonPath: JsonPath;
  key: string;
  level: number;
  property: number | string;
  value: JsonValue;
};

export function valueItemFrom({
  index,
  jsonPath,
  key,
  level,
  property,
  value,
}: ValueItemFromOptions): ValueItem {
  return {
    isLine: false,

    jsonPath: [...jsonPath, property],
    key: `${key}.${index}`,
    level: level + 1,

    parentKey: property,

    value,
  };
}

// endregion
