import { FC } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx/lite';

import { bezierRoot, curve, grid, root, vars } from './Easing.css';

// region Helpers

function getBezierOf(variable: string): number[] {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable.slice(4, -1))
    .slice(13, -1)
    .split(', ')
    .map((it) => Number.parseFloat(it));
}

function buildGridPath(size: number, stepSize: number): string {
  const steps = size / stepSize;

  const path: string[] = [];

  for (let step = 0; step <= steps; step += 1) {
    let initial = step * stepSize;

    if (step === 0) {
      initial += 1;
    } else if (step === steps) {
      initial -= 1;
    }

    path.push(`M 0 ${initial}`, `H ${size}`, `M ${initial} 0`, `V ${size}`);
  }

  return path.join(' ');
}

function buildCurvePath(size: number, variable: string): string {
  const params = getBezierOf(variable);

  const path = ['M 1 1 C'];

  for (const param of params) {
    path.push((size * param).toString());
  }

  path.push(`${size - 1} ${size - 1}`);

  return path.join(' ');
}

// endregion

type Props = {
  className?: string;
  duration: number;
  gridSize?: number;
  size?: number;
  variable: string;
};

export const Easing: FC<Props> = ({ className, duration, gridSize = 4, size = 300, variable }) => {
  const stepSize = size / gridSize;

  return (
    <div
      className={clsx(root, className)}
      style={assignInlineVars(vars, {
        duration: `${duration}s`,
        height: `${size}px`,
        timingFunction: variable,
      })}
    >
      <svg className={bezierRoot} height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <path className={grid} d={buildGridPath(size, stepSize)} />
        <path className={curve} d={buildCurvePath(size, variable)} />
      </svg>
    </div>
  );
};
