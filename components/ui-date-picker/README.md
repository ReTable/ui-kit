# @tabula/ui-date-picker

Allows to pick a date, time or date and time together.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-date-picker`.

```bash
pnpm add @tabula/ui-date-picker
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

We provide three types of picker:

- `date` - only date picker is shown;
- `time` - only time picker is shown;
- `datetime` - both date and time picker are shown.

Import component and render it with required type:

```tsx
import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { UiDatePicker } from '@tabula/ui-date-picker';

const Picker = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  return <UiDatePicker onSelect={setSelected} selected={selected} type="date" />;
};
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
