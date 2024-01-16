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

| Track Id   | Id        | Result           |
|------------|-----------|------------------|
| `null`     | `null`    | `null`           |
| `null`     | `"`      | `null`           |
| `null`     | `"child"` | `null`           |
| `"parent"` | `null`    | `"parent"`       |
| `"parent"` | `"`      | `"parent"`       |
| `"parent"` | `"child"` | `"parent-child"` |

### `useUiTrackIds`

This hook allows to fetch track id from context and build ids map.

#### Type

`function useUiTrackId<Ids extends Record<string, string>(ids: Ids): Record<string, string> | Record<string, null>`

#### Usage

```typescript
import { useUiTrackIds } from "@tabula/ui-analytics";
```

| Track Id   | Id                                        | Result                                                  |
|------------|-------------------------------------------|---------------------------------------------------------|
| `null`     | `{  empty :  "" ,  nonEmpty :  "child" }` | `null`                                                  |
| `"parent"` | `{  empty :  " ,  nonEmpty :  "child" }` | `{  empty :  "parent" ,  nonEmpty :  "parent--child" }` |

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
