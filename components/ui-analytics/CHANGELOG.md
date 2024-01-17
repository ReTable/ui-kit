# @tabula/ui-analytics

## 0.2.0

### Minor Changes

- [#121](https://github.com/ReTable/ui-kit/pull/121) [`62145c6`](https://github.com/ReTable/ui-kit/commit/62145c6a6ab3710d4ecea42479fdfade32729ad0) Thanks [@demiazz](https://github.com/demiazz)! - update behaviour of hooks

  Changes for `useUiTrackId`:

  `function useUiTrackId(id?: string): string | null`

  | Track Id    | Id          | Result            |
  | ----------- | ----------- | ----------------- |
  | `undefined` | `undefined` | `null`            |
  | `undefined` | `null`      | `null`            |
  | `undefined` | `false`     | `null`            |
  | `undefined` | `""`        | `null`            |
  | `undefined` | `"child"`   | `null`            |
  | `null`      | `undefined` | `null`            |
  | `null`      | `null`      | `null`            |
  | `null`      | `false`     | `null`            |
  | `null`      | `""`        | `null`            |
  | `null`      | `"child"`   | `null`            |
  | `""`        | `undefined` | `null`            |
  | `""`        | `null`      | `null`            |
  | `""`        | `false`     | `null`            |
  | `""`        | `""`        | `null`            |
  | `""`        | `"child"`   | `null`            |
  | `"parent"`  | `undefined` | `"parent"`        |
  | `"parent"`  | `null`      | `"parent"`        |
  | `"parent"`  | `false`     | `null`            |
  | `"parent"`  | `""`        | `null`            |
  | `"parent"`  | `"child"`   | `"parent--child"` |

  Changes for `useUiTrackIds`:

  `function useUiTrackId(ids: Record<string, string | null | false>): Record<string, string> | Record<string, null>`

  | Track Id    | Ids                                                                |                                                                             |
  | ----------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
  | `undefined` | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
  | `null`      | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
  | `"'`        | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: null }`            |
  | `"parent"`  | `{ isNull: null, isFalse: false, isEmpty: "", isString: "child" }` | `{ isNull: null, isFalse: null, isEmpty: null, isString: "parent--child" }` |

## 0.1.0

### Minor Changes

- [#119](https://github.com/ReTable/ui-kit/pull/119) [`00ffe82`](https://github.com/ReTable/ui-kit/commit/00ffe824ca0b8cc483ad360feb972e3ca72a8682) Thanks [@demiazz](https://github.com/demiazz)! - add `@tabula/ui-analytics` package
