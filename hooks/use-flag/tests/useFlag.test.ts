import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useFlag } from '~';

describe('useFlag', () => {
  it('works', () => {
    const { result } = renderHook(useFlag);

    expect(result.current.counter).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(0);
  });
});
