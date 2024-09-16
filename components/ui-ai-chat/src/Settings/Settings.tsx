import { ReactNode } from 'react';

import { UiSlider } from '@tabula/ui-slider';

import * as styles from './Settings.css';

import { Drawer } from '../Drawer';
import { ModeSelector } from '../ModeSelector';
import { TextArea } from '../TextArea';
import { Mode } from '../types';

type Props = {
  isOpened: boolean;

  onClose: () => void;

  mode: Mode;
  supportedModes?: Mode[];
  onChangeMode?: (mode: Mode) => void;

  context?: string;
  onChangeContext?: (context: string) => void;

  temperature: number;

  minTemperature: number;
  maxTemperature: number;

  onChangeTemperature: (temperature: number) => void;
};

export function Settings({
  context,
  isOpened,
  maxTemperature,
  minTemperature,
  mode,
  onChangeContext,
  onChangeMode,
  onChangeTemperature,
  onClose,
  supportedModes,
  temperature,
}: Props): ReactNode {
  const creativityLevel = `${Math.round(temperature * 10)} / 10`;

  return (
    <Drawer isOpened={isOpened} onClose={onClose} title="Chat settings">
      {supportedModes != null && onChangeMode != null && (
        <ModeSelector
          className={styles.mode}
          onChange={onChangeMode}
          options={supportedModes}
          value={mode}
        />
      )}
      <div className={styles.creativity}>
        <div className={styles.creativityTitleContainer}>
          <div className={styles.creativityTitle}>AI creativity</div>
          <div className={styles.creativityLevel}>{creativityLevel}</div>
        </div>
        <UiSlider
          onChange={onChangeTemperature}
          min={minTemperature}
          max={maxTemperature}
          value={temperature}
        />
      </div>
      {context != null && onChangeContext != null && (
        <div className={styles.experimental}>
          <div className={styles.label}>Context</div>
          <TextArea
            className={styles.textarea}
            onChange={onChangeContext}
            placeholder="Context"
            rows={3}
            value={context}
          />
        </div>
      )}
    </Drawer>
  );
}

if (import.meta.env.DEV) {
  Settings.displayName = 'ui-ai-chat(Settings)';
}
