# @tabula/ui-icon

## 3.0.0

### Patch Changes

- Updated dependencies [[`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9), [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9), [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9), [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9), [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9)]:
  - @tabula/ui-theme@1.0.0

## 2.0.1

### Patch Changes

- Updated dependencies [[`342334d`](https://github.com/ReTable/ui-kit/commit/342334dbb1c0b10d890f4daa3bff0899498470b4)]:
  - @tabula/ui-theme@0.4.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`ca899ca`](https://github.com/ReTable/ui-kit/commit/ca899ca597b7a1080409b29f3eea47167317c021)]:
  - @tabula/ui-theme@0.4.0

## 1.0.2

### Patch Changes

- Updated dependencies [[`b66aaf3`](https://github.com/ReTable/ui-kit/commit/b66aaf3a180fe9d1ca27a8d00f166761fb9745b6)]:
  - @tabula/ui-theme@0.3.1

## 1.0.1

### Patch Changes

- [#27](https://github.com/ReTable/ui-kit/pull/27) [`feade8b`](https://github.com/ReTable/ui-kit/commit/feade8b2f8e51fc2cf5f7805526808f310d66e07) Thanks [@demiazz](https://github.com/demiazz)! - update conditional exports

- Updated dependencies [[`feade8b`](https://github.com/ReTable/ui-kit/commit/feade8b2f8e51fc2cf5f7805526808f310d66e07), [`a9fdcdd`](https://github.com/ReTable/ui-kit/commit/a9fdcdd3916cd737a63eb427d8278a5b7c303769)]:
  - @tabula/ui-theme@0.3.0

## 1.0.0

### Patch Changes

- Updated dependencies [[`82db344`](https://github.com/ReTable/ui-kit/commit/82db34478868cc495baee9c9ab3ae4afef9e8a3a)]:
  - @tabula/ui-theme@0.2.0

## 0.1.2

### Patch Changes

- [#13](https://github.com/ReTable/ui-kit/pull/13) [`b42e88b`](https://github.com/ReTable/ui-kit/commit/b42e88beb7f64033c7d7d963c9b1373ce6e1325d) Thanks [@demiazz](https://github.com/demiazz)! - fix typings export

## 0.1.1

### Patch Changes

- [#5](https://github.com/ReTable/ui-kit/pull/5) [`dd91f38`](https://github.com/ReTable/ui-kit/commit/dd91f380c32ac00e7028c6fa30a9d1e00380238d) Thanks [@demiazz](https://github.com/demiazz)! - generate correct component names

  The `svgr` usually generate `Svg<FileName>` component names.

  Now we generate `Ui<FileName>Icon` component names.

  This naming is more intuitive for using with React Dev Tools.

## 0.1.0

### Minor Changes

- [#3](https://github.com/ReTable/ui-kit/pull/3) [`76aa561`](https://github.com/ReTable/ui-kit/commit/76aa56191aa4ee7c0eae465eca55d2d4ea5a433f) Thanks [@demiazz](https://github.com/demiazz)! - add `@tabula/ui-icon` package

  Icons are divided into namespaces:

  - `dataTypes`
  - `separators`

  You can import and use icons as standalone components:

  ```tsx
  import { UiArrayIcon } from '@tabula/ui-icon/dataTypes';

  function ComponentWithIcon() {
    return <UiArrayIcon />;
  }
  ```
