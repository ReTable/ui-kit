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

| Track Id  | Id            | Result              |
|-----------|---------------|---------------------|
| `undefined` | `undefined` | `null`              |
| `undefined` | `null`      | `null`              |
| `undefined` | `false`     | `null`              |
| `undefined` | `""`        | `null`              |
| `undefined` | `"child"`   | `null`              |
| `null`      | `undefined` | `null`              |
| `null`      | `null`      | `null`              |
| `null`      | `false`     | `null`              |
| `null`      | `""`        | `null`              |
| `null`      | `"child"`   | `null`              |
| `""`        | `undefined` | `null`              |
| `""`        | `null`      | `null`              |
| `""`        | `false`     | `null`              |
| `""`        | `""`        | `null`              |
| `""`        | `"child"`   | `null`              |
| `"parent"`  | `undefined` | `"parent"`          |
| `"parent"`  | `null`      | `"parent"`          |
| `"parent"`  | `false`     | `null`              |
| `"parent"`  | `""`        | `null`              |
| `"parent"`  | `"child"`   | `"parent--child"`   |

### `useUiTrackIds`

This hook allows to fetch track id from context and build ids map.

#### Type

`function useUiTrackId(ids: Record<string, string | null | false>): Record<string, string> | Record<string, null>`

#### Usage

```typescript
import { useUiTrackIds } from "@tabula/ui-analytics";
```

| Track Id    | Ids                                                                |                                                                             |
|-------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `undefined` | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
| `null`      | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
| `"'`        | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
| `"parent"`  | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: "parent--child" }` |

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
