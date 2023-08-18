---
'@tabula/ui-theme': minor
---

Add font presets.

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
