import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UiTheme, uiLayers, uiTheme, useUiTheme } from '~';

describe('UiTheme', () => {
  it('provides layers and vars through context', () => {
    const { result } = renderHook(() => useUiTheme(), {
      wrapper: UiTheme,
    });

    expect(result.current).toEqual({
      layers: uiLayers,
      vars: uiTheme,
    });
  });
});
