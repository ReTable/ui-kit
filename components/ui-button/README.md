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

### Type

Each button component can have one of three types:

- `button`: a button element will be rendered (it's default behaviour);
- `link`: an anchor element will be rendered (you should provide `href` too);
- `visual`: a div element will be rendered (it's useful when you can't to use button element for any reasons).

```tsx
import { UiButton24 } from '@tabula/ui-button';

// A button will be rendered.
<UiButton24 variant='primary'>Default</UiButton24>
// A button will be rendered too.
<UiButton24 type='button' variant='primary'>Button</UiButton24>

// An anchor will be rendered.
<UiButton24 href='#' type='link' variant='primary'>Link</UiButton24>
// An anchor will be rendered too.
<UiButton24 href='#' rel='noreferrer noopener' target='_blank' type='link' variant='primary'>Link with target and rel</UiButton24>

// A div will be rendered.
<UiButton24 type='visual' variant='primary'>Visual</UiButton24>
```

### Variant

Each button component has its own variants list, which can be used:

- `UiButton20`: `contract`;
- `UiButton24`: `primary`, `secondary`, `cancel`, `cancelFilled`, `edit`, `test` and `ai`;
- `UiButton32`: `primaryDesign`, `secondaryDesign`, `primaryList`, `secondaryList`, `dangerousList` and `shadowList`;
- `UiButton40`: `primary`, `secondary`, `secondaryBlue` and `secondaryFilled`;
- `UiButton48`: `primary` and `secondary`;

### Disabled

All buttons supports `isDisabled` property:

```tsx
<UiButton24 isDisabled type='button' variant='primary'>Button</UiButton24>
<UiButton24 href='#' isDisabled type='link' variant='primary'>Link</UiButton24>
<UiButton24 isDisabled type='visual' variant='primary'>Visual</UiButton24>
```

### Frozen

Along with `isDisabled` option, the component supports `isFrozen` option. In that case, button will have enabled visual
style, but will not react on user interactions.

```tsx
<UiButton24 isFrozen type='button' variant='primary'>Button</UiButton24>
<UiButton24 href='#' isFrozen type='link' variant='primary'>Link</UiButton24>
<UiButton24 isFrozen type='visual' variant='primary'>Visual</UiButton24>
```

### Disabled and frozen

The `isDisabled` has priority when you use `isDisabled` and `isFrozen` together.

### Icon

You can provide an `icon` component:

```tsx
const Icon: FC<{ className?: string }> = () => // ...

<UiButton24 icon={Icon} variant='primary'>Button</UiButton24>
```

We recommend use icons with size of `16x16`.

An icon component should support `className` property.

### Analytics

Also, the component supports the `trackId` property. It's adds `data-track-id` attribute to component for analytics
purposes.

```tsx
<UiButton24 trackId='my-track-id' type='button' variant='primary'>Tracked</UiButton24>
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
