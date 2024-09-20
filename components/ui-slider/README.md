# @tabula/ui-slider

Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-slider`.

```bash
pnpm add @tabula/ui-slider
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

You can import `UiCheckbox` component and use for your purposes:

```tsx
import { useState } from 'react';

import { UiSlider } from '@tabula/ui-slider';

export function CreativityLevel() {
  const [level, setLevel] = useState(0);

  return <UiSlider min={0} max={1} step={0.1} onChange={setLevel} value{level} />
}
```

## Options

There are a few general properties which supported by component.

### `min` and `max`

Allows to specify value constraints. Default values are `0` for `min` and `100` for `max`.

### `step`

Allows to specify step of value changes. Default value is `0`. The step can be integer or decimal value.

### `isDisabled`

This property allows to disable a control.

### `variant`

Allows to use one of available look & feel variants. The `normal` variant is used by default.

## Additional options

### `className`

An optional `className` property to customize styles of component.

### `id` and `name`

You can provide `id` for root `label` element, and `name` for underlying `input` element.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
