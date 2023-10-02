// region Json
import { ComponentType } from 'react';

import { ListChildComponentProps } from 'react-window';

export type JsonPrimitiveValue = boolean | null | number | string;

export type JsonArray = JsonValue[];

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type JsonObject = { [key: string]: JsonValue };

export type JsonValue = JsonArray | JsonObject | JsonPrimitiveValue;

// endregion

// region Options

export type JsonViewOptions = {
  isInteractive: boolean;
  showDataTypes: boolean;
  showObjectSize: boolean;
};

// endregion

// region Line

// NOTE: Represents address of value inside the parent value.
//
//       If parent value is an array, then key will be an index.
//       If parent value is an object, then key will be a key.
export type Property = number | string;

export type ValueType = 'bool' | 'null' | 'int' | 'float' | 'string';

export enum LineKind {
  Value,
  Open,
  Close,
  Placeholder,
}

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

// region Service

export type CollapsedKeys = {
  isEmpty: boolean;

  has: (key: string) => boolean;
};

export type OnToggleFn = (key: string) => void;

export type LineRenderer = ComponentType<ListChildComponentProps<undefined>>;

export type ViewProps = {
  className: string;
  count: number;
  lineRenderer: LineRenderer;
};

export type ViewComponentType = ComponentType<ViewProps>;

// endregion
