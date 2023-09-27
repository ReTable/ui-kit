import { JsonArray, JsonObject, JsonValue } from '../types';

// region Types

type Item<Key, Property> = [Key, Property, JsonValue];

type ArrayItem = Item<number, number>;

type ObjectItem = Item<number, string>;

// endregion

// region Parse

function arrayChildrenOf(value: JsonArray): ArrayItem[] {
  return value.map((child, index) => [index, index, child]);
}

function objectChildrenOf(value: JsonObject): ObjectItem[] {
  return Object.entries(value).map(([property, child], index) => [index, property, child]);
}

// endregion

export function childrenOf(value: JsonArray | JsonObject): [ArrayItem[] | ObjectItem[], number] {
  const children = Array.isArray(value) ? arrayChildrenOf(value) : objectChildrenOf(value);

  return [children, children.length];
}
