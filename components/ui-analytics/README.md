# @tabula/ui-analytics

Allows to provide tracking ids to components.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-analytics`.

```bash
pnpm add @tabula/ui-analytics
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

### `UiAnalytics`

This component provides `trackId` property through context to the children component.

```typescript jsx
import { UiAnalytics } from "@tabula/ui-analytics";

// ...
<UiAnalytics trackId="awesome-id">
  {/* ... */}
</UiAnalytics>
// ...
```

### `useUiTrackId`

This hook allows to fetch track id from context.

#### Type

`function useUiTrackId(id?: string): string | null`

#### Usage

```typescript
import { useUiTrackId } from "@tabula/ui-analytics";
```

| Track Id  | Id            | Result            |
|-----------|---------------|-------------------|
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

### `useUiTrackIds`

This hook allows to fetch track id from context and build ids map.

#### Type

`function useUiTrackId(ids: Record<string, string | null | false>): Record<string, string> | Record<string, null>`

#### Usage

```typescript
import { useUiTrackIds } from "@tabula/ui-analytics";
```

| Track Id    | Ids                                                                                        |                                 |
|-------------|--------------------------------------------------------------------------------------------|---------------------------------|
| `undefined` | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ }`                           |
| `null`      | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ }`                           |
| `""`        | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ }`                           |
| `"parent"`  | `{ isUndefined: undefined, isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isString: "parent--child" }` |

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
