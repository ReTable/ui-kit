---
"@tabula/ui-analytics": minor
---

update behaviour of hooks

Changes for `useUiTrackId`:

`function useUiTrackId(id?: string): string | null`

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

Changes for `useUiTrackIds`:

`function useUiTrackId(ids: Record<string, string | null | false>): Record<string, string> | Record<string, null>`

| Track Id    | Ids                                                                |                                                                             |
|-------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `undefined` | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
| `null`      | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
| `"'`        | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
| `"parent"`  | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: "parent--child" }` |
