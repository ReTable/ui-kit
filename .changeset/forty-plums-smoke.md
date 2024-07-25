---
'@tabula/ui-theme': minor
---

exports `uiStyles` object with ready to use styles for usage at component layer

```typescript
import { style } from '@vanilla-extract/css';

import { uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.sansSerif.bold12,
  {
    '@layer': {
      [layers.components]: {
        color: uiTheme.colors.content.primary,
      }
    }
  }
]);
```
