---
'@tabula/ui-ai-chat': major
---

New release has a breaking changes.

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
