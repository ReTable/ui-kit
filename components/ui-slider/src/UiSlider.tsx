import { MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiSlider.css';

export type ChangeHandler = (value: number) => void;

export type Props = {
  /**
   * User defined CSS class which be assigned to the root element.
   */
  className?: string;
  onChange: ChangeHandler;
  /**
   * The lowest value in the range of permitted values.
   */
  min: number;
  /**
   * The greatest value in the range of permitted values.
   */
  max: number;
  /**
   * The input control's value.
   */
  value: number;
};

const INTENTIONAL_DRAG_THRESHOLD = 0.005;

function getStyles(value: number, min: number, max: number) {
  const percent = ((value - min) / (max - min)) * 100;
  return {
    line: {
      backgroundSize: `${percent}%`,
    },
    circle: {
      left: `max(0%, min(100% - ${styles.circleSize}px, calc(${percent}% - ${styles.circleSize / 2}px)))`,
    },
  };
}

function calculateValue(e: MouseEvent, root: HTMLDivElement, min: number, max: number) {
  const rect = root.getBoundingClientRect();
  const pos = (e.pageX - rect.x) / rect.width;

  const scale = Math.min(1, Math.max(0, pos));

  return min + scale * (max - min);
}

export function UiSlider({ className, max, min, onChange, value }: Props): ReactNode {
  const rootRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const { line, circle } = getStyles(value, min, max);

  useEffect(() => {
    const handleMouseUp = () => {
      setMouseDown(false);
      setDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseDown || rootRef.current == null) {
        return;
      }

      e.preventDefault();

      const newValue = calculateValue(e, rootRef.current, min, max);
      const drag = Math.abs(value - newValue) / value;

      if (drag > INTENTIONAL_DRAG_THRESHOLD) {
        onChange(newValue);
        setDragging(true);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown, min, max, onChange, value]);

  const mouseDownHandler = useCallback<MouseEventHandler>(
    (e) => {
      if (rootRef.current == null) {
        return;
      }

      setMouseDown(true);
      onChange(calculateValue(e.nativeEvent, rootRef.current, min, max));
    },
    [min, max, onChange],
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={rootRef}
      className={clsx(
        styles.root,
        mouseDown && styles.states.isMouseDown,
        dragging && styles.states.isDragging,
        className,
      )}
      onMouseDown={mouseDownHandler}
    >
      <div className={styles.line} style={line}>
        <div className={styles.circleContainer} style={circle}>
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
}

if (import.meta.env.DEV) {
  UiSlider.displayName = 'ui-slider(UiSlider)';
}
