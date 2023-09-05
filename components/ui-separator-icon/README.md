# @tabula/ui-separator-icon

Icons for separators.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-separator-icon`.

```bash
pnpm add @tabula/ui-separator-icon
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

```tsx
import { UiCommaIcon } from '@tabula/ui-separator-icon';

function ComponentWithIcon() {
  return <UiCommaIcon />
}
```

Or you can import icon URL which should be resolved by yours bundler:

```tsx
import { uiCommaIconUrl } from "@tabula/ui-separator-icon";
```

Also, if you use Vite, you can use icon in your styles too:

```scss
.awesome-component {
  background-image: url('@tabula/ui-separator-icon/comma.svg');
}
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
