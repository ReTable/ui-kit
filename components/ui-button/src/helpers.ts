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
