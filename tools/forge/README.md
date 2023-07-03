# @tabula/forge

The bundler for packages for Node.js and browser with support of various tools.

## Details

This bundler is wrapper around [esbuild](https://esbuild.github.io/) with various plugins.

The `forge` doesn't allow to configure details of bundling, and expects
predefined project structure.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/forge`.

```bash
pnpm add @tabula/forge --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Commands

It has the following commands:

- `forge build browser [-p,--production] [-c,--check] [-t,--typings] [-s,--storybook]`
- `forge build node [-p,--production] [-c,--check] [-t,--typings]`
- `forge watch browser [-p,--production] [-c,--check] [-t,--typings] [-s,--storybook]`
- `forge watch node [-p,--production] [-c,--check] [-t,--typings]`

As you can see, all commands have the same options:

- `-p,--production` - (default: **true**) enables bundling for production
  environment. Build for production mode doesn't enable minification for debug
  purposes in the target user application.
- `-c,--check` - (default: **true**) enables type checking with TypeScript. It
  runs `tsc` before bundling.
- `-t,--typings` - (default: **true**) enables typings generation. It works only
  if type checking is enabled too.

Also, an additional option is presented for browser:

- `-s,--storybook` - (default: **false**) enables emitting additional documentation
  for components to use it in the Storybook.

## Common

The `forge` has a few moments which should be highlighted:

- expects `<projectRoot>/src/index.ts` as entry point;
- produces output to the `<projectRoot/lib` directory;
- produces typings to the `<projectRoot/typings` directory;
- bundle source code to the single module;
- uses ESM format for produced module;
- doesn't bundle dependencies;
- generates source maps which include sources content.

## Node.js

The only one moment which you should know about bundling for Node.js that we
use version 18 as target.

## Browser

Bundling for browser has a much more implementation details.

### Assets

We support bundling of images and fonts. But we don't inline it, and not
change names or assets structure like a Vite or Webpack.

We only solve a task to bundle package for using in projects which will be
bundled for serving later.

### CSS

The CSS supported out of the box.

If your package uses CSS then a line `import "./index.css";` automatically
will be added to the beginning of a `lib/index.js` file.

Also, all CSS are processed by the [Autoprefixer](https://github.com/postcss/autoprefixer).

### CSS Modules

We support [CSS Modules](https://github.com/css-modules/css-modules) with
predefined settings:

- use `camelCaseOnly` locals convention;
- different scoped names are generated for development and production modes;
- package name and file path are used in scoped name for debug purposes in
  development mode.

Style files which use CSS Modules must have `*.module.[ext]` filename.

### CSS Preprocessors

The `forge` supports usage of the [PostCSS](https://postcss.org/) and
[Sass](https://sass-lang.com/).

You should use `*.pcss` extension for PostCSS and `*.scss` for the Sass.

### vanilla-extract

We support the [vanilla-extract](https://vanilla-extract.style/).

This is zero-runtime CSS-in-JS solution with TypeScript support.

### SVGR

We support the [SVGR](https://react-svgr.com/) to allow to use SVG images not
only as loadable assets, but also as a React components.

```typescript jsx
import iconUrl, { ReactComponent as IconUrl } from './icon.svg';

<>
  <IconUrl className="react-icon" />
  <img className="img-icon" src={iconUrl} />
</>;
```

An SVG file already exports React component as `ReactComponent`.

### React

We use automatic runtime only for React.

For more details, see [here](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).

This feature is [supported](https://esbuild.github.io/api/#jsx) by the esbuild already.

### Storybook

We generate additional documentation for Storybook:

```js
AwesomeComponent.__docgenInfo = { ...componentDocumentation };
```

### TypeScript

The `forge` supports TypeScript. It runs `tsc` before each build automatically.

You should provide `tsconfig.forge.json` in your project which will be used by
the `forge`.

You can use `@tabula/typescript-config` for Node.js:

```json
{
  "extends": "@tabula/typescript-config/tsconfig.node.json",

  "include": ["src/**/*"]
}
```

or browser:

```json
{
  "extends": "@tabula/typescript-config/tsconfig.browser.json",

  "include": ["src/**/*"]
}
```

The configuration for browser also includes typings for CSS and CSS Modules,
static files and SVG files with SVGR support.

That configs are recommended for usage with the `forge`.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
