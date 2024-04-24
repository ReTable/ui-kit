# @tabula/track-id

Helps generate track ids for analytics purposes.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/track-id`.

```bash
pnpm add @tabula/track-id
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## API

### `getTrackId`

Accepts scope and id, and returns resulting id.

#### Type

`function getTrackId(scope?: string | null | undefined, id?: string | false | null): string | undefined`

#### Usage

```typescript
import { getTrackId } from "@tabula/track-id";

const trackId = getTrackId("parent", "child");
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

### `getTrackIds`

Accepts scope and ids map, and returns resulting ids map.

#### Type

`function getTrackIds(scope: string | null | undefined, ids: Record<string, string | false | null | undefined>): Record<string, string | undefined>`

#### Usage

```typescript
import { getTrackIds } from "@tabula/track-id";

const trackIds = getTrackIds("parent", {
  awesomeChild: "awesome-child"
});
```

| Scope       | Ids                                                                                        |                                 |
|-------------|--------------------------------------------------------------------------------------------|---------------------------------|
| `undefined` | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ }`                           |
| `null`      | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ }`                           |
| `""`        | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ }`                           |
| `"parent"`  | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isString: "parent--child" }` |

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
