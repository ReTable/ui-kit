# @tabula/prettier-config

This package provides opinionated Prettier configuration.

## Details

This configuration is pretty standard with small changes.

Also, we use import sorting provided by the (@trivago/prettier-plugin-sort-imports)[https://github.com/trivago/prettier-plugin-sort-imports].

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/prettier-config`.

```bash
pnpm add @tabula/prettier-config --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

Add the `.prettierrc.json` file to the root of your project:

```json
"@tabula/prettier-config"
```

or to the `package.json`:

```json
{
  "prettier": "@tabula/prettier-config"
}
```

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
