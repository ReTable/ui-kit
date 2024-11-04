# @tabula/ui-ai-chat

## 2.1.1

### Patch Changes

- Updated dependencies [[`681616a`](https://github.com/ReTable/ui-kit/commit/681616a422435adcff27b043ee1c6003647183bd)]:
  - @tabula/ui-theme@3.3.1
  - @tabula/ui-button@9.1.1

## 2.1.0

### Patch Changes

- Updated dependencies [[`4184f6f`](https://github.com/ReTable/ui-kit/commit/4184f6feba8a0ceb2c8832619e62cf237a283b4a)]:
  - @tabula/ui-theme@3.3.0
  - @tabula/ui-button@9.1.0

## 2.1.0-next.0

### Patch Changes

- Updated dependencies [[`4184f6f`](https://github.com/ReTable/ui-kit/commit/4184f6feba8a0ceb2c8832619e62cf237a283b4a)]:
  - @tabula/ui-theme@3.3.0-next.0
  - @tabula/ui-button@9.1.0-next.0

## 2.0.2

### Patch Changes

- Updated dependencies [[`96e9610`](https://github.com/ReTable/ui-kit/commit/96e96105c9aa8ef2ab8f8434d860c4dd7025be13)]:
  - @tabula/ui-theme@3.2.3
  - @tabula/ui-button@9.0.3

## 2.0.1

### Patch Changes

- Updated dependencies [[`ac72e31`](https://github.com/ReTable/ui-kit/commit/ac72e3112e690745eda38615a637fd4b73b112e4)]:
  - @tabula/ui-theme@3.2.2
  - @tabula/ui-button@9.0.2

## 2.0.0

### Major Changes

- [#233](https://github.com/ReTable/ui-kit/pull/233) [`7bb9286`](https://github.com/ReTable/ui-kit/commit/7bb92866fbc37f94c73a1364db66cc39b2c9da4d) Thanks [@demiazz](https://github.com/demiazz)! - New release has a breaking changes.

  #### Controller

  The `Controller` now allows to control prompt input and conversation window.

  Methods of old `Controller` moved to `Controller.conversation`.

  Scroll methods allows to use `behavior` parameter.

  #### Settings

  Removed settings from the chat. They should be handled outside component.

  Removed properties:

  - `mode`
  - `supportedModes`
  - `onChangeMode`
  - `context`
  - `onChangeContext`
  - `minTemperature`
  - `maxTemperature`
  - `temperature`
  - `onChangeTemperature`

  #### Control

  Prompt controlled by chat inside.

  Removed properties:

  - `prompt`
  - `onChangePrompt`
  - `isPending`
  - `isSendAllowed`

  Changed properties:

  - `onSend` now has signature `(prompt: string) => void`

  Chat now autoscroll to the new messages, clear input and focus to it after send.

  We check all requests, and if at least one is pending, then show progress indicator and disallow to send message.

  Automatically disallow send empty prompts.

  #### Resend

  Property `onEdit` renamed to the `onResend`.

  #### New chat

  Removed property `onStartNewChat`.

  #### Look and Feel

  Removed properties:

  - `inputAtTheBottom`

  Input at the bottom always now, and chat direction always from top to bottom.

  Property `empty` allows to provide placeholder for empty chat.

  Property `pendingPlaceholder` allows to change pending message.

  Prompt is autosized now and allows max height to 10 lines of text.

  Chat has adapted to the root width, and use condensed styles on small width.

### Minor Changes

- [#244](https://github.com/ReTable/ui-kit/pull/244) [`a725762`](https://github.com/ReTable/ui-kit/commit/a7257625514db5c966dfebc0be355fcc20e56382) Thanks [@demiazz](https://github.com/demiazz)! - added support of 'suggestions' and 'context' properties

## 2.0.0-next.1

### Minor Changes

- [#244](https://github.com/ReTable/ui-kit/pull/244) [`a725762`](https://github.com/ReTable/ui-kit/commit/a7257625514db5c966dfebc0be355fcc20e56382) Thanks [@demiazz](https://github.com/demiazz)! - added support of 'suggestions' and 'context' properties

## 2.0.0-next.0

### Major Changes

- [#233](https://github.com/ReTable/ui-kit/pull/233) [`7bb9286`](https://github.com/ReTable/ui-kit/commit/7bb92866fbc37f94c73a1364db66cc39b2c9da4d) Thanks [@demiazz](https://github.com/demiazz)! - New release has a breaking changes.

  #### Controller

  The `Controller` now allows to control prompt input and conversation window.

  Methods of old `Controller` moved to `Controller.conversation`.

  Scroll methods allows to use `behavior` parameter.

  #### Settings

  Removed settings from the chat. They should be handled outside component.

  Removed properties:

  - `mode`
  - `supportedModes`
  - `onChangeMode`
  - `context`
  - `onChangeContext`
  - `minTemperature`
  - `maxTemperature`
  - `temperature`
  - `onChangeTemperature`

  #### Control

  Prompt controlled by chat inside.

  Removed properties:

  - `prompt`
  - `onChangePrompt`
  - `isPending`
  - `isSendAllowed`

  Changed properties:

  - `onSend` now has signature `(prompt: string) => void`

  Chat now autoscroll to the new messages, clear input and focus to it after send.

  We check all requests, and if at least one is pending, then show progress indicator and disallow to send message.

  Automatically disallow send empty prompts.

  #### Resend

  Property `onEdit` renamed to the `onResend`.

  #### New chat

  Removed property `onStartNewChat`.

  #### Look and Feel

  Removed properties:

  - `inputAtTheBottom`

  Input at the bottom always now, and chat direction always from top to bottom.

  Property `empty` allows to provide placeholder for empty chat.

  Property `pendingPlaceholder` allows to change pending message.

  Prompt is autosized now and allows max height to 10 lines of text.

  Chat has adapted to the root width, and use condensed styles on small width.

## 1.0.2

### Patch Changes

- [#236](https://github.com/ReTable/ui-kit/pull/236) [`633a878`](https://github.com/ReTable/ui-kit/commit/633a8785c9393ff0a16cd25a2815df0defcec1d8) Thanks [@demiazz](https://github.com/demiazz)! - fix usage of `@tabula/ui-slider`

- Updated dependencies [[`633a878`](https://github.com/ReTable/ui-kit/commit/633a8785c9393ff0a16cd25a2815df0defcec1d8)]:
  - @tabula/ui-slider@2.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [[`d7c1254`](https://github.com/ReTable/ui-kit/commit/d7c12545c1cc8120090bdcf3af338f860a69a7f9)]:
  - @tabula/ui-theme@3.2.1
  - @tabula/ui-button@9.0.1
  - @tabula/ui-selector@1.0.1
  - @tabula/ui-slider@1.0.1

## 1.0.0

### Minor Changes

- [#215](https://github.com/ReTable/ui-kit/pull/215) [`50bb7e4`](https://github.com/ReTable/ui-kit/commit/50bb7e4475bb92ac05f1e6a2771312d99ec7745c) Thanks [@demiazz](https://github.com/demiazz)! - add `@tabula/ui-ai-chat` package

### Patch Changes

- [#222](https://github.com/ReTable/ui-kit/pull/222) [`19eeafc`](https://github.com/ReTable/ui-kit/commit/19eeafce4de834a328fc225474634fe3790653d7) Thanks [@demiazz](https://github.com/demiazz)! - prompt shouldn't be resizable

- [#218](https://github.com/ReTable/ui-kit/pull/218) [`e3357c6`](https://github.com/ReTable/ui-kit/commit/e3357c6983ab99ff6501da698231083d2b952868) Thanks [@demiazz](https://github.com/demiazz)! - fix render of empty tables

- [#216](https://github.com/ReTable/ui-kit/pull/216) [`a350695`](https://github.com/ReTable/ui-kit/commit/a3506950398fd86584505464426ec9072a7b906e) Thanks [@demiazz](https://github.com/demiazz)! - fix tables rendering

- Updated dependencies [[`ae8f90b`](https://github.com/ReTable/ui-kit/commit/ae8f90bd833e6f4015800e60ef24f88146136c08), [`1c418c7`](https://github.com/ReTable/ui-kit/commit/1c418c79342030ab971f7191b3027bd7226ee20d), [`cc03337`](https://github.com/ReTable/ui-kit/commit/cc033371feb2098b086ddcf1f05cd8b6876bcbf8), [`d075d37`](https://github.com/ReTable/ui-kit/commit/d075d377ad307420ce902aae58c53e2aeb8edcb7), [`3e150ab`](https://github.com/ReTable/ui-kit/commit/3e150abe4b16033362cd8f69de6697d1207d9b37), [`8938c46`](https://github.com/ReTable/ui-kit/commit/8938c463fc9f3b5436f78897c09f31307af88e5a), [`bdfe2ac`](https://github.com/ReTable/ui-kit/commit/bdfe2ac47bb01c93316784b36be173b2931f671d)]:
  - @tabula/ui-selector@1.0.0
  - @tabula/ui-slider@1.0.0
  - @tabula/ui-button@9.0.0
  - @tabula/ui-theme@3.2.0

## 1.0.0-next.7

### Patch Changes

- Updated dependencies [[`cc03337`](https://github.com/ReTable/ui-kit/commit/cc033371feb2098b086ddcf1f05cd8b6876bcbf8), [`bdfe2ac`](https://github.com/ReTable/ui-kit/commit/bdfe2ac47bb01c93316784b36be173b2931f671d)]:
  - @tabula/ui-button@9.0.0-next.1
  - @tabula/ui-selector@1.0.0-next.3

## 1.0.0-next.6

### Patch Changes

- Updated dependencies [[`ae8f90b`](https://github.com/ReTable/ui-kit/commit/ae8f90bd833e6f4015800e60ef24f88146136c08)]:
  - @tabula/ui-selector@1.0.0-next.2

## 1.0.0-next.5

### Patch Changes

- Updated dependencies []:
  - @tabula/ui-selector@1.0.0-next.1

## 1.0.0-next.4

### Patch Changes

- [#222](https://github.com/ReTable/ui-kit/pull/222) [`19eeafc`](https://github.com/ReTable/ui-kit/commit/19eeafce4de834a328fc225474634fe3790653d7) Thanks [@demiazz](https://github.com/demiazz)! - prompt shouldn't be resizable

## 1.0.0-next.3

### Patch Changes

- Updated dependencies [[`1c418c7`](https://github.com/ReTable/ui-kit/commit/1c418c79342030ab971f7191b3027bd7226ee20d)]:
  - @tabula/ui-slider@1.0.0-next.1

## 1.0.0-next.2

### Patch Changes

- [#218](https://github.com/ReTable/ui-kit/pull/218) [`e3357c6`](https://github.com/ReTable/ui-kit/commit/e3357c6983ab99ff6501da698231083d2b952868) Thanks [@demiazz](https://github.com/demiazz)! - fix render of empty tables

## 1.0.0-next.1

### Patch Changes

- [#216](https://github.com/ReTable/ui-kit/pull/216) [`a350695`](https://github.com/ReTable/ui-kit/commit/a3506950398fd86584505464426ec9072a7b906e) Thanks [@demiazz](https://github.com/demiazz)! - fix tables rendering

## 1.0.0-next.0

### Minor Changes

- [#215](https://github.com/ReTable/ui-kit/pull/215) [`50bb7e4`](https://github.com/ReTable/ui-kit/commit/50bb7e4475bb92ac05f1e6a2771312d99ec7745c) Thanks [@demiazz](https://github.com/demiazz)! - add `@tabula/ui-ai-chat` package

### Patch Changes

- Updated dependencies [[`d075d37`](https://github.com/ReTable/ui-kit/commit/d075d377ad307420ce902aae58c53e2aeb8edcb7), [`3e150ab`](https://github.com/ReTable/ui-kit/commit/3e150abe4b16033362cd8f69de6697d1207d9b37), [`8938c46`](https://github.com/ReTable/ui-kit/commit/8938c463fc9f3b5436f78897c09f31307af88e5a)]:
  - @tabula/ui-slider@1.0.0-next.0
  - @tabula/ui-selector@1.0.0-next.0
  - @tabula/ui-theme@3.2.0-next.0
  - @tabula/ui-button@9.0.0-next.0
