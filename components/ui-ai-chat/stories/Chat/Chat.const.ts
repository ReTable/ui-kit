import { Mode } from '~';

export const DEFAULT_MODE: Mode = {
  id: 'general',
  name: 'General',
};

export const MODES: Mode[] = [
  DEFAULT_MODE,
  {
    id: 'flow',
    name: 'Ask about the flow',
  },
  {
    id: 'generate-table',
    name: 'Create a new table',
  },
  {
    id: 'generate-flow',
    name: 'Generate flow',
  },
];

export const MIN_TEMPERATURE = 0;
export const MAX_TEMPERATURE = 1;

export const MAX_PROMPT_LENGTH = 300;
