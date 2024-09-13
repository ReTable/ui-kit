import { useState } from 'react';

import { Mode } from '~';

import {
  DEFAULT_MODE,
  MAX_PROMPT_LENGTH,
  MAX_TEMPERATURE,
  MIN_TEMPERATURE,
  MODES,
} from '../Chat.const';
import { Options } from '../Chat.types';

export function useOptions(): Options {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE);
  const [context, setContext] = useState<string>('');
  const [temperature, setTemperature] = useState(MIN_TEMPERATURE);

  return {
    mode,
    supportedModes: MODES,
    onChangeMode: setMode,

    context,
    onChangeContext: setContext,

    temperature,
    minTemperature: MIN_TEMPERATURE,
    maxTemperature: MAX_TEMPERATURE,
    onChangeTemperature: setTemperature,

    maxPromptLength: MAX_PROMPT_LENGTH,
  };
}
