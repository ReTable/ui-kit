import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import { camelCase, kebabCase, pascalCase, snakeCase } from 'change-case';
import { execa } from 'execa';

// region Constants

const rootDir = fileURLToPath(new URL('.', import.meta.url));

const runConfigurationsDir = join(rootDir, '.idea/runConfigurations');

const runConfigurationsTemplatesDir = join(rootDir, '.scaffold/runConfigurations');

const WORKSPACES = ['components', 'hooks', 'libraries', 'configs'];

const STYLES = {
  css: 'Plain CSS',
  postcss: 'PostCSS',
  scss: 'SCSS',
  vanillaExtract: 'vanilla-extract',
};

// endregion

// region Utilities

function componentNameOf(raw) {
  let packageName = kebabCase(raw);

  if (!packageName.startsWith('ui-')) {
    packageName = `ui-${packageName}`;
  }

  const componentName = pascalCase(packageName);

  return { packageName, componentName };
}

function hookNameOf(raw) {
  let packageName = kebabCase(raw);

  if (!packageName.startsWith('use-')) {
    packageName = `use-${packageName}`;
  }

  const hookName = camelCase(packageName);
  const typeName = pascalCase(packageName);

  return { hookName, packageName, typeName };
}

function libraryNameOf(raw) {
  const packageName = kebabCase(raw);
  const entryName = camelCase(packageName);

  return { entryName, packageName };
}

function runConfigurationPathOf(packageName, script) {
  const baseName = snakeCase(`${packageName}:${script}`);

  return join(runConfigurationsDir, `${baseName}.xml`);
}

function appendAddFileActions({ actions, data, files, outDir, templatesDir }) {
  for (const file of files) {
    let path;
    let templateFile;

    if (typeof file === 'string') {
      path = join(outDir, file);
      templateFile = join(templatesDir, `${file}.hbs`);
    } else {
      path = join(outDir, file[0]);
      templateFile = join(templatesDir, `${file[1]}.hbs`);
    }

    actions.push({
      type: 'add',

      path,
      templateFile,

      data,
    });
  }

  actions.push({
    type: 'update-tsconfig',
  });
}

function appendRunConfigurationActions({ actions, packageName, packageDir }) {
  actions.push({
    type: 'add',

    path: runConfigurationPathOf(packageName, 'build'),
    templateFile: join(runConfigurationsTemplatesDir, 'npm_build.xml.hbs'),

    data: {
      packageName,
    },
  });

  actions.push({
    type: 'add',

    path: runConfigurationPathOf(packageName, 'build:watch'),
    templateFile: join(runConfigurationsTemplatesDir, 'npm_build_watch.xml.hbs'),

    data: {
      packageName,
    },
  });

  actions.push({
    type: 'add',

    path: runConfigurationPathOf(packageName, 'test'),
    templateFile: join(runConfigurationsTemplatesDir, 'vitest_test.xml.hbs'),

    data: {
      packageName,
      packageDir,
    },
  });

  actions.push({
    type: 'add',

    path: runConfigurationPathOf(packageName, 'test:watch'),
    templateFile: join(runConfigurationsTemplatesDir, 'vitest_test_watch.xml.hbs'),

    data: {
      packageName,
      packageDir,
    },
  });

  actions.push({
    type: 'add',

    path: runConfigurationPathOf(packageName, 'dev:test'),
    templateFile: join(runConfigurationsTemplatesDir, 'compound_dev_test.xml.hbs'),

    data: {
      packageName,
      packageDir,
    },
  });

  actions.push({
    type: 'add',

    path: runConfigurationPathOf(packageName, 'dev:server'),
    templateFile: join(runConfigurationsTemplatesDir, 'compound_dev_server.xml.hbs'),

    data: {
      packageName,
      packageDir,
    },
  });
}

function appendRunActions({ actions, commands, cwd }) {
  for (const command of commands) {
    actions.push({
      type: command,

      cwd,
    });
  }
}

// endregion

// region Helpers

function currentYear() {
  return new Date().getUTCFullYear();
}

function eq(left, right) {
  return left === right;
}

// endregion

// region Actions

async function install(_, config) {
  await execa('pnpm', ['install'], {
    cwd: config.cwd,
    stdio: 'inherit',
  });
}

async function format(_, config) {
  await execa('pnpm', ['prettier', '--write', '.'], {
    cwd: config.cwd,
    stdio: 'inherit',
  });
}

async function build(_, config) {
  await execa('pnpm', ['build'], {
    cwd: config.cwd,
    stdio: 'inherit',
  });
}

async function test(_, config) {
  await execa('pnpm', ['test'], {
    cwd: config.cwd,
    stdio: 'inherit',
  });
}

async function updateTSConfig() {
  const paths = [];

  for (const workspace of WORKSPACES) {
    const workspaceDir = join(rootDir, workspace);

    try {
      const entries = await readdir(workspaceDir);

      for await (const entry of entries) {
        const entryDir = join(workspaceDir, entry);
        const tsConfigPath = join(workspaceDir, entry, 'tsconfig.json');

        try {
          await stat(tsConfigPath);

          paths.push(relative(rootDir, entryDir));
        } catch {}
      }
    } catch {}
  }

  const config = JSON.stringify(
    {
      compilerOptions: {
        composite: true,
      },

      files: [],

      references: paths.map((path) => ({ path })),
    },
    null,
    2,
  );

  const comment = [
    '// DO NOT EDIT: auto-generated by the `scaffold` generator.',
    '//',
    `// Updated at: ${new Date().toUTCString()}`,
  ].join('\n');

  const content = `${comment}\n\n${config}\n`;

  await writeFile(join(rootDir, 'tsconfig.json'), content, 'utf-8');
}

// endregion

// region Configuration

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default (plop) => {
  // region Helpers

  plop.setHelper('currentYear', currentYear);
  plop.setHelper('eq', eq);

  // endregion Helpers

  // region Actions

  plop.setActionType('install', install);
  plop.setActionType('format', format);
  plop.setActionType('build', build);
  plop.setActionType('test', test);
  plop.setActionType('update-tsconfig', updateTSConfig);

  // endregion

  // region Component

  plop.setGenerator('component', {
    description: 'Generates a component package',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
      {
        type: 'list',
        name: 'styles',
        message: 'Which tools will be used for component?',
        default: Object.keys(STYLES).findIndex((it) => it === 'vanillaExtract'),
        choices: Object.entries(STYLES).map(([value, name]) => ({ name, value })),
      },
      {
        type: 'confirm',
        name: 'confirm',
        message({ name, styles }) {
          const { packageName } = componentNameOf(name);

          return `Package which will be generated is ${packageName} (using ${STYLES[styles]}). Continue?`;
        },
      },
    ],

    actions(answers) {
      const actions = [];

      if (!answers?.confirm) {
        return actions;
      }

      const { componentName, packageName } = componentNameOf(answers.name);

      const data = {
        componentName,
        description: answers.description,
        packageName,
        styles: answers.styles,
      };

      const files = [
        '.forgerc',
        'LICENSE',
        'package.json',
        'README.md',
        'tsconfig.forge.json',
        'tsconfig.json',
        'src/index.ts',
        [`src/${componentName}.tsx`, 'src/UiComponent.tsx'],
        [`stories/${componentName}.stories.tsx`, `stories/UiComponent.stories.tsx`],
        [`tests/${componentName}.test.tsx`, `tests/UiComponent.test.tsx`],
      ];

      switch (answers.styles) {
        case 'css': {
          files.push([`src/${componentName}.module.css`, 'src/UiComponent.module.css']);

          break;
        }
        case 'postcss': {
          files.push([`src/${componentName}.module.pcss`, 'src/UiComponent.module.pcss']);

          break;
        }
        case 'scss': {
          files.push([`src/${componentName}.module.scss`, 'src/UiComponent.module.scss']);

          break;
        }
        case 'vanillaExtract': {
          files.push([`src/${componentName}.css.ts`, 'src/UiComponent.css.ts']);

          break;
        }
      }

      const outDir = join(rootDir, `components/${packageName}`);

      appendAddFileActions({
        actions,
        data,
        files,
        outDir,
        templatesDir: join(rootDir, `.scaffold/component`),
      });

      appendRunConfigurationActions({
        actions,
        packageName,
        packageDir: `components/${packageName}`,
      });

      appendRunActions({
        actions,
        commands: ['install', 'format', 'build', 'test'],
        cwd: outDir,
      });

      return actions;
    },
  });

  // endregion

  // region Hook

  plop.setGenerator('hook', {
    description: 'Generates a hook package',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter hook name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this hook:',
      },
      {
        type: 'confirm',
        name: 'confirm',
        message({ name }) {
          const { packageName } = hookNameOf(name);

          return `Package which will be generated is ${packageName}. Continue?`;
        },
      },
    ],

    actions(answers) {
      const actions = [];

      if (!answers?.confirm) {
        return actions;
      }

      const { hookName, packageName, typeName } = hookNameOf(answers.name);

      const data = {
        description: answers.description,
        hookName,
        packageName,
        typeName,
      };

      const files = [
        '.forgerc',
        'LICENSE',
        'package.json',
        'README.md',
        'tsconfig.forge.json',
        'tsconfig.json',
        'src/index.ts',
        [`src/${hookName}.ts`, 'src/useHook.ts'],
        [`stories/${hookName}.stories.tsx`, `stories/useHook.stories.tsx`],
        [`tests/${hookName}.test.ts`, `tests/useHook.test.ts`],
      ];

      const outDir = join(rootDir, `hooks/${packageName}`);

      appendAddFileActions({
        actions,
        data,
        files,
        outDir,
        templatesDir: join(rootDir, `.scaffold/hook`),
      });

      appendRunConfigurationActions({
        actions,
        packageName,
        packageDir: `hooks/${packageName}`,
      });

      appendRunActions({
        actions,
        commands: ['install', 'format', 'build', 'test'],
        cwd: outDir,
      });

      return actions;
    },
  });

  // endregion

  // region Library

  plop.setGenerator('library', {
    description: 'Generates a library package',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter library name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this library:',
      },
      {
        type: 'confirm',
        name: 'confirm',
        message({ name }) {
          const { packageName } = libraryNameOf(name);

          return `Package which will be generated is ${packageName}. Continue?`;
        },
      },
    ],

    actions(answers) {
      const actions = [];

      if (!answers?.confirm) {
        return actions;
      }

      const { entryName, packageName } = libraryNameOf(answers.name);

      const data = {
        description: answers.description,
        entryName,
        packageName,
      };

      const files = [
        '.forgerc',
        'LICENSE',
        'package.json',
        'README.md',
        'tsconfig.forge.json',
        'tsconfig.json',
        'src/index.ts',
        [`src/${entryName}.ts`, 'src/library.ts'],
        [`tests/${entryName}.test.ts`, `tests/library.test.ts`],
      ];

      const outDir = join(rootDir, `libraries/${packageName}`);

      appendAddFileActions({
        actions,
        data,
        files,
        outDir,
        templatesDir: join(rootDir, `.scaffold/library`),
      });

      appendRunConfigurationActions({
        actions,
        packageName,
        packageDir: `libraries/${packageName}`,
      });

      appendRunActions({
        actions,
        commands: ['install', 'format', 'build', 'test'],
        cwd: outDir,
      });

      return actions;
    },
  });

  // endregion
};

// endregion
