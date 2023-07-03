/// <reference path="../types/vendor.d.ts" />
import { readFile } from 'node:fs/promises';

import { parseJson } from 'parse-json';
import { parseJsonDev } from 'parse-json-dev';
import { parseJsonOptional } from 'parse-json-optional';
import { parseJsonPeer } from 'parse-json-peer';

export async function readJson(
  filePath: string,
  use?: 'dev' | 'optional' | 'peer',
): Promise<unknown> {
  const content = await readFile(filePath, 'utf8');

  switch (use) {
    case 'dev':
      return parseJsonDev(content);
    case 'optional':
      return parseJsonOptional(content);
    case 'peer':
      return parseJsonPeer(content);
  }

  return parseJson(content);
}
