import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { fromObject } from 'convert-source-map';
import sass from 'sass';

type Options = {
  path: string;
  sourcemap: boolean;
  sourcesContent: boolean;
};

type Result = {
  css: string;
  watchFiles?: string[];
};

async function renderCss({ path }: Options): Promise<Result> {
  const css = await readFile(path, 'utf8');

  return { css };
}

function renderScss({ path, sourcemap, sourcesContent }: Options): Result {
  const result = sass.compile(path, {
    sourceMap: sourcemap,
    sourceMapIncludeSources: sourcesContent,
  });

  let { css } = result;

  const { loadedUrls, sourceMap } = result;

  if (sourceMap != null) {
    css += fromObject(sourceMap).toComment({ multiline: true });
  }

  const dependencies = loadedUrls.map((url) => fileURLToPath(url));

  return { css, watchFiles: dependencies };
}

export async function renderStyle(options: Options): Promise<Result> {
  switch (extname(options.path)) {
    case '.css':
    case '.pcss': {
      return renderCss(options);
    }
    case '.sass':
    case '.scss': {
      return renderScss(options);
    }
    default: {
      throw new Error(`Unknown extension of the '${options.path}`);
    }
  }
}
