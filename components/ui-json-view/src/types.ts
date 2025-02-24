import { ComponentType } from 'react';

// region Json

export type JsonPrimitiveValue = boolean | null | number | string;

export type JsonArray = JsonValue[];

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type JsonObject = { [key: string]: JsonValue };

export type JsonValue = JsonArray | JsonObject | JsonPrimitiveValue;

// endregion

// region Line

// NOTE: Represents address of value inside the parent value.
//
//       If parent value is an array, then key will be an index.
//       If parent value is an object, then key will be a key.
export type Property = number | string;

export type PrimitiveType = 'bool' | 'null' | 'int' | 'float' | 'string';
export type ComplexType = 'array' | 'object';
export type ValueType = PrimitiveType | ComplexType;

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

  isFirst?: boolean;
  isLast?: boolean;
};

export type ValueLine = BaseLine<LineKind.Value> & {
  jsonPath: string;

  property?: Property;

  type: PrimitiveType;
  value: string;
};

export type OpenLine = BaseLine<LineKind.Open> & {
  jsonPath: string;

  property?: Property;

  openSymbol: string;
  closeSymbol: string;

  // NOTE: Number of items in an array or properties in an object.
  size: number;
  type: ComplexType;

  isCollapsed?: boolean;
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

// region Collapse/Expand

export type CollapsedKeys = {
  isEmpty: boolean;

  has: (key: string) => boolean;
};

export type OnToggleFn = (key: string) => void;

// endregion

// region Actions

export type QueryFn = (jsonPath: string) => Readonly<JsonValue>;

export type ActionFn = (jsonPath: string, query: QueryFn) => void;

export type VisibleFn = (jsonPath: string, type: ValueType) => boolean;

export type Action =
  | ActionFn
  | {
      action: ActionFn;
      isVisible?: VisibleFn;
      trackId?: string;
    };

export type OnActionFn = (jsonPath: string, action: ActionFn) => void;

export type Actions = Record<string, Action>;

// endregion

// region Options

export type JsonViewOptions = {
  /**
   * User defined actions.
   */
  actions: Actions;
  /**
   * Shows button, that copy json path to value
   */
  isCopyPathAllowed?: boolean;
  /**
   * Shows button, that copy value to clipboard
   */
  isCopyValueAllowed?: boolean;
  /**
   * Enables expand/collapse controls for arrays and objects, and enables action buttons for each line instead of
   * closing and placeholder lines.
   */
  isInteractive: boolean;
  /**
   * Trigger which will be called when a user toggle option in UI.
   *
   * Enables option control in UI if provided.
   */
  onToggleDataTypes?: (showDataTypes: boolean) => void;
  /**
   * Trigger which will be called when a user toggle option in UI.
   *
   * Enables option control in UI if provided.
   */
  onToggleObjectSize?: (showObjectSize: boolean) => void;
  /**
   * Allows to trim long string values after the given length.
   *
   * A user can click by a string value to toggle between full and trimmed versions of the value.
   */
  shortStringAfterLength?: number;
  /**
   * Enables showing a primitive type names near the values instead of `null`.
   */
  showDataTypes: boolean;
  /**
   * Enables showing a size of arrays and objects near of open line.
   */
  showObjectSize: boolean;
};

// endregion

// region View

export type ViewProps = {
  className: string;
  lines: Line[];
};

export type ViewComponentType = ComponentType<ViewProps>;

// endregion
