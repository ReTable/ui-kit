# @tabula/ui-checkbox-tree

Allows to select items in the tree.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-checkbox-tree`.

```bash
pnpm add @tabula/ui-checkbox-tree
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

Usage of the `UiCheckboxTree` is simple:

```tsx
import { FC } from 'react';

import { UiCheckboxTree, Tree as BaseTree } from '@tabula/ui-checkbox-tree';

type Data = {
  name: string;
};

type Tree = BaseTree<number, Data>;

const labelOf = ({ name }: Data) => name;

type Props = {
  tree: Tree;
};

export const Tree: FC<Props> = ({ tree }) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  return (
    <UiCheckboxTree labelOf={labelOf} onChange={setSelected} selected={selected} tree={tree} />
  );
};
```

## Options

### `tree`

The `tree` property contains a tree data to render. You can define type of ids, and data which expected in the tree
structure.

Ids of items must be unique and has type `number` or `string`.

See typings for more information.

### `labelOf`

Function which will be called to get label of node.

### `selected`

Set of leaf's ids which is checked.

### `onChange`

Handler which accepts a set of checked leaf's ids.

The `UiCheckboxTree` always calls this callback with full set of checked ids, not only ids which checked after the latest
user's action.

### `className`

You can provide custom CSS class which will be assigned to the root element.

### `testId`

We allow to assign test ID for the root element.

## Empty Branches

If branch is empty then it's disabled and have no toggle button.

## Disabled State

Each item can have `isDisabled` property:

- if all items are disabled, then the `Select All` is disabled too;
- if branch is disabled, then all children is disabled too;
- if branch's children are disabled, then branch is disabled too;
- if user toggle branch or `Select All` when disabled items is presented, then disabled items aren't changed.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
