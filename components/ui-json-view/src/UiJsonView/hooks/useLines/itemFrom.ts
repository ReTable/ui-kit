import jp from 'jsonpath';

import {
  JsonPrimitiveValue,
  JsonValue,
  LineKind,
  OpenLine,
  Property,
  ValueLine,
  ValueType,
} from '../../../types';

import { Item, JsonPath, LineItem, ValueItem } from './types';

// region Value Line

function typedValueOf(value: JsonPrimitiveValue): [ValueType, string] {
  if (value == null) {
    return ['null', 'null'];
  }

  switch (typeof value) {
    case 'boolean': {
      return ['bool', value.toString()];
    }
    case 'number': {
      return [Number.isInteger(value) ? 'int' : 'float', value.toString()];
    }
    default: {
      return ['string', JSON.stringify(value)];
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
  const [type, value] = typedValueOf(source);

  // Step 3: Build a line object.
  const line: ValueLine = { kind: LineKind.Value, jsonPath, path, level, type, value };

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
    kind: LineKind.Open,

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
      kind: LineKind.Close,

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
      kind: LineKind.Placeholder,

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
