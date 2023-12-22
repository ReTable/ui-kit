import { JsonValue, Line } from '../../../types';

// NOTE: JSON Path represented as list of path components.
//
//       This form can be converted to the single string later.
export type JsonPath = Array<number | string>;

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
