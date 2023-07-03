export async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url);
  const content = await response.text();

  debugger;

  return JSON.parse(content);
}
