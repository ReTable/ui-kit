# @tabula/ui-icon

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
