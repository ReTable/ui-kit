import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import handlebars from 'handlebars';

// region Constants

const WORKSPACES = ['components', 'configs', 'hooks', 'libraries'];

const SCRIPTS = new Set(['build', 'lint', 'test', 'watch']);

// endregion

// region Paths

const ROOT_DIR = resolve(fileURLToPath(import.meta.url), '../../');

const CONFIGURATIONS_DIR = join(ROOT_DIR, '.idea/runConfigurations');

// endregion

// region Render

type NpmContext = {
  folder: string;
  name: string;
  path: string;
  script: string;
};

const renderNpmConfiguration = handlebars.compile<NpmContext>(`
<component name="ProjectRunConfigurationManager">
  <configuration default="false" folderName="{{folder}}" name="{{name}}" type="js.build_tools.npm">
    <package-json value="$PROJECT_DIR$/{{path}}/package.json" />
    <command value="run" />
    <scripts>
      <script value="{{script}}" />
    </scripts>
    <node-interpreter value="project" />
    <envs />
    <method v="2" />
  </configuration>
</component>
`);

type VitestContext = {
  folder: string;
  name: string;
  path: string;
};

const renderVitestConfiguration = handlebars.compile<VitestContext>(`
<component name="ProjectRunConfigurationManager">
  <configuration default="false" folderName="{{folder}}" name="{{name}}" type="JavaScriptTestRunnerVitest">
    <node-interpreter value="project" />
    <vitest-package value="$PROJECT_DIR$/node_modules/vitest" />
    <working-dir value="$PROJECT_DIR$/{{path}}" />
    <envs />
    <scope-kind value="ALL" />
    <method v="2" />
  </configuration>
</component>
`);

type Context = ({ type: 'npm' } & NpmContext) | ({ type: 'vitest' } & VitestContext);

async function renderConfiguration(context: Context) {
  const fileName = context.name.replace(/[-:]/g, '_');
  const filePath = join(CONFIGURATIONS_DIR, `${fileName}.xml`);

  let content = '';

  switch (context.type) {
    case 'npm': {
      content = renderNpmConfiguration(context);

      break;
    }
    case 'vitest': {
      content = renderVitestConfiguration(context);

      break;
    }
  }

  await writeFile(filePath, content.trimStart(), 'utf-8');
}

// endregion

// region Traversing

async function* walkPackageDirs() {
  for (const workspace of WORKSPACES) {
    const workspaceDir = join(ROOT_DIR, workspace);

    // NOTE: Does workspace directory exists?

    try {
      await stat(workspaceDir);
    } catch {
      continue;
    }

    // NOTE: Read workspace directories.

    const entries = await readdir(workspaceDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const { name, path } = entry;

      yield { name, path };
    }
  }
}

type PackageJson = {
  scripts?: Record<string, string>;
};

async function parseScripts(dir: string) {
  const content = await readFile(join(dir, 'package.json'), 'utf-8');
  const packageJson: PackageJson = JSON.parse(content);

  if (packageJson.scripts == null) {
    return [];
  }

  return Object.keys(packageJson.scripts).filter((it) => SCRIPTS.has(it));
}

async function* walkPackages(): AsyncGenerator<Context> {
  for await (const entry of walkPackageDirs()) {
    const packageDir = join(entry.path, entry.name);

    const scripts = await parseScripts(packageDir);

    for (const script of scripts) {
      const folder = entry.name;
      const name = `${entry.name}:${script}`;
      const path = join(relative(ROOT_DIR, entry.path), entry.name);

      if (script === 'test') {
        yield { type: 'vitest', folder, name, path };
      } else {
        yield { type: 'npm', folder, name, path, script };
      }
    }
  }
}

// endregion

// region Main

for await (const context of walkPackages()) {
  await renderConfiguration(context);
}

// endregion
