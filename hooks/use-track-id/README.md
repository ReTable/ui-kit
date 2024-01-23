# @tabula/use-track-id

Helps generate track id for analytics purposes.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/use-track-id`.

```bash
pnpm add @tabula/use-track-id
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Type

`function useTrackId(scope?: string | null | undefined, id?: string | false | null): string | undefined`

## Usage

```typescript
import { useTrackId } from "@tabula/use-track-id";

// ...
const trackId = useTrackId("parent", "child");
// ...
```

| Scope       | Id          | Result            |
|-------------|-------------|-------------------|
| `undefined` | `undefined` | `undefined`       |
| `undefined` | `null`      | `undefined`       |
| `undefined` | `false`     | `undefined`       |
| `undefined` | `""`        | `undefined`       |
| `undefined` | `"child"`   | `undefined`       |
| `null`      | `undefined` | `undefined`       |
| `null`      | `null`      | `undefined`       |
| `null`      | `false`     | `undefined`       |
| `null`      | `""`        | `undefined`       |
| `null`      | `"child"`   | `undefined`       |
| `""`        | `undefined` | `undefined`       |
| `""`        | `null`      | `undefined`       |
| `""`        | `false`     | `undefined`       |
| `""`        | `""`        | `undefined`       |
| `""`        | `"child"`   | `undefined`       |
| `"parent"`  | `undefined` | `"parent"`        |
| `"parent"`  | `null`      | `"parent"`        |
| `"parent"`  | `false`     | `undefined`       |
| `"parent"`  | `""`        | `undefined`       |
| `"parent"`  | `"child"`   | `"parent--child"` |

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
