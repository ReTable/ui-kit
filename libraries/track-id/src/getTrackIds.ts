type TrackIds<Ids extends Record<string, string | false | null | undefined>> = {
  [Key in keyof Ids]: string | undefined;
};

export function getTrackIds<Ids extends Record<string, string | false | null | undefined>>(
  scope: string | null | undefined,
  ids: Ids,
): TrackIds<Ids> {
  const result: Record<string, string | null> = {};

  for (const [name, id] of Object.entries(ids)) {
    if (scope == null || scope === '') {
      continue;
    }

    if (!id || id === '') {
      continue;
    }

    result[name] = `${scope}--${id}`;
  }

  return result as TrackIds<Ids>;
}
