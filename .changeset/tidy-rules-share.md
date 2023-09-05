---
'@tabula/ui-button': major
---

removed support of `trackId` property

Use `data-track-id` property instead.

Version with `trackId` property:

```tsx
import { UiButton24 } from '@tabula/ui-button';

<UiButton24 trackId='unique-id' variant='primary' />
```

Version with `data-track-id` property:

```tsx
import { UiButton24 } from '@tabula/ui-button';

<UiButton24 data-track-id='unique-id' variant='primary' />
```
