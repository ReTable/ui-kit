# @tabula/ui-button

## 1.1.0

### Patch Changes

- Updated dependencies [[`f63c447`](https://github.com/ReTable/ui-kit/commit/f63c447e7e39a408bdb2a9db6340211fe317f715)]:
  - @tabula/ui-theme@1.1.0

## 1.0.0

### Major Changes

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - removed support of `testId` property

  Use `data-testid` property instead.

  Version with `testId` property:

  ```tsx
  import { UiButton24 } from '@tabula/ui-button';

  <UiButton24 trackId="unique-id" variant="primary" />;
  ```

  Version with `data-testid` property:

  ```tsx
  import { UiButton24 } from '@tabula/ui-button';

  <UiButton24 data-testid="unique-id" variant="primary" />;
  ```

- [#62](https://github.com/ReTable/ui-kit/pull/62) [`ea25f3e`](https://github.com/ReTable/ui-kit/commit/ea25f3ef5f6b09a2fa6d46ef1475431005529a74) Thanks [@demiazz](https://github.com/demiazz)! - exported `UiButtonType` replaced with `UiButtonElement`

  The `UiButtonElement` has another type which represent changes of supported button types.

  ```tsx
  type UiButtonType = 'button' | 'link' | 'visual';

  type UiButtonElement = 'button' | 'a' | 'div' | 'link';
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
  import { UiButton24 } from '@tabula/ui-button';

  <UiButton24 trackId="unique-id" variant="primary" />;
  ```

  Version with `data-track-id` property:

  ```tsx
  import { UiButton24 } from '@tabula/ui-button';

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
  import { Link } from 'react-router-dom';

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
