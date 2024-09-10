# @tabula/use-previous

Allow to track previous values and their changes.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/use-previous`.

```bash
pnpm add @tabula/use-previous
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

The hook result is previous value and `wasChanged` boolean flag. It allows to use `null` or `undefined` values safely.

It returns initial value and `false` on initial render.

```typescript
import { usePrevious } from '@tabula/use-previous';

const [previous, wasChanged] = usePrevious(0);

// previous === 0
// wasChanged === false
```

On next renders it returns previous value and `wasChanged` flag if previous and current values aren't equal.

```typescript
import { usePrevious } from '@tabula/use-previous';

// Initial render.
const [previous, wasChanged] = usePrevious(0);

// previous === 0
// wasChanged === false

// Next render.
const [previous, wasChanged] = usePrevious(0);

// previous === 0
// wasChanged === false

// Next render.
const [previous, wasChanged] = usePrevious(1);

// previous === 0
// wasChanged === true

// Next render.
const [previous, wasChanged] = usePrevious(2);

// previous === 1
// wasChanged === true
```

## Options

### `areEqual`

You can provide `areEqual` function which has the following signature:

```typescript
export type AreEqual<T> = (previous: T, current: T) => boolean;
```

If `areEqual` is provided, it will be used instead of `===` operator to detect changes.

It can be useful, when you want detect changes of complex objects, or objects from languages from which are compiled
to JavaScript (for example, Kotlin):

```typescript
const areEqual = (previous: KtObject, next: KtObject) => previous.equals(next);
```

IMPORTANT: Even if `areEqual` is provided, we will keep a new provided instance which provided on the current render.

### `onChanged`

You can provide `onChanged` function which has the following signature:

```typescript
export type OnChanged<T> = (previous: T, current: T) => void;
```

It will be called each time, when value is changed, including usage of `areEqual` function.

###

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
