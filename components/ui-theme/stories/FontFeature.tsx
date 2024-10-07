import { ReactNode } from 'react';

import { clsx } from 'clsx/lite';

import * as styles from './FontFeature.css';

type Sample = { before?: string; after?: string };

type Props = {
  family: 'sans-serif' | 'monospace';
  fontFeatureSettings: string | string[];
  samples: Sample[];
};

export function FontFeature({ family, fontFeatureSettings, samples }: Props): ReactNode {
  const settings =
    typeof fontFeatureSettings === 'string'
      ? JSON.stringify(fontFeatureSettings)
      : fontFeatureSettings.map((it) => JSON.stringify(it)).join(', ');

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
            {before != null && <span className={styles.before}>{before}</span>}
            {after != null && (
              <span className={styles.after} style={{ fontFeatureSettings: settings }}>
                {after}
              </span>
            )}
          </div>
        ))}
      </div>
      <pre>
        <span className={styles.property}>font-feature-settings</span>:{' '}
        <span className={styles.value}>{settings}</span>;
      </pre>
    </div>
  );
}
