import { createHash } from 'node:crypto';

type Options = {
  classNames: Record<string, string>;
  css: string;
};

function renderImport(css: string): string {
  const base64 = createHash('sha256').update(JSON.stringify(css)).digest('base64url');
  const url = `ni:css-module;${base64}`;

  return `import ${JSON.stringify(url)};`;
}

function renderExport(classNames: Record<string, string>): string {
  return `export default ${JSON.stringify(classNames, null, 2)};`;
}

export function renderModule({ css, classNames }: Options): string {
  return `${renderImport(css)}\n${renderExport(classNames)}`;
}
