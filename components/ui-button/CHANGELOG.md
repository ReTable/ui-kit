# @tabula/ui-button

## 5.0.1

### Patch Changes

- Updated dependencies [[`130fb88`](https://github.com/ReTable/ui-kit/commit/130fb8899ab6b1e70c3a1e26e4afda2f8df7fa98)]:
  - @tabula/ui-theme@2.4.0

## 5.0.0

### Patch Changes

- [#137](https://github.com/ReTable/ui-kit/pull/137) [`f6af9ad`](https://github.com/ReTable/ui-kit/commit/f6af9ad061907eea38349b4b7aa8ede6a1fa1fa0) Thanks [@demiazz](https://github.com/demiazz)! - update dependencies

- [#137](https://github.com/ReTable/ui-kit/pull/137) [`f6af9ad`](https://github.com/ReTable/ui-kit/commit/f6af9ad061907eea38349b4b7aa8ede6a1fa1fa0) Thanks [@demiazz](https://github.com/demiazz)! - use `clsx/lite` instead of `clsx`

- Updated dependencies [[`f6af9ad`](https://github.com/ReTable/ui-kit/commit/f6af9ad061907eea38349b4b7aa8ede6a1fa1fa0), [`6c53589`](https://github.com/ReTable/ui-kit/commit/6c53589b89ed730d3f8245d7a54e7641e5eb69eb), [`f6af9ad`](https://github.com/ReTable/ui-kit/commit/f6af9ad061907eea38349b4b7aa8ede6a1fa1fa0)]:
  - @tabula/ui-theme@2.3.0

## 4.0.0

### Patch Changes

- Updated dependencies [[`f6dbe85`](https://github.com/ReTable/ui-kit/commit/f6dbe85b014d8c0e00a3b0a0eb56a7a0ca8f56e6)]:
  - @tabula/ui-theme@2.2.0

## 3.2.0

### Minor Changes

- [#130](https://github.com/ReTable/ui-kit/pull/130) [`4862275`](https://github.com/ReTable/ui-kit/commit/486227574e1418e3418b798735d347ca295cef66) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - add secondaryDark style for Button40

## 3.1.0

### Minor Changes

- [#128](https://github.com/ReTable/ui-kit/pull/128) [`e9b76e3`](https://github.com/ReTable/ui-kit/commit/e9b76e33aa59f1ddd574e453adeeacb30c5bf54b) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Use accent color for primary UiButton40

## 3.0.1

### Patch Changes

- [#117](https://github.com/ReTable/ui-kit/pull/117) [`4c27d9b`](https://github.com/ReTable/ui-kit/commit/4c27d9bde2bdc2eca95d5e4832221859a1cc8089) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - up content gap from 4px to 6px

## 3.0.0

### Minor Changes

- [#115](https://github.com/ReTable/ui-kit/pull/115) [`2395e47`](https://github.com/ReTable/ui-kit/commit/2395e471b0e4e5e34a948df7c37bff77ff75512c) Thanks [@amikhaylov-retable](https://github.com/amikhaylov-retable)! - Add primary/secondary header styles of Button24

### Patch Changes

- Updated dependencies [[`90f4f17`](https://github.com/ReTable/ui-kit/commit/90f4f17a04b08a3398ac8ae63b0e89efac2d2d50)]:
  - @tabula/ui-theme@2.1.0

## 2.0.5

### Patch Changes

- [#111](https://github.com/ReTable/ui-kit/pull/111) [`b35c0fb`](https://github.com/ReTable/ui-kit/commit/b35c0fb03fde828f8366c45a7f84d710a327dd40) Thanks [@demiazz](https://github.com/demiazz)! - add `displayName` for exportable components for debug purposes

- Updated dependencies [[`b35c0fb`](https://github.com/ReTable/ui-kit/commit/b35c0fb03fde828f8366c45a7f84d710a327dd40)]:
  - @tabula/ui-theme@2.0.4

## 2.0.4

### Patch Changes

- Updated dependencies [[`68484f9`](https://github.com/ReTable/ui-kit/commit/68484f98a65b1ed5f860a785222bdda301f24d2b)]:
  - @tabula/ui-theme@2.0.3

## 2.0.3

### Patch Changes

- Updated dependencies [[`424ab84`](https://github.com/ReTable/ui-kit/commit/424ab84dd1b0f8461ce13c2ed33fccd02b648cbd)]:
  - @tabula/ui-theme@2.0.2

## 2.0.2

### Patch Changes

- Updated dependencies [[`18556b7`](https://github.com/ReTable/ui-kit/commit/18556b75a6283aeab1b5643b6b6743b6576840ae)]:
  - @tabula/ui-theme@2.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`fb663e4`](https://github.com/ReTable/ui-kit/commit/fb663e4546fdb1a23df04bc02174c1b611ae33f9)]:
  - @tabula/ui-theme@2.0.0

## 2.0.0

### Patch Changes

- Updated dependencies [[`47dfbfb`](https://github.com/ReTable/ui-kit/commit/47dfbfb7925c056a012d3ef6da93172a3b936bc3)]:
  - @tabula/ui-theme@1.2.0

## 1.0.2

### Patch Changes

- [#66](https://github.com/ReTable/ui-kit/pull/66) [`10614d4`](https://github.com/ReTable/ui-kit/commit/10614d4e4cf69750ce383860cd198a8a6bd4127b) Thanks [@demiazz](https://github.com/demiazz)! - add transitions support

## 1.0.1

### Patch Changes

- Updated dependencies [[`f63c447`](https://github.com/ReTable/ui-kit/commit/f63c447e7e39a408bdb2a9db6340211fe317f715)]:
  - @tabula/ui-theme@1.1.0

## 1.0.0

### Major Changes

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - removed support of `testId` property

  Use `data-testid` property instead.

  Version with `testId` property:

  ```tsx
  import { UiButton24 } from "@tabula/ui-button";

  <UiButton24 trackId="unique-id" variant="primary" />;
  ```

  Version with `data-testid` property:

  ```tsx
  import { UiButton24 } from "@tabula/ui-button";

  <UiButton24 data-testid="unique-id" variant="primary" />;
  ```

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - exported `UiButtonType` replaced with `UiButtonElement`

  The `UiButtonElement` has another type which represent changes of supported button types.

  ```tsx
  type UiButtonType = "button" | "link" | "visual";

  type UiButtonElement = "button" | "a" | "div" | "link";
  ```

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - the `type` property replaced with `as` property

  Possible values are changed too:

  - `link` -> `a`
  - `visual` -> `div`

  The `button` is unchanged.

  The `link` value is represent usage of `react-router`'s `Link` component.

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - removed support of `trackId` property

  Use `data-track-id` property instead.

  Version with `trackId` property:

  ```tsx
  import { UiButton24 } from "@tabula/ui-button";

  <UiButton24 trackId="unique-id" variant="primary" />;
  ```

  Version with `data-track-id` property:

  ```tsx
  import { UiButton24 } from "@tabula/ui-button";

  <UiButton24 data-track-id="unique-id" variant="primary" />;
  ```

### Minor Changes

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - add support of HTML attributes

  The button component forwards HTML properties to the inner element. You can use relevant properties depends on `as`
  property.

  ```tsx
  <UiButton24 type="submit">Submit</UiButton24>
  <UiButton24 as='a' href='/main.ru.html' hreflang="ru">Translated Page</UiButton24>
  <UiButton24 as='link' component={Link} href='/main/ru' hreflang="ru">Translated Page</UiButton24>
  <UiButton24 as='div' data-track-id="unique-id">Submit</UiButton24>
  ```

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - added support of `react-router`'s `Link` component

  Use `as="link"` and provide `Link` as `component` attribute. Additionally provide properties for `Link`.

  ```tsx
  import { Link } from "react-router-dom";

  <UiButton24 as="link" component={Link} to="/my-url">
    Go to my URL
  </UiButton24>;
  ```

### Patch Changes

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - icons has `pointer-events: none`

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - exports additional types: `UiButtonIconComponentProps`, `UiButtonIconComponentType`, `UiButtonLinkComponentProps` and
  `UiButtonLinkComponentType`

## 0.1.1

### Patch Changes

- [#55](https://github.com/ReTable/ui-kit/pull/55) [`ebc29b8`](https://github.com/ReTable/ui-kit/commit/ebc29b8a538f2b55e29404dfa98ce5d97144b1c3) Thanks [@demiazz](https://github.com/demiazz)! - use `ReactNode` instead of `string` as button children

## 0.1.0

### Minor Changes

- [#50](https://github.com/ReTable/ui-kit/pull/50) [`61b5399`](https://github.com/ReTable/ui-kit/commit/61b5399bc55fa146cf4fdda1e7273cfb26a1d187) Thanks [@demiazz](https://github.com/demiazz)! - added `@tabula/ui-button` package

### Patch Changes

- Updated dependencies [[`61b5399`](https://github.com/ReTable/ui-kit/commit/61b5399bc55fa146cf4fdda1e7273cfb26a1d187)]:
  - @tabula/ui-theme@1.0.3
