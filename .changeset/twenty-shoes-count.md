---
'@tabula/ui-button': minor
---

added support of `react-router`'s `Link` component

Use `as="link"` and provide `Link` as `component` attribute. Additionally provide properties for `Link`.

```tsx
import { Link } from 'react-router-dom';

<UiButton24 as='link' component={Link} to='/my-url'>Go to my URL</UiButton24>
```
