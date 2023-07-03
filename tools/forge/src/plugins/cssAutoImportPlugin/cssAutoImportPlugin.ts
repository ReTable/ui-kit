import { readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

import { Plugin } from 'esbuild';
import { SourceMapConsumer, SourceNode } from 'source-map';

const importCode = 'import "./index.css";\n\n';

export function cssAutoImportPlugin(): Plugin {
  return {
    name: 'css-auto-import-plugin',

    setup({ initialOptions, onEnd }) {
      const { absWorkingDir, outfile } = initialOptions;

      if (absWorkingDir == null) {
        throw new Error('The `absWorkingDir` option must be defined');
      }

      if (outfile == null) {
        throw new Error('The `outfile` option must be defined');
      }

      onEnd(async (result) => {
        const { outputs } = result.metafile ?? { outputs: null };

        if (outputs == null) {
          return;
        }

        const hasCss = Object.keys(outputs).some((it) => basename(it) === 'index.css');

        if (!hasCss) {
          return;
        }

        const sourcePath = join(absWorkingDir, outfile);
        const sourceContent = await readFile(sourcePath, 'utf8');

        const sourcemapPath = join(absWorkingDir, `${outfile}.map`);
        const sourcemapContent = await readFile(sourcemapPath, 'utf8');

        const consumer = await new SourceMapConsumer(sourcemapContent);
        const node = SourceNode.fromStringWithSourceMap(sourceContent, consumer);

        node.prepend(importCode);

        const { code, map } = node.toStringWithSourceMap();

        await writeFile(sourcePath, code, 'utf8');
        await writeFile(sourcemapPath, map.toString(), 'utf8');
      });
    },
  };
}
