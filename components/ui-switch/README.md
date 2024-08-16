# @tabula/ui-switch

Switches allows users to turn an individual option on or off.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-switch`.

```bash
pnpm add @tabula/ui-switch
```


You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

You can import `UiSwitch` component and use for your purposes:

```tsx
import { useState } from 'react';

import { UiSwitch } from '@tabula/ui-switch';

export function AwesomeComponent() {
  const [isChecked, setIsChecked] = useState(false);

  return <UiSwitch isChecked={isChecked} onChange={setIsChecked} />;
}
```

## Options

There are a few general properties which supported by component.

### `isChecked`

This property controls boolean value of checkbox.

### `isDisabled`

This property allows to disable a control.

### `isReversed`

This property allows to reverse layout.

### `size`

This property allows to use one of supported sizes of control.

Are `small` and `medium` sizes are supported now. The `medium` size is default.

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
