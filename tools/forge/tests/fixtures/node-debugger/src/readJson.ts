import { readFile } from 'node:fs/promises';

export async function readJson(filePath: string): Promise<unknown> {
  const content = await readFile(filePath, 'utf8');

  debugger;

  return JSON.parse(content);
}
