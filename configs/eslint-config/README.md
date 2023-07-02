# @tabula/eslint-config

This package provides ESLint configurators as shared configs.

## Rules

We use recommended rules from the following packages:

- [eslint](https://eslint.org/)
- [@typescript-eslint](https://typescript-eslint.io/)
- [import](https://github.com/import-js/eslint-plugin-import)
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [prettier](https://github.com/prettier/eslint-config-prettier)

We add support of React for browser:

- [react](https://github.com/jsx-eslint/eslint-plugin-react)
- [react-hook](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

Also, we add our opinionated rules configuration on top of it.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/eslint-config`.

```bash
pnpm add @tabula/eslint-config --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

The package provides `browser` and `node` presets. Add an `.eslintrc.json` configuration file to the root of your
project for browser:

```json
{
  "extends": "@tabula/eslint-config/browser",

  "parserOptions": {
    "project": ["tsconfig.json"]
  }
}
```

or for browser tests:

```json
{
  "extends": "@tabula/eslint-config/browser-tests",

  "parserOptions": {
    "project": ["tsconfig.json"]
  }
}
```

or for Node.js:

```json
{
  "extends": "@tabula/eslint-config/node",

  "parserOptions": {
    "project": ["tsconfig.json"]
  }
}
```

### Parser Options

Pay attention to the `parserOptions.project` option.

We use rules which require type checking. The parser must be configured properly for them.

See more information about `parserOptions.project` [here](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsproject).

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
