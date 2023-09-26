import { JsonValue } from '../types';

// NOTE: JSON Path represented as list of path components.
//
//       This form can be converted to the single string later.
export type JsonPath = Array<number | string>;

// NOTE: Represents address of value inside the parent value.
//
//       If parent value is an array, then key will be an index.
//       If parent value is an object, then key will be a key.
export type ParentKey = number | string;

export type PrimitiveValue = boolean | null | number | string;

// region Line

/* eslint-disable @typescript-eslint/no-shadow */
export enum LineType {
  // Primitive Values
  Boolean,
  Null,
  Number,
  String,
  // Array Boundaries
  ArrayOpen,
  ArrayClose,
  // Object Boundaries
  ObjectOpen,
  ObjectClose,
  // Placeholders
  Empty,
}
/* eslint-enable */

type BaseLine<Type extends LineType> = {
  // NOTE: Key of item.
  //
  //       This key is hierarchical key of line for internal usage.
  key: string;
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
  parentKey?: ParentKey;
  jsonPath: string;
  value: Value;
};

type BaseOpenLine<Type extends LineType> = BaseLine<Type> & {
  parentKey?: ParentKey;
  jsonPath: string;
  // NOTE: Number of items in an array or properties in an object.
  size: number;
};

type BaseCloseLine<Type extends LineType> = BaseLine<Type>;

export type ValueLine =
  | BaseValueLine<LineType.Boolean, boolean>
  | BaseValueLine<LineType.Null, null>
  | BaseValueLine<LineType.Number, number>
  | BaseValueLine<LineType.String, string>;

export type OpenLine = BaseOpenLine<LineType.ArrayOpen> | BaseOpenLine<LineType.ObjectOpen>;

export type CloseLine = BaseCloseLine<LineType.ArrayClose> | BaseCloseLine<LineType.ObjectClose>;

export type Line =
  // Value Items
  | ValueLine
  // Container Items
  | OpenLine
  | CloseLine
  // Placeholder Items
  | BaseLine<LineType.Empty>;

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

  key: string;
  level: number;

  jsonPath: JsonPath;

  parentKey?: number | string;

  value: JsonValue;
};

export type Item = LineItem | ValueItem;

// endregion
