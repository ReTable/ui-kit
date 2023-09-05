# @tabula/ui-separator-icon

## 0.2.0

### Minor Changes

- [#57](https://github.com/ReTable/ui-kit/pull/57) [`cc71b60`](https://github.com/ReTable/ui-kit/commit/cc71b604ff6196348ea3badf03df01d3d0dbbe6e) Thanks [@demiazz](https://github.com/demiazz)! - added exports of SVG files

  For example, you can export URL of files like this:

  ```tsx
  import { uiCommaIconUrl } from '@tabula/ui-separator-icon';
  ```

  It returns the string with relative path to the SVG file, which should be processed by yours bundler.

  Also, you can import SVG files directly, from Sass for example:

  ```scss
  .awesome-component {
    background-image: url('@tabula/ui-separator-icon/comma.svg');
  }
  ```

  Example above should work with Vite bundler.

## 0.1.2

### Patch Changes

- [#28](https://github.com/ReTable/ui-kit/pull/28) [`b66aaf3`](https://github.com/ReTable/ui-kit/commit/b66aaf3a180fe9d1ca27a8d00f166761fb9745b6) Thanks [@demiazz](https://github.com/demiazz)! - restore `typings` field in the `package.json`

## 0.1.1

### Patch Changes

- [#27](https://github.com/ReTable/ui-kit/pull/27) [`feade8b`](https://github.com/ReTable/ui-kit/commit/feade8b2f8e51fc2cf5f7805526808f310d66e07) Thanks [@demiazz](https://github.com/demiazz)! - update conditional exports

## 0.1.0

### Minor Changes

- [#15](https://github.com/ReTable/ui-kit/pull/15) [`82db344`](https://github.com/ReTable/ui-kit/commit/82db34478868cc495baee9c9ab3ae4afef9e8a3a) Thanks [@demiazz](https://github.com/demiazz)! - extracted separator icons from the `@tabula/ui-icon`
