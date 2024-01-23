export function getTrackId(
  scope?: string | null | undefined,
  id?: string | false | null,
): string | undefined {
  if (scope == null || scope === '') {
    return;
  }

  if (id === false || id === '') {
    return;
  }

  if (id == null) {
    return scope;
  }

  return `${scope}--${id}`;
}
