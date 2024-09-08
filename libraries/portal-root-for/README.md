# @tabula/portal-root-for

Allows to get or create portal root.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/portal-root-for`.

```bash
pnpm add @tabula/portal-root-for
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

```typescript
import { portalRootFor } from '@tabula/portal-root-for';

const root = portalRootFor({ id: 'my-portal' });
```

You can provide optional `className` to automatically add `class` attribute to the root element.

```typescript
import { portalRootFor } from "@tabula/portal-root-for";

const root = portalRootFor({ id: 'my-portal', className: 'my-class' });
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
