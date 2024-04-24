# @tabula/tree-utils

Utilities for working with simple tree representation.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/tree-utils`.

```bash
pnpm add @tabula/tree-utils
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## API

### Tree

This package works with trees, which defined in the simple format.

```typescript
type Leaf = {
  id: number | string;
};

type Branch = {
  id: number | string;

  children: Leaf[];
};

type Node = Leaf | Branch;

type Tree = Node[];
```

Of course, real types allows to extend properties of nodes.

### Example

We use the following tree for examples:

```typescript
const tree = [
  { id: '1' },
  {
    id: '2',
    children: [
      { id: '2-1' },
      {
        id: '2-2',
        children: [
          { id: '2-2-1' },
          {
            id: '2-2-2',
            children: [{ id: '2-2-2-1' }, { id: '2-2-2-2' }],
          },
          { id: '2-2-3' },
        ],
      },
    ],
  },
  { id: '3' },
  {
    id: '4',
    children: [
      { id: '4-1' },
      { id: '4-2' },
      {
        id: '4-3',
        children: [{ id: '4-3-1' }, { id: '4-3-2' }],
      },
    ],
  },
];
```

### Traverse

There are `breadth` and `depth` functions available to traverse by the tree in iterator style. Each of them returns
traverse item on each step, which can be specific for leaf or branch.

Each item has the following properties:

- `node`: is node object itself;
- `isBranch`: boolean value which `true` if node is branch;
- `isLeaf`: boolean value which `true` if node is leaf;
- `level`: nesting level starting from `0`;
- `parentId`: optional id of direct parent node;
- `parentIds`: list of all parent ids from each nesting level.

We mark a node as branch if node has `children` property (even if it's an empty array and hasn't any children).

### `breadth`

This method returns iterator for traverse by tree using breadth-first search.

```typescript
import { breadth } from "@tabula/tree-utils";

for (const { node } of breadth(tree)) {
  console.log(node.id);
}

// 1, 2, 3, 4, 2-1, 2-2, 4-1, 4-2, 4-3, 2-2-1, 2-2-2, 2-2-3, 4-3-1, 4-3-2, 2-2-2-1, 2-2-2-2
```

#### `filter`

You can pass filter for nodes.

```typescript
import { breadth } from "@tabula/tree-utils";

const filter = (item) => item.level < 3 && item.node.id !== '4';

for (const { node } of breadth(tree, { filter })) {
  console.log(node.id);
}

// 1, 2, 3, 2-1, 2-2, 2-2-1, 2-2-2, 2-2-3
```

#### `subTree`

You can pass id for subtree, to iterate over that subtree.

```typescript
import { breadth } from "@tabula/tree-utils";

for (const { node } of breadth(tree, { subTree: '2-2' })) {
  console.log(node.id);
}

// 2-2, 2-2-1, 2-2-2, 2-2-3, 2-2-2-1, 2-2-2-2
```

#### `filter` and `subTree`

You can combine the `subTree` and `filter` options. There are items of subtree will be filtered.

```typescript
import { breadth } from "@tabula/tree-utils";

const filter = (item) => item.level < 3;

for (const { node } of breadth(tree, { filter, subTree: '2-2' })) {
  console.log(node.id);
}

// 2-2, 2-2-1, 2-2-2, 2-2-3
```

### `depth`

This method returns iterator for traverse by tree using depth-first search.

```typescript
import { depth } from "@tabula/tree-utils";

for (const { node } of depth(tree)) {
  console.log(node.id);
}

// 1, 2, 2-1, 2-2, 2-2-1, 2-2-2, 2-2-2-1, 2-2-2-2, 2-2-3, 3, 4, 4-1, 4-2, 4-3, 4-3-1, 4-3-2
```

#### `filter`

You can pass filter for nodes.

```typescript
import { depth } from "@tabula/tree-utils";

const filter = (item) => item.level < 3 && item.node.id !== '4';

for (const { node } of depth(tree, { filter })) {
  console.log(node.id);
}

// 1, 2, 2-1, 2-2, 2-2-1, 2-2-2, 2-2-3, 3
```

#### `subTree`

You can pass id for subtree, to iterate over that subtree.

```typescript
import { depth } from "@tabula/tree-utils";

for (const { node } of depth(tree, { subTree: '2-2' })) {
  console.log(node.id);
}

// 2-2, 2-2-1, 2-2-2, 2-2-2-1, 2-2-2-2, 2-2-3
```

#### `filter` and `subTree`

You can combine the `subTree` and `filter` options. There are items of subtree will be filtered.

```typescript
import { depth } from "@tabula/tree-utils";

const filter = (item) => item.level < 3;

for (const { node } of depth(tree, { filter, subTree: '2-2' })) {
  console.log(node.id);
}

// 2-2, 2-2-1, 2-2-2, 2-2-3
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
