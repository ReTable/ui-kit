export function toJson(source?: Record<string, string>): string {
  if (source == null) {
    return null;
  }

  return JSON.stringify(source);
}
