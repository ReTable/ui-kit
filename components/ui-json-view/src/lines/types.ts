import { JsonValue } from '../types';

// NOTE: JSON Path represented as list of path components.
//
//       This form can be converted to the single string later.
export type JsonPath = Array<number | string>;

// NOTE: Represents address of value inside the parent value.
//
//       If parent value is an array, then key will be an index.
//       If parent value is an object, then key will be a key.
export type Property = number | string;

// region Line

export type ValueType = 'bool' | 'null' | 'int' | 'float' | 'string';

/* eslint-disable @typescript-eslint/no-shadow */
export enum LineKind {
  Value,
  Open,
  Close,
  Placeholder,
}
/* eslint-enable */

export type PrimitiveLineKind = LineKind.Value;

type BaseLine<Kind extends LineKind> = {
  // NOTE: Path of item.
  //
  //       This path is hierarchical key of line for internal usage.
  path: string;
  // NOTE: Kind of line.
  //
  //       It used to select a way which line is rendered.
  kind: Kind;
  // NOTE: Level of item in object.
  //
  //       This level doesn't represent level inside object, and used to build indentation when render the JSON tree.
  level: number;
};

export type ValueLine = BaseLine<LineKind.Value> & {
  jsonPath: string;

  property?: Property;

  type: ValueType;
  value: string;
};

export type OpenLine = BaseLine<LineKind.Open> & {
  jsonPath: string;

  property?: Property;

  openSymbol: string;
  closeSymbol: string;

  // NOTE: Number of items in an array or properties in an object.
  size: number;
};

export type CloseLine = BaseLine<LineKind.Close> & {
  closeSymbol: string;
};

export type PlaceholderLine = BaseLine<LineKind.Placeholder> & {
  placeholder: string;
};

export type Line =
  // Value
  | ValueLine
  // Boundary
  | OpenLine
  | CloseLine
  // Placeholder
  | PlaceholderLine;

// endregion

// region Linked List based Queue

// NOTE: Represents queue item with ready to use line.
export type LineItem = {
  next?: Item;

  isLine: true;

  line: Line;
};

// NOTE: Represents queue item with data which will be used to form line.
export type ValueItem = {
  next?: Item;

  isLine: false;

  jsonPath: JsonPath;
  level: number;
  path: string;

  property?: number | string;

  value: JsonValue;
};

export type Item = LineItem | ValueItem;

// endregion
