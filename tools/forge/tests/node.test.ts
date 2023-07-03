import { setup } from './setup';

const it = setup();

// ----- Clean

it(
  "doesn't remove files from the previous build",
  { name: 'node-clean', platform: 'node', production: false },
  async (t, c) => {
    t.true(await c.isExists('lib/previous.js'));
    t.true(await c.isExists('typings/previous.d.ts'));
  },
);

it(
  'removes files from the previous build before production build',
  { name: 'node-clean', platform: 'node', production: true },
  async (t, c) => {
    t.false(await c.isExists('lib/previous.js'));
    t.false(await c.isExists('typings/previous.d.ts'));
  },
);

// ----- Source Maps

it('generates source maps', { name: 'node-default', platform: 'node' }, async (t, c) => {
  t.snapshot(await c.read('lib/index.js.map'));
});

it(
  'generates source maps with relative paths',
  { name: 'node-default', platform: 'node' },
  async (t, c) => {
    const { sources } = await c.readSourceMap('lib/index.js.map');

    const areAllRelative = sources.every((source) => source.startsWith('../src'));

    t.true(areAllRelative);
  },
);

it(
  'generates source maps with sources content',
  { name: 'node-default', platform: 'node' },
  async (t, c) => {
    const { sourcesContent } = await c.readSourceMap('lib/index.js.map');

    t.true(sourcesContent != null);
    t.true((sourcesContent?.length ?? 0) > 0);
  },
);

// ----- Dependencies

it('uses dependencies as external', { name: 'node-default', platform: 'node' }, async (t, c) => {
  t.snapshot(await c.read('lib/index.js'));
  t.snapshot(await c.read('lib/index.js.map'));
  t.snapshot(await c.read('typings/index.d.ts'));
  t.snapshot(await c.read('typings/readJson.d.ts'));
});

// ----- Default Flags

it('minify bundle by default', { name: 'node-default', platform: 'node' }, async (t, c) => {
  t.snapshot(await c.read('lib/index.js'));
});

it('generates typings by default', { name: 'node-default', platform: 'node' }, async (t, c) => {
  t.snapshot(await c.read('typings/index.d.ts'));
  t.snapshot(await c.read('typings/readJson.d.ts'));
});

// ----- Minify

it(
  'drops debugger in production mode',
  { name: 'node-debugger', platform: 'node' },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

// ----- Production Mode

it(
  "don't minify code when production mode is off",
  {
    name: 'node-default',
    platform: 'node',
    production: false,
  },
  async (t, c) => {
    t.snapshot(await c.read('lib/index.js'));
  },
);

it(
  'minify code when production mode is on',
  {
    name: 'node-default',
    platform: 'node',
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
    name: 'node-check',
    platform: 'node',
    check: false,
  },
  async (t, c) => {
    t.true(await c.isExists('lib'));
  },
);

it(
  "doesn't generate typings when check mode is off",
  {
    name: 'node-default',
    platform: 'node',
    check: false,
  },
  async (t, c) => {
    t.false(await c.isExists('typings'));
  },
);

it(
  'fails when types are invalid and check mode is on',
  {
    name: 'node-check',
    platform: 'node',
    check: true,
  },
  (t, c) => {
    t.true(c.isFailed);
  },
);

it(
  "doesn't emit when errors are existed",
  {
    name: 'node-check',
    platform: 'node',
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
    name: 'node-default',
    platform: 'node',
    typings: false,
  },
  async (t, c) => {
    t.false(await c.isExists('typings'));
  },
);

it(
  'generates typings when typings mode is on',
  {
    name: 'node-default',
    platform: 'node',
    typings: true,
  },
  async (t, c) => {
    t.true(await c.isExists('typings'));
  },
);

it(
  "doesn't generates typings when check mode is off",
  {
    name: 'node-default',
    platform: 'node',
    check: false,
    typings: true,
  },
  async (t, c) => {
    t.false(await c.isExists('typings'));
  },
);
