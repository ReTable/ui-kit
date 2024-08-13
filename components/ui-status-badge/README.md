# @tabula/ui-status-badge

Status badges are used for showing a small amount of color categorized metadata about something state.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-status-badge`.

```bash
pnpm add @tabula/ui-status-badge
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

You can import `UiStatusBadge` component and use for your purposes:

```tsx
import { useState } from 'react';

import { UiStatusBadge, UiStatusBadgeVariant } from '@tabula/ui-status-badge';

import { doAction } from './actions';

export function AwesomeComponent() {
  const [label, setLabel] = useState("Idle");
  const [variant, setVariant] = useState<UiStatusBadgeVariant>("inactive");

  useEffect(() => {
    setLabel("Running");
    setVariant("active");

    doAction()
      .then(() => {
        setLabel("Succeed");
        setVariant("success");
      })
      .catch(() => {
        setLabel("Failed");
        setVariant("error");
      });
  }, []);

  return <UiStatusBadge variant={variant}>{label}</UiStatusBadge>;
}
```

## Options

### `icon`

By default, we show default icon if possible.

You can provide `false` as `icon` property to disable icon at all.

Or you can provide your own icon as `icon` property.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
