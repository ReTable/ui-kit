declare module 'parse-json' {
  export function parseJson(json: string): Promise<unknown>;
}

declare module 'parse-json-dev' {
  export function parseJsonDev(json: string): Promise<unknown>;
}

declare module 'parse-json-optional' {
  export function parseJsonOptional(json: string): Promise<unknown>;
}

declare module 'parse-json-peer' {
  export function parseJsonPeer(json: string): Promise<unknown>;
}
