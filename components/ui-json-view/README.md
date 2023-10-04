# @tabula/ui-json-view

Allows to view JSON in interactive way.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-json-view`.

```bash
pnpm add @tabula/ui-json-view
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

We provide a single `UiJsonView` component:

```tsx
import { FC } from 'react';

import { UiJsonView } from '@tabula/ui-json-view';

type Props = {
  source: string;
};

const Preview: FC<Props> = ({ source }) => <UiJsonView isInteractive source={source} />;
```

## Options

### `isInteractive`

The `isInteractive` option enables expand/collapse controls for arrays/objects and activates to use `collapsed` option.

Also, it enables default and user actions on each line instead of closing and placeholder lines.

### `showDataTypes`

If the `showDataTypes` option is enabled, then type name is shown near of each primitive value instead of `null`.

### `showObjectSize`

if the `showObjectSize` option is enabled, then array/object size is shown near of open line.

### `onToggleDataTypes` / `onToggleObjectSize`

You can provide handlers to allow toggle `showDataTypes` and `showObjectSize` options.

```tsx
import { FC } from 'react';

import { UiJsonView } from '@tabula/ui-json-view';

type Props = {
  source: string;
};

const Preview: FC<Props> = ({ source }) => {
  const [showDataTypes, onToggleDataTypes] = useState(false);
  const [showObjectSize, onToggleObjectSize] = useState(false);

  return (
    <UiJsonView
      onToggleDataTypes={onToggleDataTypes}
      onToggleObjectSize={onToggleObjectSize}
      showDataTypes={showDataTypes}
      showObjectSize={showObjectSize}
      source={source}
    />
  );
};
```

If no one of handlers is provided, then options controls is hidden.

### `shortStringAfterLength`

That option allows to trim long string values after the given length.

But a user can click by a string value to toggle between full and trimmed versions of the value.

### `collapsed`

This is option allows to collapse arrays and object after the given depth.

**NOTE**: That option is working only when `isInteractive` option is enabled too.

If `collapsed` is equals `true`, then all arrays and objects is collapsed.

If `collapsed` is a number, then arrays and objects after the given level is collapsed.

### `limni`

This option allows to render limited number of lines.

Usage of `limit` option is disable interactions like possibility to expand/collapse arrays and objects.

But it's possible to control data types and object size visibility, and toggle trimmed lines.

### `isVirtual`

The `UiJsonView` supports two render modes: static (default) and virtual.

Virtual render mode is uses virtualized list under the hood.

### `actions`

By default, we provide `Copy` and `Copy JSONPath` actions.

But we allow to user to provide additional options.

Each action handler is called with two parameters: JSONPath of the current line, and the query function, which returns
a value by the given path from the original JSON value.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
