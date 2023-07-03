import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

export function findTscPath(): string {
  const resolver = createRequire(import.meta.url);
  const typescript = resolver.resolve('typescript');

  return resolve(dirname(typescript), 'tsc.js');
}
