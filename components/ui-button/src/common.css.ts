import { style } from '@vanilla-extract/css';

import { uiTheme } from '@tabula/ui-theme';

export const icon = style({
  transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
  pointerEvents: 'none',
});

export const hasIcon = style({});

export const isDisabled = style({});

export const isFrozen = style({});
