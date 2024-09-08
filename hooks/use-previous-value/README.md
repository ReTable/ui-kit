# @tabula/use-previous-value

Allows to keep previous value.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/use-previous-value`.

```bash
pnpm add @tabula/use-previous-value
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

```tsx
import { ReactNode } from 'react';

import { usePreviousValue } from '@tabula/use-previous-value';

type Props<T> = {
  value: T;
}

export function ChangesDetector<T>({ value }: Props<T>): ReactNode {
  const previousValue = usePreviousValue(value);

  return previousValue != null && value !== previousValue ? 'Changed' : 'Not changed';
}
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
