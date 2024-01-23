# @tabula/ui-analytics

## 0.3.1

### Patch Changes

- [#126](https://github.com/ReTable/ui-kit/pull/126) [`f5fb4fe`](https://github.com/ReTable/ui-kit/commit/f5fb4fef44e8b7451d56e4f4957e8a6eaa3a07ce) Thanks [@demiazz](https://github.com/demiazz)! - use `@tabula/use-track-id` and `@tabula/use-track-ids` inside

- Updated dependencies [[`f5fb4fe`](https://github.com/ReTable/ui-kit/commit/f5fb4fef44e8b7451d56e4f4957e8a6eaa3a07ce), [`f5fb4fe`](https://github.com/ReTable/ui-kit/commit/f5fb4fef44e8b7451d56e4f4957e8a6eaa3a07ce)]:
  - @tabula/use-track-id@0.1.0
  - @tabula/use-track-ids@0.1.0

## 0.3.0

### Minor Changes

- [#124](https://github.com/ReTable/ui-kit/pull/124) [`9460651`](https://github.com/ReTable/ui-kit/commit/9460651beb9e5331d561d912769ab058f4747cc0) Thanks [@demiazz](https://github.com/demiazz)! - returns `undefined` instead of `null` from hooks

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
