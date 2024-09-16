import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import { UiSlider } from '@tabula/ui-slider';

import * as styles from './Temperature.css';

type Props = {
  className?: string;

  min: number;
  max: number;

  value: number;

  onChange: (value: number) => void;
};

export function Temperature({ className, min, max, onChange, value }: Props): ReactNode {
  const creativityLevel = `${Math.round(value * 10)} / 10`;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.header}>
        <div className={styles.label}>AI creativity</div>
        <div className={styles.value}>{creativityLevel}</div>
      </div>
      <UiSlider onChange={onChange} min={min} max={max} value={value} />
    </div>
  );
}

if (import.meta.env.DEV) {
  Temperature.displayName = 'ui-ai-chat(Temperature)';
}
