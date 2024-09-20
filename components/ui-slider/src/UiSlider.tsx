import { ChangeEventHandler, ReactNode, useCallback, useMemo } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx/lite';

import * as styles from './UiSlider.css';
import { progressVar } from './UiSlider.css';

export type ChangeHandler = (value: number) => void;

export type Variant = keyof typeof styles.variants;

export type Props = {
  className?: string;
  id?: string;
  isDisabled?: boolean;
  max: number;
  min: number;
  name?: string;
  onChange: ChangeHandler;
  step?: number;
  value: number;
  variant?: Variant;
};

export function UiSlider({
  className,
  id,
  isDisabled,
  max,
  min,
  name,
  onChange,
  step,
  value,
  variant = 'normal',
}: Props): ReactNode {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      onChange(event.target.valueAsNumber);
    },
    [onChange],
  );

  const style = useMemo(() => {
    // NOTE: Prevent division by zero.
    const progress = max === 0 ? 0 : Math.min((value / max) * 100, 100);

    return assignInlineVars({
      [progressVar]: `${progress}%`,
    });
  }, [value, max]);

  return (
    <input
      className={clsx(styles.root, styles.variants[variant], className)}
      disabled={isDisabled}
      id={id}
      max={max}
      min={min}
      name={name}
      onChange={handleChange}
      step={step}
      style={style}
      type="range"
      value={value}
    />
  );
}

if (import.meta.env.DEV) {
  UiSlider.displayName = 'ui-slider(UiSlider)';
}
