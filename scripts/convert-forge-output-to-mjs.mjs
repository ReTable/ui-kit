import { readdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = 'lib';

async function findGeneratedFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findGeneratedFiles(path)));
    } else {
      files.push(path);
    }
  }

  return files;
}

function replaceRelativeJsSpecifiers(content) {
  return content.replace(
    /(\b(?:from|import)\s*(?:\(\s*)?["'])(\.{1,2}\/[^"']+)\.js(["'])/g,
    '$1$2.mjs$3',
  );
}

async function rewriteJavaScript(path) {
  const content = await readFile(path, 'utf8');
  const rewritten = replaceRelativeJsSpecifiers(content).replace(
    /\/\/# sourceMappingURL=(.+)\.js\.map/g,
    '//# sourceMappingURL=$1.mjs.map',
  );

  if (rewritten !== content) {
    await writeFile(path, rewritten, 'utf8');
  }
}

async function rewriteSourceMap(path) {
  const content = await readFile(path, 'utf8');
  const sourceMap = JSON.parse(content);

  if (typeof sourceMap.file === 'string' && sourceMap.file.endsWith('.js')) {
    sourceMap.file = `${sourceMap.file.slice(0, -3)}.mjs`;
    await writeFile(path, `${JSON.stringify(sourceMap)}\n`, 'utf8');
  }
}

async function renameFile(path, from, to) {
  const target = `${path.slice(0, -from.length)}${to}`;

  await rm(target, { force: true });
  await rename(path, target);
}

async function main() {
  const files = await findGeneratedFiles(outputDir);
  const jsFiles = files.filter((path) => path.endsWith('.js'));
  const sourceMapFiles = files.filter((path) => path.endsWith('.js.map'));

  await Promise.all(jsFiles.map((path) => rewriteJavaScript(path)));
  await Promise.all(sourceMapFiles.map((path) => rewriteSourceMap(path)));

  await Promise.all(sourceMapFiles.map((path) => renameFile(path, '.js.map', '.mjs.map')));
  await Promise.all(jsFiles.map((path) => renameFile(path, '.js', '.mjs')));

  console.log(`Converted ${jsFiles.length} Forge output file(s) to .mjs`);
}

await main();
