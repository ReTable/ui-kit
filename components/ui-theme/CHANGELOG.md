# @tabula/ui-theme

## 3.3.1

### Patch Changes

- [#280](https://github.com/ReTable/ui-kit/pull/280) [`681616a`](https://github.com/ReTable/ui-kit/commit/681616a422435adcff27b043ee1c6003647183bd) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Support enrich style color

## 3.3.0

### Minor Changes

- [#258](https://github.com/ReTable/ui-kit/pull/258) [`4184f6f`](https://github.com/ReTable/ui-kit/commit/4184f6feba8a0ceb2c8832619e62cf237a283b4a) Thanks [@demiazz](https://github.com/demiazz)! - add `accent-alpha-70` color variable

## 3.3.0-next.0

### Minor Changes

- [#258](https://github.com/ReTable/ui-kit/pull/258) [`4184f6f`](https://github.com/ReTable/ui-kit/commit/4184f6feba8a0ceb2c8832619e62cf237a283b4a) Thanks [@demiazz](https://github.com/demiazz)! - add `accent-alpha-70` color variable

## 3.2.3

### Patch Changes

- [#254](https://github.com/ReTable/ui-kit/pull/254) [`96e9610`](https://github.com/ReTable/ui-kit/commit/96e96105c9aa8ef2ab8f8434d860c4dd7025be13) Thanks [@demiazz](https://github.com/demiazz)! - fix unicode ranges

## 3.2.2

### Patch Changes

- [#251](https://github.com/ReTable/ui-kit/pull/251) [`ac72e31`](https://github.com/ReTable/ui-kit/commit/ac72e3112e690745eda38615a637fd4b73b112e4) Thanks [@demiazz](https://github.com/demiazz)! - update Inter and IBM Plex Mono fonts

## 3.2.1

### Patch Changes

- [#234](https://github.com/ReTable/ui-kit/pull/234) [`d7c1254`](https://github.com/ReTable/ui-kit/commit/d7c12545c1cc8120090bdcf3af338f860a69a7f9) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Update icons of enrichment providers

  feat: update existing enrichment icons
  feat: move enrichment colors from ui-theme to ui-node-icon
  feat: add isDisabled toggle to IconsTable
  feat: add icons for new enrichment providers

## 3.2.0

### Minor Changes

- [#198](https://github.com/ReTable/ui-kit/pull/198) [`8938c46`](https://github.com/ReTable/ui-kit/commit/8938c463fc9f3b5436f78897c09f31307af88e5a) Thanks [@demiazz](https://github.com/demiazz)! - add `shadow` colors

## 3.2.0-next.0

### Minor Changes

- [#198](https://github.com/ReTable/ui-kit/pull/198) [`8938c46`](https://github.com/ReTable/ui-kit/commit/8938c463fc9f3b5436f78897c09f31307af88e5a) Thanks [@demiazz](https://github.com/demiazz)! - add `shadow` colors

## 3.1.1

### Patch Changes

- [#189](https://github.com/ReTable/ui-kit/pull/189) [`e13dce1`](https://github.com/ReTable/ui-kit/commit/e13dce187627774dd7dfe2d3564efc849cc09e00) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Add more icons for enrichment vendors

## 3.1.0

### Minor Changes

- [#183](https://github.com/ReTable/ui-kit/pull/183) [`008c766`](https://github.com/ReTable/ui-kit/commit/008c7664a9c461e88a99885aed4368d861716ba4) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - add icons for EnrichmentNode

## 3.0.0

### Major Changes

- [#179](https://github.com/ReTable/ui-kit/pull/179) [`c707289`](https://github.com/ReTable/ui-kit/commit/c70728934c2375e4402e1c6824ad9531e055a4e7) Thanks [@demiazz](https://github.com/demiazz)! - removed `uiFonts` CSS classes for fonts applying

### Minor Changes

- [#179](https://github.com/ReTable/ui-kit/pull/179) [`c707289`](https://github.com/ReTable/ui-kit/commit/c70728934c2375e4402e1c6824ad9531e055a4e7) Thanks [@demiazz](https://github.com/demiazz)! - exports `uiStyles` object with ready to use styles for usage at component layer

  ```typescript
  import { style } from '@vanilla-extract/css';

  import { uiStyles, uiTheme } from '@tabula/ui-theme';

  export const root = style([
    uiStyles.fonts.sansSerif.bold12,
    {
      '@layer': {
        [layers.components]: {
          color: uiTheme.colors.content.primary,
        },
      },
    },
  ]);
  ```

### Patch Changes

- [#177](https://github.com/ReTable/ui-kit/pull/177) [`3497940`](https://github.com/ReTable/ui-kit/commit/3497940a1af3c96bfe7e6fca7820aefb220fcf10) Thanks [@demiazz](https://github.com/demiazz)! - import libraries styles after all explicit dependencies

## 3.0.0-next.0

### Major Changes

- [#179](https://github.com/ReTable/ui-kit/pull/179) [`c707289`](https://github.com/ReTable/ui-kit/commit/c70728934c2375e4402e1c6824ad9531e055a4e7) Thanks [@demiazz](https://github.com/demiazz)! - removed `uiFonts` CSS classes for fonts applying

### Minor Changes

- [#179](https://github.com/ReTable/ui-kit/pull/179) [`c707289`](https://github.com/ReTable/ui-kit/commit/c70728934c2375e4402e1c6824ad9531e055a4e7) Thanks [@demiazz](https://github.com/demiazz)! - exports `uiStyles` object with ready to use styles for usage at component layer

  ```typescript
  import { style } from '@vanilla-extract/css';

  import { uiStyles, uiTheme } from '@tabula/ui-theme';

  export const root = style([
    uiStyles.fonts.sansSerif.bold12,
    {
      '@layer': {
        [layers.components]: {
          color: uiTheme.colors.content.primary,
        },
      },
    },
  ]);
  ```

### Patch Changes

- [#177](https://github.com/ReTable/ui-kit/pull/177) [`3497940`](https://github.com/ReTable/ui-kit/commit/3497940a1af3c96bfe7e6fca7820aefb220fcf10) Thanks [@demiazz](https://github.com/demiazz)! - import libraries styles after all explicit dependencies

## 2.7.3

### Patch Changes

- [#169](https://github.com/ReTable/ui-kit/pull/169) [`4b3829d`](https://github.com/ReTable/ui-kit/commit/4b3829db6a0a58fadd22175d3a5ed344a4802c17) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 2.7.2

### Patch Changes

- [#163](https://github.com/ReTable/ui-kit/pull/163) [`85182dd`](https://github.com/ReTable/ui-kit/commit/85182dd5f2f1995f265a85f6c7422626acfabd21) Thanks [@demiazz](https://github.com/demiazz)! - fix font parameters sharing

## 2.7.1

### Patch Changes

- [#159](https://github.com/ReTable/ui-kit/pull/159) [`6fc774a`](https://github.com/ReTable/ui-kit/commit/6fc774a9edabb2cbb74a2bd1e81498a5d88dbf7a) Thanks [@demiazz](https://github.com/demiazz)! - fix bloated font styles for `vanilla-extract`

## 2.7.0

### Minor Changes

- [#156](https://github.com/ReTable/ui-kit/pull/156) [`551d788`](https://github.com/ReTable/ui-kit/commit/551d788fb51a78dc82b2d4f9cfcfc1ca82ee81e4) Thanks [@demiazz](https://github.com/demiazz)! - expand font styles

### Patch Changes

- [#157](https://github.com/ReTable/ui-kit/pull/157) [`afb7d74`](https://github.com/ReTable/ui-kit/commit/afb7d7458a6a3a30f1898698a28010faaea41551) Thanks [@demiazz](https://github.com/demiazz)! - fix font types

## 2.6.0

### Minor Changes

- [#136](https://github.com/ReTable/ui-kit/pull/136) [`7b68f53`](https://github.com/ReTable/ui-kit/commit/7b68f53a43f9c69931774da41c2cb506c9ce083f) Thanks [@demiazz](https://github.com/demiazz)! - update colors of checkbox controls

- [#153](https://github.com/ReTable/ui-kit/pull/153) [`ce3e5f2`](https://github.com/ReTable/ui-kit/commit/ce3e5f2d600778639801e993bb271c005f7b29ca) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Add node icons for TomatDrive

### Patch Changes

- [#150](https://github.com/ReTable/ui-kit/pull/150) [`0224f86`](https://github.com/ReTable/ui-kit/commit/0224f864d22d2cb8dc4255fca3a8ab46d6305f67) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 2.6.0-beta.0

### Minor Changes

- [#136](https://github.com/ReTable/ui-kit/pull/136) [`7b68f53`](https://github.com/ReTable/ui-kit/commit/7b68f53a43f9c69931774da41c2cb506c9ce083f) Thanks [@demiazz](https://github.com/demiazz)! - update colors of checkbox controls

## 2.5.0

### Minor Changes

- [#144](https://github.com/ReTable/ui-kit/pull/144) [`64f426e`](https://github.com/ReTable/ui-kit/commit/64f426e569f57f41eb8b895b2cb0dbb55b6e5c5c) Thanks [@demiazz](https://github.com/demiazz)! - update indexed colors

## 2.4.0

### Minor Changes

- [#142](https://github.com/ReTable/ui-kit/pull/142) [`130fb88`](https://github.com/ReTable/ui-kit/commit/130fb8899ab6b1e70c3a1e26e4afda2f8df7fa98) Thanks [@demiazz](https://github.com/demiazz)! - increase chart colors count

## 2.3.0

### Minor Changes

- [#139](https://github.com/ReTable/ui-kit/pull/139) [`6c53589`](https://github.com/ReTable/ui-kit/commit/6c53589b89ed730d3f8245d7a54e7641e5eb69eb) Thanks [@demiazz](https://github.com/demiazz)! - add chart colors

### Patch Changes

- [#137](https://github.com/ReTable/ui-kit/pull/137) [`f6af9ad`](https://github.com/ReTable/ui-kit/commit/f6af9ad061907eea38349b4b7aa8ede6a1fa1fa0) Thanks [@demiazz](https://github.com/demiazz)! - use `clsx/lite` instead of `clsx`

- [#137](https://github.com/ReTable/ui-kit/pull/137) [`f6af9ad`](https://github.com/ReTable/ui-kit/commit/f6af9ad061907eea38349b4b7aa8ede6a1fa1fa0) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 2.2.0

### Minor Changes

- [#132](https://github.com/ReTable/ui-kit/pull/132) [`f6dbe85`](https://github.com/ReTable/ui-kit/commit/f6dbe85b014d8c0e00a3b0a0eb56a7a0ca8f56e6) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Update value of contrast color vars

## 2.1.0

### Minor Changes

- [#114](https://github.com/ReTable/ui-kit/pull/114) [`90f4f17`](https://github.com/ReTable/ui-kit/commit/90f4f17a04b08a3398ac8ae63b0e89efac2d2d50) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - add TabulaDrive icons

  fix: use right name for ReportSIcon
  feat: add TabulaDrive icons of L and M sizes

## 2.0.4

### Patch Changes

- [#111](https://github.com/ReTable/ui-kit/pull/111) [`b35c0fb`](https://github.com/ReTable/ui-kit/commit/b35c0fb03fde828f8366c45a7f84d710a327dd40) Thanks [@demiazz](https://github.com/demiazz)! - add `displayName` for exportable components for debug purposes

## 2.0.3

### Patch Changes

- [#93](https://github.com/ReTable/ui-kit/pull/93) [`68484f9`](https://github.com/ReTable/ui-kit/commit/68484f98a65b1ed5f860a785222bdda301f24d2b) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - add `$colors--status--warning`

## 2.0.2

### Patch Changes

- [#91](https://github.com/ReTable/ui-kit/pull/91) [`424ab84`](https://github.com/ReTable/ui-kit/commit/424ab84dd1b0f8461ce13c2ed33fccd02b648cbd) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 2.0.1

### Patch Changes

- [#83](https://github.com/ReTable/ui-kit/pull/83) [`18556b7`](https://github.com/ReTable/ui-kit/commit/18556b75a6283aeab1b5643b6b6743b6576840ae) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

## 2.0.0

### Major Changes

- [#76](https://github.com/ReTable/ui-kit/pull/76) [`fb663e4`](https://github.com/ReTable/ui-kit/commit/fb663e4546fdb1a23df04bc02174c1b611ae33f9) Thanks [@demiazz](https://github.com/demiazz)! - wrap font classes with `components` layer

## 1.2.0

### Minor Changes

- [#74](https://github.com/ReTable/ui-kit/pull/74) [`47dfbfb`](https://github.com/ReTable/ui-kit/commit/47dfbfb7925c056a012d3ef6da93172a3b936bc3) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - add sans-serif 12 bold font

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
