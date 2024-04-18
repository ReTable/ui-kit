# @tabula/ui-tree

Allows to render trees.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-tree`.

```bash
pnpm add @tabula/ui-tree
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

Usage of the `UiTree` is simple:

```tsx
import { FC } from 'react';

import { Tree as BaseTree, BranchComponentType, LeafComponentType, UiTree } from '@tabula/ui-tree';

import styles from './Tree.module.css';

type Data = {
  name: string;
};

type Tree = BaseTree<number, Data>;

const Branch: BranchComponentType<number, Data> = ({ data, isExpanded, level, onToggle }) => (
  <div className={styles.branch} style={{ '--level': level }}>
    <button className={styles.branchToggle} onClick={onToggle} type="button">
      {isExpanded ? '-' : '+'}
    </button>
    <span className={styles.branchName}>{data.name}</span>
  </div>
);

const Leaf: LeafComponentType<number, Data> = ({ data, level }) => (
  <div className={styles.leaf} style={{ '--level': level }}>
    <span className={styles.leafName}>{data.name}</span>
  </div>
);

type Props = {
  tree: Tree;
};

export const Tree: FC<Props> = ({ tree }) => (
  <UiTree className={styles.tree} branchComponent={Branch} leafComponent={Leaf} tree={tree} />
);
```

## Options

### `tree`

The `tree` property contains a tree data to render. You can define type of ids, and data which expected in the tree
structure.

Ids of items must be unique and has type `number` or `string`.

See typings for more information.

### `branchComponent`

The `branchComponent` expects a React component which will be used to render branch element.

We provide following properties for branches:

- `id` - ID of an item;
- `data` - data of an item;
- `level` - nesting level of branch starting from `0`;
- `isExpanded` - flag which says about expanded branch or collapsed;
- `onToggle` - callback which used to toggle branch, and which could be assigned to the interactive element inside of
  component.

### `leafComponent`

The `leafComponent` expects a React component which will be used to render leaf element.

We provide following properties for leafs:

- `id` - ID of an item;
- `data` - data of an item;
- `level` - nesting level of leaf starting from `0`.

### `pattern` and `match`

This is a pair of properties.

The `pattern` is string value which contains a pattern which will be provided to the `match` function.

The `match` function is predicated, which takes node and pattern, and returns boolean flag.

If one of them will not be provided, or the `pattern` will be is an empty string, then search will be ignored
completely.

### `className`

You can provide custom CSS class which will be assigned to the root element.

### `testId`

We allow to assign test ID for the root element.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
