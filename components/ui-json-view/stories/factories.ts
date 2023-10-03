import { rand, randBoolean, randFloat, randNumber, randSentence } from '@ngneat/falso';

export type PrimitiveType = 'boolean' | 'null' | 'integer' | 'float' | 'string';

export const primitiveTypesLabels: Record<PrimitiveType, string> = {
  boolean: 'Boolean',
  null: 'Null',
  integer: 'Integer',
  float: 'Float',
  string: 'String',
};

export const primitiveTypes = Object.keys(primitiveTypesLabels) as PrimitiveType[];

function createPrimitiveValue(type: PrimitiveType): unknown {
  switch (type) {
    case 'null': {
      return null;
    }
    case 'boolean': {
      return randBoolean();
    }
    case 'integer': {
      return randNumber();
    }
    case 'float': {
      return randFloat();
    }
    case 'string': {
      return randSentence();
    }
  }
}

function randomType(): PrimitiveType {
  return rand(primitiveTypes);
}

export function createHomogeneousArray(size: number, type: PrimitiveType): unknown[] {
  const array: unknown[] = [];

  for (let idx = 0; idx < size; idx += 1) {
    array.push(createPrimitiveValue(type));
  }

  return array;
}

export function createHeterogeneousArray(size: number): unknown[] {
  const array: unknown[] = [];

  let typeIdx = 0;

  for (let idx = 0; idx < size; idx += 1) {
    array.push(createPrimitiveValue(primitiveTypes[typeIdx]));

    typeIdx = typeIdx < primitiveTypes.length - 1 ? (typeIdx += 1) : 0;
  }

  return array;
}

export function createHomogeneousObject(
  size: number,
  type: PrimitiveType,
): Record<string, unknown> {
  const object: Record<string, unknown> = {};

  for (let idx = 0; idx < size; idx += 1) {
    object[`property-${idx}`] = createPrimitiveValue(type);
  }

  return object;
}

export function createHeterogeneousObject(size: number): Record<string, unknown> {
  const object: Record<string, unknown> = {};

  let typeIdx = 0;

  for (let idx = 0; idx < size; idx += 1) {
    object[`property-${idx}`] = createPrimitiveValue(primitiveTypes[typeIdx]);

    typeIdx = typeIdx < primitiveTypes.length - 1 ? (typeIdx += 1) : 0;
  }

  return object;
}

export function createNestedArray(): unknown[] {
  return [
    null,
    randBoolean(),
    randNumber(),
    randFloat(),
    randSentence(),
    [],
    createHomogeneousArray(5, randomType()),
    createHeterogeneousArray(5),
    {},
    createHomogeneousObject(5, randomType()),
    createHeterogeneousObject(5),
  ];
}

export function createNestedObject(): Record<string, unknown> {
  return {
    null: null,
    boolean: randBoolean(),
    integer: randNumber(),
    float: randFloat(),
    string: randSentence(),
    emptyArray: [],
    homogeneousArray: createHomogeneousArray(5, randomType()),
    heterogeneousArray: createHeterogeneousArray(5),
    emptyObject: {},
    homogeneousObject: createHomogeneousObject(10, randomType()),
    heterogeneousObject: createHeterogeneousObject(5),
  };
}

export function createComplexObject(size: number): Record<string, unknown> {
  const root: Record<string, unknown> = createNestedObject();

  let cursor = root;

  for (let idx = 0; idx < size; idx += 1) {
    const nested = createNestedObject();

    cursor.nested = nested;

    cursor = nested;
  }

  return root;
}
