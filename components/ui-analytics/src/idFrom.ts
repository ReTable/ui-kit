export function idFrom(trackId: string | null, id?: string): string | null {
  if (trackId == null) {
    return null;
  }

  if (id == null || id === '') {
    return trackId;
  }

  return `${trackId}--${id}`;
}
