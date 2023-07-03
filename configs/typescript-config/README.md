# @tabula/typescript-config

This package provides ESLint configurators as shared configs.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/typescript-config`.

```bash
pnpm add @tabula/typescript-config --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

The package provides `tsconfig.browser.json` and `tsconfig.node.json` presets.

Add an `tsconfig.json` configuration file to the root of your project for
browser:

```json
{
  "extends": "@tabula/typescript-config/tsconfig.browser.json",

  "include": ["src/**/*"]
}
```

or for Node.js:

```json
{
  "extends": "@tabula/typescript-config/tsconfig.node.json",

  "include": ["src/**/*"]
}
```

The configuration for browser also includes typings for CSS and CSS Modules,
static files and SVG files with SVGR support.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
