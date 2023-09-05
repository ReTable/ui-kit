# @tabula/ui-button

Button components which are used to initialize an action.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-button`.

```bash
pnpm add @tabula/ui-button
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

We provide five different button sizes with own visual styles:

- `UiButton20`
- `UiButton24`
- `UiButton32`
- `UiButton40`
- `UiButton48`

Import required component and render it with one of supported variants:

```tsx
import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { UiButton24 } from '@tabula/ui-button';

type Props = PropsWithChildren<{
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

const Action: FC<Props> = ({ children, onClick }) => (
  <UiButton24 onClick={onClick} variant='primary'>{children}</UiButton24>
)
```

## Types

The component supports four types: `button`, `a`, `div` and `link`. By default, the `button` type is used.

### Button

By default, the component renders generic button:

```tsx
<UiButton24 variant="primary">Default</UiButton24>
```

You can provide `as="button"` explicitly:

```tsx
<UiButton24 as="button" variant="primary">Button</UiButton24>
```

### Anchor

You can render `a` element with providing `as="button"`:

```tsx
  <UiButton24 as="a" href="#" target="_blank" variant="primary">Anchor</UiButton24>
```

### Div

In rare cases, you can render `div` element with providing `as="div"`:

```tsx
<UiButton24 as="div" variant="primary">Div</UiButton24>
```

### Link

You can use `as="link"` and provide `component` property to use `react-router`'s `Link` component:

```tsx
import { Link } from 'react-router-dom';

<UiButton24 as="link" component={Link} target="_blank" to="#" variant="contract">Link</UiButton24>
```

It can be useful, when you want to have `div` element with button appearance. For example, to render it inside
another `button` element.

## Variants

Each button component has its own appearance variants list, which you can use:

- `UiButton20`: `contract`;
- `UiButton24`: `primary`, `secondary`, `cancel`, `cancelFilled`, `edit`, `test` and `ai`;
- `UiButton32`: `primaryDesign`, `secondaryDesign`, `primaryList`, `secondaryList`, `dangerousList` and `shadowList`;
- `UiButton40`: `primary`, `secondary`, `secondaryBlue` and `secondaryFilled`;
- `UiButton48`: `primary` and `secondary`;

## Options

The component supports a few options.

### `isDisabled`

This property allows to disable button:

```tsx
<UiButton24 isDisabled variant="primary">Button</UiButton24>
```

### `isFrozen`

This property allows to disable button, but keep enabled look and feel:

```tsx
<UiButton24 isFrozen variant="primary">Button</UiButton24>
```

### `isDisabled` and `isFrozen`

The `isDisabled` styles has priority over `isFrozen` when they're used together.

```tsx
<UiButton24 isDisabled isFrozen variant="primary">Button</UiButton24>
```

### `icon`

You can provide an icon component:

```tsx
import { UiDateIcon } from '@tabula/ui-data-type-icon';

<UiButton24 icon={UiDateIcon} variant="primary">Open calendar</UiButton24>
```

We recommend use icons with size of `16x16`.

An icon component should support `className` property.

## Attributes

All component types supports relevant HTML attributes, excluding `aria-disabled` and `disabled`. This attributes are
controlled by the component itself.

Also `href` attribute is restricted `link` type.

For example, you can provide `data-*` attribute for analytics purposes:

```tsx
  <UiButton24 data-track-id="button" variant="primary">Button</UiButton24>
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
