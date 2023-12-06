import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSize } from '~';

describe('useSize', () => {
  it('works', () => {
    const { result } = renderHook(useSize);

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
