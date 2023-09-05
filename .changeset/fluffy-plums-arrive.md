---
'@tabula/ui-button': major
---

removed support of `testId` property

Use `data-testid` property instead.

Version with `testId` property:

```tsx
import { UiButton24 } from '@tabula/ui-button';

<UiButton24 trackId='unique-id' variant='primary' />
```

Version with `data-testid` property:

```tsx
import { UiButton24 } from '@tabula/ui-button';

<UiButton24 data-testid='unique-id' variant='primary' />
```
