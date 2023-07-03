const extension = '.vanilla.css';

export function isVanillaCss(path: string): boolean {
  return path.includes(extension);
}

export function getOriginalPath(path: string): string {
  return path.split(extension)[0];
}
