export type Request =
  | {
      id: number;

      prompt: string;
      answer: string;
    }
  | {
      id?: never;

      prompt: string;
      answer?: never;
    };

export type Controller = {
  scrollToTop: () => void;
  scrollToBottom: () => void;
};

export type Mode = {
  id: string;
  name: string;
};

export type TableData = {
  header: string[];
  rows: string[][];
};

export type TableAction = {
  label: string;
  action: (data: TableData) => void;
};

export type ModeProps =
  | {
      mode: Mode;
      supportedModes: Mode[];
      onChangeMode: (mode: Mode) => void;
    }
  | {
      mode?: never;
      supportedModes?: never;
      onChangeMode?: never;
    };

export type ContextProps =
  | {
      context: string;
      onChangeContext: (context: string) => void;
    }
  | {
      context?: never;
      onChangeContext?: never;
    };

export type TemperatureProps = {
  minTemperature: number;
  maxTemperature: number;

  temperature: number;
  onChangeTemperature: (temperature: number) => void;
};

export type SettingsProps = ModeProps & ContextProps & TemperatureProps;
