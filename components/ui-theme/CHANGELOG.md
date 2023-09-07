# @tabula/ui-theme

## 1.1.0

### Minor Changes

- [#64](https://github.com/ReTable/ui-kit/pull/64) [`f63c447`](https://github.com/ReTable/ui-kit/commit/f63c447e7e39a408bdb2a9db6340211fe317f715) Thanks [@demiazz](https://github.com/demiazz)! - add duration and easing variables

## 1.0.3

### Patch Changes

- [#50](https://github.com/ReTable/ui-kit/pull/50) [`61b5399`](https://github.com/ReTable/ui-kit/commit/61b5399bc55fa146cf4fdda1e7273cfb26a1d187) Thanks [@demiazz](https://github.com/demiazz)! - used short class names in production build

## 1.0.2

### Patch Changes

- [#48](https://github.com/ReTable/ui-kit/pull/48) [`aa911c0`](https://github.com/ReTable/ui-kit/commit/aa911c095dbfd7666b19e68997e229a10df5329e) Thanks [@demiazz](https://github.com/demiazz)! - add ai hover and pressed colors

## 1.0.1

### Patch Changes

- [#46](https://github.com/ReTable/ui-kit/pull/46) [`a2ef75d`](https://github.com/ReTable/ui-kit/commit/a2ef75d8d712bff6ea520792eb96f0c1889030a5) Thanks [@demiazz](https://github.com/demiazz)! - add new accent alpha color, status and column menu colors

## 1.0.0

### Major Changes

- [#38](https://github.com/ReTable/ui-kit/pull/38) [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9) Thanks [@demiazz](https://github.com/demiazz)! - change font variables names format:

  - `--tbl--fonts--sansSerif--semiBold10--letterSpacing` to `--tbl--fonts--sans-serif--semi-bold-10--letter-spacing`;
  - `$fonts--sansSerif--semiBold10--letterSpacing` to `$fonts--sans-serif--semi-bold-10--letter-spacing`

- [#38](https://github.com/ReTable/ui-kit/pull/38) [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9) Thanks [@demiazz](https://github.com/demiazz)! - change font mixins names format:

  - `font-sans-serif-semiBold-10` to `sans-serif--semi-bold-10`

### Minor Changes

- [#38](https://github.com/ReTable/ui-kit/pull/38) [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9) Thanks [@demiazz](https://github.com/demiazz)! - add brand color for SalesForce

- [#38](https://github.com/ReTable/ui-kit/pull/38) [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9) Thanks [@demiazz](https://github.com/demiazz)! - add following color namespaces:

  - `accentAlpha`
  - `accentSecondaryGray`
  - `accentShades`
  - `accent`
  - `background`
  - `borderControl`
  - `codeColumns`
  - `code`
  - `content`
  - `fillControl`
  - `indexed`
  - `neutralAlpha`
  - `neutral`
  - `table`
  - `whiteAlpha`

- [#38](https://github.com/ReTable/ui-kit/pull/38) [`d58761d`](https://github.com/ReTable/ui-kit/commit/d58761d645ba87164ba6f5be936d808b0527f3b9) Thanks [@demiazz](https://github.com/demiazz)! - change color variables names format.

  If a color variable is alpha, then we replace `-alpha--<X>` with `--A<X>`:

  - `uiTheme.colors.accentAlpha[60]` to `--tbl--colors--accent--A60`

  If a color variable is ended with `--<word><number>`, then we join them with `-`:

  - `uiTheme.colors.accentShades.secondary1` to `--tbl--colors--accent-shades--secondary-1`

  And doesn't change variable if it's ended with `--<number>`:

  - `uiTheme.colors.accentSecondaryGrey[800]` to `$colors--accent-secondary-grey--800`

  This changes doesn't affect existing color variables.

## 0.4.1

### Patch Changes

- [#32](https://github.com/ReTable/ui-kit/pull/32) [`342334d`](https://github.com/ReTable/ui-kit/commit/342334dbb1c0b10d890f4daa3bff0899498470b4) Thanks [@demiazz](https://github.com/demiazz)! - add conditional export for Sass files

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
