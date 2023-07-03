/// <reference path="../types/vendor.d.ts" />
import { parseJson } from 'parse-json';
import { parseJsonDev } from 'parse-json-dev';
import { parseJsonOptional } from 'parse-json-optional';
import { parseJsonPeer } from 'parse-json-peer';

export async function fetchJson(url: string, use?: 'dev' | 'optional' | 'peer'): Promise<unknown> {
  const response = await fetch(url);
  const content = await response.text();

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
