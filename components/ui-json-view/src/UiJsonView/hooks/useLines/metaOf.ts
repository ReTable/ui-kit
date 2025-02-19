import { ComplexType, JsonArray, JsonObject, JsonValue } from '../../../types';

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

type Meta = {
  children: ArrayItem[] | ObjectItem[];

  openSymbol: string;
  closeSymbol: string;
  size: number;
  type: ComplexType;
};

export function metaOf(value: JsonArray | JsonObject): Meta {
  if (Array.isArray(value)) {
    const children = arrayChildrenOf(value);

    return {
      children,
      openSymbol: '[',
      closeSymbol: ']',
      size: children.length,
      type: 'array',
    };
  }

  const children = objectChildrenOf(value);

  return {
    children,
    openSymbol: '{',
    closeSymbol: '}',
    size: children.length,
    type: 'object',
  };
}
