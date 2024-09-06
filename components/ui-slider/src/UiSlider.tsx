import { MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './UiSlider.css';

export type Props = {
  className?: string;
  onChange: (v: number) => void;
  range: [number, number];
  value: number;
};

const INTENTIONAL_DRAG_THRESHOLD = 0.005;

function getStyles(value: number, range: [number, number]) {
  const percent = ((value - range[0]) / (range[1] - range[0])) * 100;
  return {
    line: {
      backgroundSize: `${percent}%`,
    },
    circle: {
      left: `max(0%, min(100% - ${styles.circleSize}px, calc(${percent}% - ${styles.circleSize / 2}px)))`,
    },
  };
}

function calculateValue(e: MouseEvent, root: HTMLDivElement, range: [number, number]) {
  const rect = root.getBoundingClientRect();
  const pos = (e.pageX - rect.x) / rect.width;

  const scale = Math.min(1, Math.max(0, pos));

  return range[0] + scale * (range[1] - range[0]);
}

export function UiSlider({ className, value, onChange, range }: Props): ReactNode {
  const rootRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const { line, circle } = getStyles(value, range);

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

      const newValue = calculateValue(e, rootRef.current, range);
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
  }, [mouseDown, range, onChange, value]);

  const mouseDownHandler = useCallback<MouseEventHandler>(
    (e) => {
      if (rootRef.current == null) {
        return;
      }

      setMouseDown(true);
      onChange(calculateValue(e.nativeEvent, rootRef.current, range));
    },
    [range, onChange],
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
