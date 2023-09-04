import { ReactNode } from 'react';

import { StyleRule } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export function wrap(styleRule: StyleRule): StyleRule {
  return {
    '@layer': {
      [uiLayers.components]: styleRule,
    },
  };
}

type GradientOptions = {
  from: string;
  to: string;
};

export function gradient({ from, to }: GradientOptions): string {
  return `linear-gradient(to right, ${from} 0%, ${to} 100%)`;
}

export function titleOf(title: string | undefined, children: ReactNode): string | undefined {
  if (title != null && title.length > 0) {
    return title;
  }

  if (typeof children === 'string' && children.length > 0) {
    return children;
  }

  return;
}
