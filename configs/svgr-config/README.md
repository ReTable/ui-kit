# @tabula/svgr-config

Configuration for the SVGR which extends default behaviour:

- forces memoization;
- allows to rename exported name;
- adds display name for memoized component.

It developed to use with `@tabula/forge` package, but you can use it on your own risks with your vanilla configuration.

## Installation

Use the package manager [pnpm](https://pnpm.io) to install `@tabula/svgr-config`.

```bash
pnpm add @tabula/svgr-config --save-dev
```

You can use [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) too.

## Usage

Add the `.svgrrc.js` file to the root:

```javascript
import { defineConfig } from '@tabula/svgr-config';

export default defineConfig({
  scope: 'my-awesome-scope',

  transformName(name) {
    return `Ui${name.slice(3)}`;
  },
});
```

For example, you have `comma.svg` filename, and apply SVGR to it. Results will be following with configuration from
above example:

- name of component will be `UiComma` instead of `SvgComma`;
- display name of memoized component will be `my-awesome-scope(UiComma)`.

Scoping are helpful in combination with React Dev Tools.

## License

This project is [ISC](https://choosealicense.com/licenses/isc/) licensed.
