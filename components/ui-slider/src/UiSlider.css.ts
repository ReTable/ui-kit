import { CSSProperties } from 'react';

import { createVar, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

// region Constants

const THUMB_SIZE = 20;

// endregion Constants

// region CSS Variables

export const progressVar = createVar();

// endregion CSS Variables

// region Helpers

function trackBackground(from: string, to?: string): string {
  return [
    `linear-gradient(to left, ${uiTheme.colors.neutralAlpha['10']} 0%, ${uiTheme.colors.neutralAlpha['10']} calc(100% - ${progressVar}), transparent calc(100% - ${progressVar}), transparent 0)`,
    `linear-gradient(to left, white 0%, white calc(100% - ${progressVar}), transparent calc(100% - ${progressVar}), transparent 0)`,
    `linear-gradient(to right, ${from}, ${to ?? from})`,
  ].join(', ');
}

// endregion Helpers

// region Track

const track: CSSProperties = {
  width: '100%',
  height: '4px',
  borderRadius: '2px',
  transition: `background-size ${uiTheme.duration.moderate['1']} ${uiTheme.easing.standard.expressive}`,
};

const trackDisabled: CSSProperties = {
  backgroundImage: trackBackground(uiTheme.colors.neutralAlpha['40']),
};

// endregion Track

// region Thumb

const thumb: CSSProperties = {
  appearance: 'none',
  width: `${THUMB_SIZE}px`,
  height: `${THUMB_SIZE}px`,
  marginTop: '-8px',
  border: 'none',
  borderRadius: '10px',
  background: uiTheme.colors.background.primaryContent,
  boxShadow: [
    `0px 4px 12px 0px ${uiTheme.colors.shadow['16']}`,
    `0px 1px 2px 0px ${uiTheme.colors.shadow['12']}`,
  ].join(', '),
  transition: `background-color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
};

const thumbFocus: CSSProperties = {
  outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
  outlineOffset: '0',
};

const thumbHover: CSSProperties = {
  backgroundColor: uiTheme.colors.background.panels,
};

const thumbActive: CSSProperties = {
  boxShadow: [
    `0px 1px 2px 0px ${uiTheme.colors.shadow['16']}`,
    `0px 1px 2px 0px ${uiTheme.colors.shadow['12']}`,
  ].join(', '),
};

const thumbDisabled: CSSProperties = {
  backgroundColor: uiTheme.colors.neutral['30'],
  boxShadow: [
    `0px 2px 6px 0px ${uiTheme.colors.shadow['12']}`,
    `0px 1px 2px 0px ${uiTheme.colors.shadow['8']}`,
  ].join(', '),
  cursor: 'default',
};

// endregion Thumb

// region Root

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      width: 'auto',
      height: `${THUMB_SIZE}px`,
      appearance: 'none',
      background: 'transparent',
      cursor: 'pointer',

      selectors: {
        '&:focus': {
          outline: 'none',
        },

        '&:disabled': {
          cursor: 'default',
        },

        // NOTE: The `-webkit-` selectors would be invalid in FF, and vice verse.
        //
        //       If one of the selectors is invalid, then all other is invalid too. To prevent this standard behaviour,
        //       we duplicate styles with dedicated selectors.

        '&::-webkit-slider-runnable-track': track,
        '&::-moz-range-track': track,

        '&:disabled::-webkit-slider-runnable-track': trackDisabled,
        '&:disabled::-moz-range-track': trackDisabled,

        '&::-webkit-slider-thumb': thumb,
        '&::-moz-range-thumb': thumb,

        '&:focus::-webkit-slider-thumb': thumbFocus,
        '&:focus::-moz-range-thumb': thumbFocus,

        '&::-webkit-slider-thumb:hover': thumbHover,
        '&::-moz-range-thumb:hover': thumbHover,

        '&::-webkit-slider-thumb:active': thumbActive,
        '&::-moz-range-thumb:active': thumbActive,

        '&:disabled::-webkit-slider-thumb': thumbDisabled,
        '&:disabled::-moz-range-thumb': thumbDisabled,
      },
    },
  },
});

export const variants = styleVariants(
  {
    normal: {
      from: uiTheme.colors.accent['100'],
      to: uiTheme.colors.accent['100'],
    },
    ai: {
      from: uiTheme.colors.fillControl.ai.from,
      to: uiTheme.colors.fillControl.ai.to,
    },
  },
  ({ from, to }) => {
    const properties: CSSProperties = {
      backgroundImage: trackBackground(from, to),
    };

    return {
      '@layer': {
        [uiLayers.components]: {
          selectors: {
            '&::-webkit-slider-runnable-track': properties,
            '&::-moz-range-track': properties,
          },
        },
      },
    };
  },
);

// endregion Root
