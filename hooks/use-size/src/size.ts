export type Size = {
  height: number;
  width: number;
};

function rectToSize({ height, width }: DOMRect) {
  return {
    height: Math.round(height),
    width: Math.round(width),
  };
}

function areEqual(left: Size, right: Size) {
  return left.height === right.height && left.width === right.width;
}

export function updateSizeFromRect(current: Size, rect: DOMRect): Size {
  const next = rectToSize(rect);

  return areEqual(current, next) ? current : next;
}
