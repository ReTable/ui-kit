# @tabula/ui-data-type-icon

Icons for data types.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-data-type-icon`.

```bash
pnpm add @tabula/ui-data-type-icon
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

You can use icon as React component.

```tsx
import { UiArrayIcon } from '@tabula/ui-data-type-icon';

function ComponentWithIcon() {
  return <UiArrayIcon />
}
```

Or you can import icon URL which should be resolved by yours bundler:

```tsx
import { uiArrayIconUrl } from "@tabula/ui-data-type-icon";
```

Also, if you use Vite, you can use icon in your styles too:

```scss
.awesome-component {
  background-image: url('@tabula/ui-data-type-icon/array.svg');
}
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
