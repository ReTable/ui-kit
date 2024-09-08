import { useState } from 'react';

import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { usePreviousValue } from '~';

describe('usePreviousValue hook', () => {
  const initialValue = 5;

  it('should initialize with null', () => {
    const { result } = renderHook<number | null, never>(() => usePreviousValue(5));

    expect(result.current).toBeNull();
  });

  it('should be return prev value', () => {
    type HookResult = {
      prevState: number | null;
      setState: (value: number) => void;
    };

    const { result } = renderHook<HookResult, never>(() => {
      const [state, setState] = useState(initialValue);
      const prevState = usePreviousValue(state);

      return { prevState, setState };
    });

    act(() => {
      result.current.setState(10);
    });

    expect(result.current.prevState).toBe(initialValue);
  });
});
