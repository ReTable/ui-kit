import { Part } from '../../Dropdown.types';

export function match(rawTarget: string, rawPattern: string): [boolean, Part[]] {
  if (rawPattern.length === 0) {
    return [
      true,
      [
        {
          isMatches: false,
          substring: rawTarget,
        },
      ],
    ];
  }

  const target = rawTarget.toLowerCase();
  const pattern = rawPattern.toLowerCase();

  const parts: Part[] = [];

  let lastIndex = 0;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    const index = target.indexOf(pattern, lastIndex);

    if (index === -1) {
      break;
    }

    if (index > lastIndex) {
      parts.push({
        isMatches: false,
        substring: rawTarget.slice(lastIndex, index),
      });
    }

    lastIndex = index + pattern.length;

    parts.push({
      isMatches: true,
      substring: rawTarget.slice(index, lastIndex),
    });
  }

  if (lastIndex < target.length) {
    parts.push({ isMatches: false, substring: rawTarget.slice(lastIndex) });
  }

  if (parts.length === 1) {
    return [parts[0].isMatches, parts];
  }

  return [true, parts];
}
