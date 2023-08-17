import { cp, mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { paramCase } from 'change-case';
import { oraPromise } from 'ora';
import { temporaryDirectoryTask } from 'tempy';

// region Types

type Layers = string[];

type Font = {
  font: string;
  letterSpacing?: string;
  textTransform?: string;
};

type Fonts = {
  sansSerif: Record<string, Font>;
  monospace: Record<string, Font>;
};

type Tokens = {
  [index: string]: Tokens | string;
};

type Queue = Array<{
  context: string;
  tokens: Tokens;
}>;

// endregion

// region Paths

const rootDir = resolve(fileURLToPath(import.meta.url), '../../');

const outDir = join(rootDir, 'sass');

const varsInput = join(rootDir, 'src/vars.css.ts');

const layersOutput = join(outDir, 'layers.scss');

const tokensOutput = join(outDir, 'tokens.scss');

const fontsMixinsOutput = join(outDir, 'fonts.scss');

// endregion

// region Export

function nameOf(key: string, context: string) {
  return context === '' ? key : `${context}--${key}`;
}

function generateSassTokens(tokens: Tokens): string {
  const buffer: string[] = [];

  const queue: Queue = [{ context: '', tokens }];

  let current = queue.pop();

  while (current != null) {
    for (const key in current.tokens) {
      const value = current.tokens[key];
      const variableName = nameOf(key, current.context);

      if (typeof value === 'string') {
        buffer.push(`$${variableName}: var(--tbl--${variableName});`);
      } else {
        queue.push({ context: `${variableName}`, tokens: value });
      }
    }

    if (current.context !== '') {
      buffer.push('');
    }

    current = queue.pop();
  }

  return buffer.join('\n');
}

function generateSassLayers(layers: Layers) {
  const buffer: string[] = [];

  for (const layer of layers) {
    buffer.push(`$layer--${layer}: ${layer};`);
  }

  return buffer.join('\n');
}

function fontMixin(family: string, variant: string, font: Font) {
  const weight = variant.slice(0, -2);
  const size = variant.slice(-2);

  const mixinName = `font-${paramCase(family)}-${weight}-${size}`;

  const buffer = [`@mixin ${mixinName} {`];

  buffer.push(`  font: var(--tbl--fonts--${family}--${weight}${size}--font);`);

  if (font.letterSpacing != null) {
    buffer.push(`  letter-spacing: var(--tbl--fonts--${family}--${weight}${size}--letterSpacing);`);
  }

  if (font.textTransform != null) {
    buffer.push(`  text-transform: var(--tbl--fonts--${family}--${weight}${size}--textTransform);`);
  }

  buffer.push('}');

  return buffer.join('\n');
}

function generateSassFontMixins(fonts: Fonts) {
  const buffer: string[] = [];

  for (const [variantName, variant] of Object.entries(fonts.sansSerif)) {
    buffer.push(fontMixin('sansSerif', variantName, variant));
  }

  for (const [variantName, variant] of Object.entries(fonts.monospace)) {
    buffer.push(fontMixin('monospace', variantName, variant));
  }

  return buffer.join('\n\n');
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

      const layersContent = generateSassLayers(layers);
      const tokensContent = generateSassTokens(tokens);
      const fontsMixinsContent = generateSassFontMixins(tokens.fonts as Fonts);

      await writeFile(layersOutput, layersContent, 'utf-8');
      await writeFile(tokensOutput, tokensContent, 'utf-8');
      await writeFile(fontsMixinsOutput, fontsMixinsContent, 'utf-8');
    });
  }, 'Exporting tokens');
}

// endregion

// region Run

await exportTokens();
