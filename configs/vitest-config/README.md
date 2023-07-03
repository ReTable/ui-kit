# @tabula/vitest-config

Configuration for the Vitest.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/vitest-config`.

```bash
pnpm add @tabula/vitest-config --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

Add the `vitest.config.ts` file to the root:

```typescript
export { node as default } from '@tabula/vitest-config';
```

or

```typescript
export { browser as default } from '@tabula/vitest-config';
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
