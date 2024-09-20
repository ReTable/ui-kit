# @tabula/ui-checkbox

Checkbox control for forms.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-checkbox`.

```bash
pnpm add @tabula/ui-checkbox
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

You can import `UiCheckbox` component and use for your purposes:

```tsx
import { useState } from 'react';

import { UiCheckbox } from '@tabula/ui-checkbox';

export function AwesomeComponent() {
  const [isChecked, setIsChecked] = useState(false);

  return <UiCheckbox isChecked={isChecked} onChange={setIsChecked} />;
}
```

## Options

There are a few general properties which supported by component.

### `isChecked`

This property controls boolean value of checkbox.

### `isIndeterminate`

You can use indeterminate state of checkbox.

### `isDisabled`

This property allows to disable a control.`

## Additional options

### `className`

An optional `className` property to customize styles of component.

### `style`

An optional `style` property to customize styles of component through `style` attribute.

### `id` and `name`

You can provide `id` for root `label` element, and `name` for underlying `input` element.

### `testId`

For testing purposes, we are support `testId` property, which be translated to the `data-testid` attribute on the root
`label` element.

### `trackId`

For analytics purposes, we are support `trackId` property, which be translated to the `data-track-id` attribute on the
root `label` element.

## Handlers

## `onChange`

We support the `onChange` handler only, which received a new boolean state of the control.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
