import { ReactNode } from 'react';

import * as styles from './Settings.css';

import { Drawer } from '../Drawer';
import { ModeSelector } from '../ModeSelector';
import { Temperature } from '../Temperature';
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
  return (
    <Drawer isOpened={isOpened} onClose={onClose} title="Chat settings">
      {supportedModes != null && onChangeMode != null && (
        <ModeSelector onChange={onChangeMode} options={supportedModes} value={mode} />
      )}
      <Temperature
        className={styles.temperature}
        min={minTemperature}
        max={maxTemperature}
        value={temperature}
        onChange={onChangeTemperature}
      />
      {context != null && onChangeContext != null && (
        <TextArea
          className={styles.context}
          onChange={onChangeContext}
          placeholder="Context"
          rows={3}
          value={context}
        />
      )}
    </Drawer>
  );
}

if (import.meta.env.DEV) {
  Settings.displayName = 'ui-ai-chat(Settings)';
}
