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

handlebars.registerHelper('configuration', function configurationHelper(this: TemplateContext) {
  const [, name] = this.packageName.split('/');

  return `${name}:${this.scriptName}`;
});

handlebars.registerHelper('folder', function folderHelper(this: TemplateContext) {
  const [, name] = this.packageName.split('/');

  return name;
});

type TemplateContext = {
  packageName: string;
  packageDir: string;
  scriptName: string;
};

const renderNpmConfiguration = handlebars.compile<TemplateContext>(`
<component name="ProjectRunConfigurationManager">
  <configuration
    default="false"
    folderName="{{folder}}"
    name="{{configuration}}"
    type="js.build_tools.npm"
  >
    <package-json value="$PROJECT_DIR$/package.json" />
    <command value="run" />
    <scripts>
      <script value="{{scriptName}}" />
    </scripts>
    <arguments value="--filter {{packageName}}" />
    <node-interpreter value="project" />
    <envs />
    <method v="2" />
  </configuration>
</component>
`);

const renderVitestConfiguration = handlebars.compile<TemplateContext>(`
<component name="ProjectRunConfigurationManager">
  <configuration
    default="false"
    folderName="{{folder}}"
    name="{{configuration}}"
    type="JavaScriptTestRunnerVitest"
  >
    <config value="$PROJECT_DIR$/vitest.config.ts" />
    <node-interpreter value="project" />
    <vitest-package value="$PROJECT_DIR$/node_modules/vitest" />
    <working-dir value="$PROJECT_DIR$/{{packageDir}}" />
    <envs />
    <scope-kind value="ALL" />
    <method v="2">
      <option name="NpmBeforeRunTask" enabled="true">
        <package-json value="$PROJECT_DIR$/package.json" />
        <command value="run" />
        <scripts>
          <script value="build" />
        </scripts>
        <arguments value="--filter {{packageName}}" />
        <node-interpreter value="project" />
        <envs />
      </option>
    </method>
  </configuration>
</component>
`);

type Context = TemplateContext & { type: 'npm' | 'vitest' };

async function renderConfiguration(context: Context) {
  const [, packageName] = context.packageName.split('/');
  const fileName = `${packageName}:${context.scriptName}`.replace(/[-:]/g, '_');
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
  name: string;
  scripts?: Record<string, string>;
};

async function parsePackageJson(dir: string) {
  const content = await readFile(join(dir, 'package.json'), 'utf-8');
  const packageJson: PackageJson = JSON.parse(content);

  const scripts = Object.keys(packageJson.scripts ?? []).filter((it) => SCRIPTS.has(it));

  return { name: packageJson.name, scripts };
}

async function* walkPackages(): AsyncGenerator<Context> {
  for await (const entry of walkPackageDirs()) {
    const packageDir = join(entry.path, entry.name);

    const { name: packageName, scripts } = await parsePackageJson(packageDir);

    for (const scriptName of scripts) {
      const packageDir = join(relative(ROOT_DIR, entry.path), entry.name);

      yield {
        type: scriptName === 'test' ? 'vitest' : 'npm',

        packageName,
        packageDir,
        scriptName,
      };
    }
  }
}

// endregion

// region Main

for await (const context of walkPackages()) {
  await renderConfiguration(context);
}

// endregion
