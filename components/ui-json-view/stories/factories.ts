import { rand, randBoolean, randFloat, randNumber, randPhrase, seed } from '@ngneat/falso';

// region Types

export type PrimitiveType = 'boolean' | 'null' | 'integer' | 'float' | 'string';

// endregion

// region Primitives

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
      return randPhrase();
    }
  }
}

export function randomType(): PrimitiveType {
  return rand(primitiveTypes);
}

// endregion

// region Homogeneous Array

export function createHomogeneousArray(
  size: number,
  type: PrimitiveType,
  resetSeed = true,
): unknown[] {
  if (resetSeed) {
    seed('homogeneous-array');
  }

  const array: unknown[] = [];

  for (let idx = 0; idx < size; idx += 1) {
    array.push(createPrimitiveValue(type));
  }

  return array;
}

// endregion

// region Heterogeneous Array

export function createHeterogeneousArray(size: number, resetSeed = true): unknown[] {
  if (resetSeed) {
    seed('heterogeneous-array');
  }

  const array: unknown[] = [];

  for (let idx = 0; idx < size; idx += 1) {
    array.push(createPrimitiveValue(randomType()));
  }

  return array;
}

// endregion

// region Homogeneous Object

export function createHomogeneousObject(
  size: number,
  type: PrimitiveType,
  resetSeed = true,
): Record<string, unknown> {
  if (resetSeed) {
    seed('homogeneous-object');
  }

  const object: Record<string, unknown> = {};

  for (let idx = 0; idx < size; idx += 1) {
    object[`property-${idx}`] = createPrimitiveValue(type);
  }

  return object;
}

// endregion

// region Heterogeneous Object

export function createHeterogeneousObject(
  size: number,
  resetSeed = false,
): Record<string, unknown> {
  if (resetSeed) {
    seed('heterogeneous-object');
  }

  const object: Record<string, unknown> = {};

  for (let idx = 0; idx < size; idx += 1) {
    object[`property-${idx}`] = createPrimitiveValue(randomType());
  }

  return object;
}

// endregion

// region Nested Array

export function createNestedArray(resetSeed = true): unknown[] {
  if (resetSeed) {
    seed('nested-array');
  }

  return [
    null,
    randBoolean(),
    randNumber(),
    randFloat(),
    randPhrase(),
    [],
    createHomogeneousArray(5, randomType(), false),
    createHeterogeneousArray(5, false),
    {},
    createHomogeneousObject(5, randomType(), false),
    createHeterogeneousObject(5, false),
  ];
}

// endregion

// region Nested Object

export function createNestedObject(resetSeed = true): Record<string, unknown> {
  if (resetSeed) {
    seed('nested-object');
  }

  return {
    null: null,
    boolean: randBoolean(),
    integer: randNumber(),
    float: randFloat(),
    string: randPhrase(),
    emptyArray: [],
    homogeneousArray: createHomogeneousArray(5, randomType(), false),
    heterogeneousArray: createHeterogeneousArray(5, false),
    emptyObject: {},
    homogeneousObject: createHomogeneousObject(5, randomType(), false),
    heterogeneousObject: createHeterogeneousObject(5, false),
  };
}

// endregion

// region Complex Object

export function createComplexObject(size: number): Record<string, unknown> {
  seed('complex-object');

  const root: Record<string, unknown> = createNestedObject(false);

  let cursor = root;

  for (let idx = 0; idx < size; idx += 1) {
    const nested = createNestedObject(false);

    cursor.nested = nested;

    cursor = nested;
  }

  return root;
}

// endregion
