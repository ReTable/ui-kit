---
'@tabula/ui-button': major
---

exported `UiButtonType` replaced with `UiButtonElement`

The `UiButtonElement` has another type which represent changes of supported button types.

```tsx
type UiButtonType = 'button' | 'link' | 'visual';

type UiButtonElement = 'button' | 'a' | 'div' | 'link';
```
