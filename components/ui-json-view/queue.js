const tree = {
  number: 10,
  object: {
    array: [1, 2, 3],
    string: 'Hello, world',
  },
  null: null,
};

const id = (() => {
  let index = 0;

  return () => {
    const current = index;

    index += 1;

    return current;
  };
})();

function appendArrayTo(root) {
  let cursor = {};
}

function* traverse(source) {
  if (source == null) {
    return yield {
      key: id().toString(),

      type: 'null',
    };
  }

  if (typeof source === 'boolean') {
    return yield {
      key: id().toString(),

      type: 'boolean',
      value: source,
    };
  }

  if (typeof source === 'number') {
    return yield {
      key: id().toString(),

      type: 'number',
      value: source,
    };
  }

  if (typeof source === 'string') {
    return yield {
      key: id().toString(),

      type: 'string',
      value: source,
    };
  }

  const queue = {
    next: null,

    key: id().toString(),

    value: source,
  };

  let cursor = queue;

  while (cursor != null) {
    yield cursor.value;

    cursor = queue.next;
  }
}

for (const item of traverse(true)) {
  console.log(item);
}
