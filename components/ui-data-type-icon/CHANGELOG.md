# @tabula/ui-data-type-icon

## 0.2.3

### Patch Changes

- [#169](https://github.com/ReTable/ui-kit/pull/169) [`4b3829d`](https://github.com/ReTable/ui-kit/commit/4b3829db6a0a58fadd22175d3a5ed344a4802c17) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 0.2.2

### Patch Changes

- [#111](https://github.com/ReTable/ui-kit/pull/111) [`b35c0fb`](https://github.com/ReTable/ui-kit/commit/b35c0fb03fde828f8366c45a7f84d710a327dd40) Thanks [@demiazz](https://github.com/demiazz)! - add `displayName` for exportable components for debug purposes

## 0.2.1

### Patch Changes

- [#60](https://github.com/ReTable/ui-kit/pull/60) [`1e873ca`](https://github.com/ReTable/ui-kit/commit/1e873ca1bff322bd5caaddf3d0c096279bb0020f) Thanks [@demiazz](https://github.com/demiazz)! - update docs

## 0.2.0

### Minor Changes

- [#58](https://github.com/ReTable/ui-kit/pull/58) [`eb7d981`](https://github.com/ReTable/ui-kit/commit/eb7d981049029b3b74dc3679e0af6318b4997df8) Thanks [@demiazz](https://github.com/demiazz)! - added exports of SVG files

  For example, you can export URL of files like this:

  ```tsx
  import { uiArrayIconUrl } from '@tabula/ui-data-type-icon';
  ```

  It returns the string with relative path to the SVG file, which should be processed by yours bundler.

  Also, you can import SVG files directly, from Sass for example:

  ```scss
  .awesome-component {
    background-image: url('@tabula/ui-data-type-icon/array.svg');
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

- [#15](https://github.com/ReTable/ui-kit/pull/15) [`82db344`](https://github.com/ReTable/ui-kit/commit/82db34478868cc495baee9c9ab3ae4afef9e8a3a) Thanks [@demiazz](https://github.com/demiazz)! - extracted data type icons from the `@tabula/ui-icon`
