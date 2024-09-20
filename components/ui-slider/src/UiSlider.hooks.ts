export function usePercents(value: number, min: number, max: number): number {
  if (value <= min) {
    return 0;
  }

  if (value >= max) {
    return 100;
  }

  if (min >= max) {
    return 0;
  }

  const total = Math.abs(max - min);
  const current = Math.abs(value - min);

  return (current / total) * 100;
}
