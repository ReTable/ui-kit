# @tabula/ui-node-icon

Icons for nodes.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-node-icon`.

```bash
pnpm add @tabula/ui-node-icon
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

We provide three size of icons:

  - **small**: monochrome instead of branded icons, 16x16px;
  - **medium**: coloured, 24x24px;
  - **large** coloured, 32x32px.

### Small icons

You can import a small icon in the following way:

```tsx
import { UiInnerJoinSIcon } from '@tabula/ui-node-icon';
```

Or you can import all small icons:

```tsx
import { UiNodeSIcons } from '@tabula/ui-node-icon';

const ComponentWithIcon = () => <UiNodeSIcons.UiInnerJoinSIcon />;
```

### Medium icons

You can import a small icon in the following way:

```tsx
import { UiInnerJoinMIcon } from '@tabula/ui-node-icon';
```

Or you can import all small icons:

```tsx
import { UiNodeMIcons } from '@tabula/ui-node-icon';

const ComponentWithIcon = () => <UiNodeMIcons.UiInnerJoinMIcon />;
```

### Large icons

You can import a small icon in the following way:

```tsx
import { UiInnerJoinLIcon } from '@tabula/ui-node-icon';
```

Or you can import all small icons:

```tsx
import { UiNodeLIcons } from '@tabula/ui-node-icon';

const ComponentWithIcon = () => <UiNodeMIcons.UiInnerJoinLIcon />;
```

## Disabled State

Medium and large icons have disabled state. They have grayscale colors in disabled state.

Disabled state can be activated in two ways: explicit providing of the `isDisabled` property,
or when a parent which contains an icon is disabled (for example, disabled button).

The first way is explicit providing of the `isDisabled` property:

```tsx
import { UiInnerJoinMIcon } from '@tabula/ui-node-icon';

const DisabledIcon = () => <UiInnerJoinMIcon isDisabled />
```

The second way is when a parent which contains the icon is disabled:

```tsx
import { UiInnerJoinMIcon } from '@tabula/ui-node-icon';

const DisabledParentWithIcon = () => (
  <button disabled>
    <div>
      <UiInnerJoinMIcon />
    </div>
  </button>
);
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
