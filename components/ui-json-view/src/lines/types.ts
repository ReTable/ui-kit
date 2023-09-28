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

/* eslint-disable @typescript-eslint/no-shadow */
export enum LineType {
  // Primitive Values
  Boolean,
  Null,
  Number,
  String,
  // Boundary
  Open,
  Close,
  // Placeholder
  Placeholder,
}
/* eslint-enable */

export type PrimitiveLineType =
  | LineType.Boolean
  | LineType.Null
  | LineType.Number
  | LineType.String;

type BaseLine<Type extends LineType> = {
  // NOTE: Path of item.
  //
  //       This path is hierarchical key of line for internal usage.
  path: string;
  // NOTE: Level of item in object.
  //
  //       This level doesn't represent level inside object, and used to build indentation when render the JSON tree.
  level: number;
  // NOTE: Type of line.
  //
  //       It used to select a way which line is rendered.
  type: Type;
};

type BaseValueLine<Type extends LineType, Value = never> = BaseLine<Type> & {
  jsonPath: string;

  property?: Property;

  value: Value;
};

export type ValueLine =
  | BaseValueLine<LineType.Boolean, boolean>
  | BaseValueLine<LineType.Null, null>
  | BaseValueLine<LineType.Number, number>
  | BaseValueLine<LineType.String, string>;

export type OpenLine = BaseLine<LineType.Open> & {
  jsonPath: string;

  property?: Property;

  openSymbol: string;
  closeSymbol: string;

  // NOTE: Number of items in an array or properties in an object.
  size: number;
};

export type CloseLine = BaseLine<LineType.Close> & {
  closeSymbol: string;
};

export type PlaceholderLine = BaseLine<LineType.Placeholder> & {
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
