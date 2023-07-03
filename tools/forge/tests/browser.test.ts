import { setup } from './setup';

const it = setup();

const images = ['bmp', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'webp'];
const fonts = ['eot', 'otf', 'ttf', 'woff', 'woff2'];

// ----- Clean

it(
  "doesn't remove files from the previous build",
  { name: 'browser-clean', platform: 'browser', production: false },
  async (t, c) => {
    t.true(await c.isExists('lib/previous.js'));
    t.true(await c.isExists('typings/previous.d.ts'));
  },
);

it(
  'removes files from the previous build before production build',
  { name: 'browser-clean', platform: 'browser', production: true },
  async (t, c) => {
    t.false(await c.isExists('lib/previous.js'));
    t.false(await c.isExists('typings/previous.d.ts'));
  },
);

// ----- Source Maps

it('generates source maps', { name: 'browser-default', platform: 'browser' }, async (t, c) => {
  t.snapshot(await c.read('lib/index.js.map'));
});

it(
  'generates source maps with relative paths',
  {
    name: 'browser-default',
    platform: 'browser',
  },
  async (t, c) => {
    const { sources } = await c.readSourceMap('lib/index.js.map');

    const areAllRelative = sources.every((source) => source.startsWith('../src'));

    t.true(areAllRelative);
  },
);

it(
  'generates source maps with sources content',
  { name: 'browser-default', platform: 'browser' },
  async (t, c) => {
    const { sourcesContent } = await c.readSourceMap('lib/index.js.map');

    t.true(sourcesContent != null);
    t.true((sourcesContent?.length ?? 0) > 0);
  },
);

// ----- Dependencies

it(
  'uses dependencies as external',
  { name: 'browser-default', platform: 'browser' },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
    t.snapshot(await c.read('lib/index.js.map'));
    t.snapshot(await c.read('typings/index.d.ts'));
    t.snapshot(await c.read('typings/fetchJson.d.ts'));
  },
);

// ----- Default Flags

it('minify bundle by default', { name: 'browser-default', platform: 'browser' }, async (t, c) => {
  t.snapshot(await c.read('lib/index.js'));
});

it(
  'generates typings by default',
  { name: 'browser-default', platform: 'browser' },
  async (t, c) => {
    t.snapshot(await c.read('typings/index.d.ts'));
    t.snapshot(await c.read('typings/fetchJson.d.ts'));
  },
);

// ----- Minify

it(
  'drops debugger in production mode',
  { name: 'browser-debugger', platform: 'browser' },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

// ----- Production Mode

it(
  "don't minify code when production mode is off",
  {
    name: 'browser-default',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  'minify code when production mode is on',
  {
    name: 'browser-default',
    platform: 'browser',
    production: true,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

// ----- Type Checking

it(
  "doesn't check types when check mode is off",
  {
    name: 'browser-check',
    platform: 'browser',
    check: false,
  },
  async (t, c) => {
    t.true(await c.isExists('lib'));
  },
);

it(
  "doesn't generate typings when check mode is off",
  {
    name: 'browser-default',
    platform: 'browser',
    check: false,
  },
  async (t, c) => {
    t.false(await c.isExists('typings'));
  },
);

it(
  'fails when types are invalid and check mode is on',
  {
    name: 'browser-check',
    platform: 'browser',
    check: true,
  },
  (t, c) => {
    t.true(c.isFailed);
  },
);

it(
  "doesn't emit when errors are existed",
  {
    name: 'browser-check',
    platform: 'browser',
    check: true,
  },
  async (t, c) => {
    t.false(await c.isExists('lib'));
    t.false(await c.isExists('typings'));
  },
);

// ----- Typings Generation

it(
  "doesn't generate typings when typings mode is off",
  {
    name: 'browser-default',
    platform: 'browser',
    typings: false,
  },
  async (t, c) => {
    t.false(await c.isExists('typings'));
  },
);

it(
  'generates typings when typings mode is on',
  {
    name: 'browser-default',
    platform: 'browser',
    typings: true,
  },
  async (t, c) => {
    t.true(await c.isExists('typings'));
  },
);

it(
  "doesn't generates typings when check mode is off",
  {
    name: 'browser-default',
    platform: 'browser',
    check: false,
    typings: true,
  },
  async (t, c) => {
    t.false(await c.isExists('typings'));
  },
);

// ----- Static files

it(
  'bundles static files',
  {
    name: 'browser-static',
    platform: 'browser',
  },
  async (t, c) => {
    for (const ext of images) {
      // eslint-disable-next-line no-await-in-loop
      const asset = await c.read(`lib/assets/js/image.${ext}`);

      t.is(asset.trim(), ext);
    }

    for (const ext of fonts) {
      // eslint-disable-next-line no-await-in-loop
      const asset = await c.read(`lib/assets/js/font.${ext}`);

      t.is(asset.trim(), ext);
    }
  },
);

it(
  'uses original imports for assets',
  {
    name: 'browser-static',
    platform: 'browser',
  },
  async (t, c) => {
    const content = await c.read('lib/index.js');

    for (const ext of images) {
      t.true(content.includes(`"./assets/js/image.${ext}"`));
    }

    for (const ext of fonts) {
      t.true(content.includes(`"./assets/js/font.${ext}"`));
    }
  },
);

// ----- CSS

it(
  'supports CSS',
  {
    name: 'browser-css',
    platform: 'browser',
  },
  async (t, c) => {
    t.true(await c.isExists('lib/index.css'));
  },
);

it(
  'generates source maps for CSS',
  {
    name: 'browser-css',
    platform: 'browser',
  },
  async (t, c) => {
    t.true(await c.isExists('lib/index.css.map'));
  },
);

it(
  'bundles static files from CSS',
  {
    name: 'browser-static',
    platform: 'browser',
  },
  async (t, c) => {
    for (const ext of images) {
      // eslint-disable-next-line no-await-in-loop
      const asset = await c.read(`lib/assets/css/image.${ext}`);

      t.is(asset.trim(), ext);
    }

    for (const ext of fonts) {
      // eslint-disable-next-line no-await-in-loop
      const asset = await c.read(`lib/assets/css/font.${ext}`);

      t.is(asset.trim(), ext);
    }
  },
);

it(
  'uses original imports for assets in CSS',
  {
    name: 'browser-static',
    platform: 'browser',
  },
  async (t, c) => {
    const content = await c.read('lib/index.css');

    for (const ext of images) {
      t.true(content.includes(`url(./assets/css/image.${ext})`));
    }

    for (const ext of fonts) {
      t.true(content.includes(`url(./assets/css/font.${ext})`));
    }
  },
);

// ----- CSS Auto Import

it(
  "doesn't add CSS import to the result bundle if CSS isn't used",
  {
    name: 'browser-default',
    platform: 'browser',
  },
  async (t, c) => {
    const content = await c.read('lib/index.js');

    t.false(content.startsWith('import "./index.css";'));
  },
);

it(
  'adds CSS import to the result bundle if CSS is used',
  {
    name: 'browser-css',
    platform: 'browser',
  },
  async (t, c) => {
    const content = await c.read('lib/index.js');

    t.true(content.startsWith('import "./index.css";'));
  },
);

// ----- CSS Modules

it(
  'supports CSS modules',
  {
    name: 'browser-css-modules',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.css'));
  },
);

it(
  'uses short ids for CSS modules when the production mode is on',
  {
    name: 'browser-css-modules',
    platform: 'browser',
    production: true,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.css'));
  },
);

// ----- Preprocessors Support

it(
  'supports SCSS postprocessor',
  {
    name: 'browser-scss',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.css'));
  },
);

it(
  'supports PostCSS preprocessor',
  {
    dependencies: ['postcss-nested'],
    name: 'browser-postcss',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.css'));
  },
);

// ----- React Support

it(
  'supports development JSX runtime',
  {
    dependencies: ['@types/react'],
    name: 'browser-react',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  'supports JSX runtime when the production mode is on',
  {
    dependencies: ['@types/react'],
    name: 'browser-react',
    platform: 'browser',
    production: true,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

// ----- SVG Support

it(
  'supports SVG in CSS',
  {
    dependencies: ['@types/react'],
    name: 'browser-svg',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/assets/css.svg'));
    t.snapshot(await c.read('lib/index.css'));
  },
);

it(
  'supports import of SVG as URL in JS',
  {
    dependencies: ['@types/react'],
    name: 'browser-svg',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/assets/js.svg'));
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  'supports import of SVG as React Component in JS',
  {
    dependencies: ['@types/react'],
    name: 'browser-svg',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/assets/js.svg'));
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  'supports sharing the same SVG between CSS and JS',
  {
    dependencies: ['@types/react'],
    name: 'browser-svg',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/assets/shared.svg'));
    t.snapshot(await c.read('lib/index.js'));
    t.snapshot(await c.read('lib/index.css'));
  },
);

it(
  'minify SVG when production mode is on',
  {
    dependencies: ['@types/react'],
    name: 'browser-svg',
    platform: 'browser',
    production: true,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/assets/css.svg'));
    t.snapshot(await c.read('lib/assets/js.svg'));
    t.snapshot(await c.read('lib/assets/shared.svg'));
    t.snapshot(await c.read('lib/index.js'));
    t.snapshot(await c.read('lib/index.css'));
  },
);

// ----- Vanilla Extract Support

it(
  'supports `vanilla-extract` package',
  {
    dependencies: ['@vanilla-extract/css'],
    name: 'browser-vanilla-extract',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
    t.snapshot(await c.read('lib/index.css'));
  },
);

it(
  'supports static files in the `vanilla-extract` styles',
  {
    dependencies: ['@vanilla-extract/css'],
    name: 'browser-vanilla-extract',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.css'));
  },
);

it(
  'bundles static files from `vanilla-extract` styles',
  {
    dependencies: ['@vanilla-extract/css'],
    name: 'browser-vanilla-extract-static',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    for (const ext of images) {
      // eslint-disable-next-line no-await-in-loop
      const asset = await c.read(`lib/assets/image.${ext}`);

      t.is(asset.trim(), ext);
    }

    for (const ext of fonts) {
      // eslint-disable-next-line no-await-in-loop
      const asset = await c.read(`lib/assets/font.${ext}`);

      t.is(asset.trim(), ext);
    }
  },
);

// ----- Storybook

it(
  "doesn't generate documentation by default",
  {
    name: 'browser-storybook',
    platform: 'browser',
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  "doesn't generate documentation in production",
  {
    name: 'browser-storybook',
    platform: 'browser',
    production: true,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  "doesn't generate documentation by default in development",
  {
    name: 'browser-storybook',
    platform: 'browser',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  'generates documentation if flag is given',
  {
    name: 'browser-storybook',
    platform: 'browser',
    production: false,
    storybook: true,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);
