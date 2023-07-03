import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

import { build, context } from 'esbuild';
import { findUp } from 'find-up';
import { readPackageUp } from 'read-pkg-up';

import { Platform } from '../types';

import { createBuildOptions } from './createBuildOptions';

type Options = {
  check: boolean;
  platform: Platform;
  production: boolean;
  storybook: boolean;
  typings: boolean;
  watch: boolean;
};

export async function bundle({
  check,
  platform,
  production,
  storybook,
  typings,
  watch,
}: Options): Promise<void> {
  const pkg = await readPackageUp({ normalize: false });

  if (pkg == null) {
    throw new Error("Couldn't find a `package.json`");
  }

  const { name } = pkg.packageJson;

  if (name == null || name.length === 0) {
    throw new Error('Package must have a name');
  }

  const packageRoot = dirname(pkg.path);

  const repositoryPath = await findUp('.git', { cwd: packageRoot, type: 'directory' });

  if (repositoryPath == null) {
    throw new Error("Couldn't find a repository root");
  }

  const repositoryRoot = dirname(repositoryPath);

  const buildOptions = await createBuildOptions({
    check,
    name,
    packageRoot,
    platform,
    production,
    repositoryRoot,
    storybook,
    typings,
  });

  if (production) {
    await Promise.all([
      rm(join(packageRoot, 'lib'), { force: true, recursive: true }),
      rm(join(packageRoot, 'typings'), { force: true, recursive: true }),
    ]);
  }

  if (watch) {
    const ctx = await context(buildOptions);

    await ctx.watch();
  } else {
    await build(buildOptions);
  }
}
