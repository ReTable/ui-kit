import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './FontFeature.css';

export type Sample = { before?: string; after?: string };

type Props = {
  defaultSettings: string[];
  family: 'sans-serif' | 'monospace';
  samples: Sample[];
  settings: string | string[];
};

export function FontFeature({ defaultSettings = [], family, samples, settings }: Props): ReactNode {
  const fontFeatureSettings =
    typeof settings === 'string'
      ? JSON.stringify(settings)
      : settings.map((it) => JSON.stringify(it)).join(', ');

  const defaultFontFeatureSettings = defaultSettings
    .map((it) => `${JSON.stringify(it)} off`)
    .join(', ');

  return (
    <div
      className={clsx(
        styles.root,
        family === 'sans-serif' ? styles.variants.sansSerif : styles.variants.monospace,
      )}
    >
      <div className={styles.samples}>
        {samples.map(({ before, after }) => (
          <div key={`${before}-${after}`} className={styles.sample}>
            {before != null && (
              <span
                className={styles.before}
                style={{ fontFeatureSettings: defaultFontFeatureSettings }}
              >
                {before}
              </span>
            )}
            {after != null && (
              <span className={styles.after} style={{ fontFeatureSettings }}>
                {after}
              </span>
            )}
          </div>
        ))}
      </div>
      <pre>
        <span className={styles.property}>font-feature-settings</span>:{' '}
        <span className={styles.value}>{fontFeatureSettings}</span>;
      </pre>
    </div>
  );
}
