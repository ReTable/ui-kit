import { memo } from 'react';

import { lines } from './style.css';

import { levelOf } from './helpers';
import { PlaceholderLine } from './types';

type Props = {
  line: PlaceholderLine;
};

export const UiPlaceholder = memo<Props>(({ line }) => (
  <div className={lines.placeholder} style={levelOf(line)}>
    {line.placeholder}
  </div>
));

UiPlaceholder.displayName = `UiJsonView(UiPlaceholder)`;
