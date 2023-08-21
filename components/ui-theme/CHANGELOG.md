# @tabula/ui-theme

## 0.4.0

### Minor Changes

- [#30](https://github.com/ReTable/ui-kit/pull/30) [`ca899ca`](https://github.com/ReTable/ui-kit/commit/ca899ca597b7a1080409b29f3eea47167317c021) Thanks [@demiazz](https://github.com/demiazz)! - add bold sans serif font face

## 0.3.1

### Patch Changes

- [#28](https://github.com/ReTable/ui-kit/pull/28) [`b66aaf3`](https://github.com/ReTable/ui-kit/commit/b66aaf3a180fe9d1ca27a8d00f166761fb9745b6) Thanks [@demiazz](https://github.com/demiazz)! - restore `typings` field in the `package.json`

## 0.3.0

### Minor Changes

- [#25](https://github.com/ReTable/ui-kit/pull/25) [`a9fdcdd`](https://github.com/ReTable/ui-kit/commit/a9fdcdd3916cd737a63eb427d8278a5b7c303769) Thanks [@demiazz](https://github.com/demiazz)! - Add font presets.

  You can use them through `vanilla-extract` variants:

  ```typescript
  import { style } from '@vanilla-extract/css';

  import { uiFonts } from '@tabula/ui-theme';

  export const root = style([uiFonts.sansSerif.regular24], {
    /* Your styles here. */
  });
  ```

  Or you can use them through Sass:

  ```scss
  @use '~@tabula/ui-theme' as theme;

  .root {
    @include theme.font-sans-serif-medium-24();
  }
  ```

### Patch Changes

- [#27](https://github.com/ReTable/ui-kit/pull/27) [`feade8b`](https://github.com/ReTable/ui-kit/commit/feade8b2f8e51fc2cf5f7805526808f310d66e07) Thanks [@demiazz](https://github.com/demiazz)! - update conditional exports

## 0.2.0

### Minor Changes

- [#15](https://github.com/ReTable/ui-kit/pull/15) [`82db344`](https://github.com/ReTable/ui-kit/commit/82db34478868cc495baee9c9ab3ae4afef9e8a3a) Thanks [@demiazz](https://github.com/demiazz)! - add brand and icon colors

## 0.1.1

### Patch Changes

- [#16](https://github.com/ReTable/ui-kit/pull/16) [`0babe0d`](https://github.com/ReTable/ui-kit/commit/0babe0ddce43e31ef2800bedcc6a6f5a156bc994) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 0.1.0

### Minor Changes

- [`33380b9`](https://github.com/ReTable/ui-kit/commit/33380b99ff577cede58daad5d7d5bac2ad495a48) Thanks [@demiazz](https://github.com/demiazz)! - add `@tabula/ui-theme` package
