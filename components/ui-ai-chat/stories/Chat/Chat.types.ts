import { Mode } from '~';

export type Features = {
  mode: boolean;
  context: boolean;
  startNewChat: boolean;
};

export type Options = {
  mode: Mode;
  supportedModes: Mode[];
  onChangeMode: (mode: Mode) => void;

  context: string;
  onChangeContext: (context: string) => void;

  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  onChangeTemperature: (temperature: number) => void;

  maxPromptLength: number;
};
