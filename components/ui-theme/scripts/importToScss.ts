import { cp, mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { kebabCase } from 'change-case';
import { oraPromise } from 'ora';
import { temporaryDirectoryTask } from 'tempy';

// region Types

type Layers = string[];

type Tokens = {
  [index: string]: Tokens | string;
};

// endregion

// region Paths

const rootDir = resolve(fileURLToPath(import.meta.url), '../../');

const outDir = join(rootDir, 'sass');

const varsInput = join(rootDir, 'src/vars.css.ts');

const layersOutput = join(outDir, 'layers.scss');

const tokensOutput = join(outDir, 'tokens.scss');

const fontsMixinsOutput = join(outDir, 'fonts.scss');

// endregion

// region Variables

function fontNameOf(path: string[]) {
  return path
    .map((it) => {
      const segment = kebabCase(it);

      return /\d+$/.test(segment) ? `${segment.slice(0, -2)}-${segment.slice(-2)}` : segment;
    })
    .join('--');
}

function colorNameOf(path: string[]) {
  let isAlpha = false;

  return path
    .map((it) => {
      const segment = kebabCase(it);

      if (segment.endsWith('-alpha')) {
        isAlpha = true;

        return segment.slice(0, -6);
      } else if (/^\d+$/.test(it) && isAlpha) {
        return `A${segment}`;
      }

      return segment;
    })
    .join('--')
    .replace(/(?<left>[a-z]+)(?<right>\d+)$/, '$<left>-$<right>');
}

function nameOf(path: string[]) {
  return path[0] === 'fonts' ? fontNameOf(path) : colorNameOf(path);
}

function collectVariables(tokens: Tokens) {
  const queue = Object.entries(tokens).map<[string[], Tokens | string]>(([key, value]) => [
    [key],
    value,
  ]);

  const variables: string[] = [];

  while (queue.length > 0) {
    const item = queue.pop();

    if (item == null) {
      break;
    }

    const [path, scoped] = item;

    if (typeof scoped === 'string') {
      variables.push(nameOf(path));

      continue;
    }

    for (const [key, value] of Object.entries(scoped)) {
      queue.push([[...path, key], value]);
    }
  }

  return variables;
}

// endregion

// region Export

function generateSassTokens(variables: string[]): string {
  return variables.map((it) => `$${it}: var(--tbl--${it});`).join('\n');
}

function generateSassLayers(layers: Layers) {
  return layers.map((it) => `$layer--${it}: ${it};`).join('\n');
}

function generateSassFontMixins(variables: string[]) {
  const buffer: string[] = [];

  const fontVariables = new Set(variables.filter((it) => it.startsWith('fonts--')));

  for (const variable of fontVariables) {
    if (!variable.endsWith('--font')) {
      continue;
    }

    const mixinName = variable
      .split('--')
      .slice(1, -1)
      .map((it) => kebabCase(it))
      .join('--')
      .replace('_', '-');

    buffer.push(`@mixin ${mixinName} {`, `  font: var(--tbl--${variable});`);

    const letterSpacing = variable.replace(/--font$/, '--letter-spacing');

    if (fontVariables.has(letterSpacing)) {
      buffer.push(`  letter-spacing: var(--tbl--${letterSpacing});`);
    }

    const textTransform = variable.replace(/--font$/, '--text-transform');

    if (fontVariables.has(textTransform)) {
      buffer.push(`  text-transform: var(--tbl--${textTransform});`);
    }

    buffer.push('}\n');
  }

  return buffer.join('\n');
}

async function exportTokens() {
  await oraPromise(async () => {
    await mkdir(outDir, { recursive: true });

    // NOTE: Node.js caches imported modules. It's a problem for watch mode.
    //
    //       We copy module with tokens, and import it from the temporary
    //       directory to avoid module caching.
    await temporaryDirectoryTask(async (dir) => {
      await cp(varsInput, join(dir, 'vars.css.ts'));

      const { layers, tokens } = (await import(join(dir, 'vars.css'))) as {
        layers: Layers;
        tokens: Tokens;
      };

      const variables = collectVariables(tokens);

      const layersContent = generateSassLayers(layers);
      const tokensContent = generateSassTokens(variables);
      const fontsMixinsContent = generateSassFontMixins(variables);

      await writeFile(layersOutput, layersContent, 'utf-8');
      await writeFile(tokensOutput, tokensContent, 'utf-8');
      await writeFile(fontsMixinsOutput, fontsMixinsContent, 'utf-8');
    });
  }, 'Exporting tokens');
}

// endregion

// region Run

await exportTokens();
