# @tabula/ui-theme

Theme provider for the UI kit.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/ui-theme`.

```bash
pnpm add @tabula/ui-theme
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

### React

Packages provides `UiTheme` component which imports all required styles and provides layers and vars through context.

```tsx
<UiTheme>
  <YourUiEntryPoint />
</UiTheme>
```

Also, it provides `useUiTheme` hook which allows to access to provided layers and vars.

```tsx
const { layers, vars } = useUiTheme();
```

### CSS

You can use provided layers in plain CSS or PostCSS:

```css
@layer tbl--components {
  .selector {
    color: var(--tbl--colors--brand);
  }
}
```

Layers and variables have `tbl--` prefix to avoid naming collisions.

You can use them in Sass too.

### Sass

We provide modules for Sass too:

```scss
@use '~@tabula/ui-theme' as theme;

@layer theme.$layer--components {
  .selector {
    color: theme.$colors--brand;
  }
}
```

### vanilla-extract

The package provides the first-citizen support of `vanilla-extract`:

```ts
import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const selector = style({
  [uiLayers.components]: {
    color: uiTheme.colors.brand,
  }
});
```

## Structure

There are two types of files, which can be used to configure theme.

The first are configuration files:

- `src/fontFaces.css.ts` - defines font faces;
- `src/vars.css.ts` - definitions of available CSS layers and tokens.

**IMPORTANT**: Do not require any modules in `src/vars.css.ts`. It can be a problem for tokens export to Sass.

The second are definition files:

- `src/layers.css.ts` - defines global CSS layers based on the layers list;
- `src/theme.css.ts` - defines global CSS variables based on tokens.

Also, we provides `reboot.css.ts` file which defines normalize styles.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
