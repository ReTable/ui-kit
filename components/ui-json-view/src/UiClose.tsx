import { memo } from 'react';

import { lines } from './style.css';

import { levelOf } from './helpers';
import { CloseLine } from './types';

type Props = {
  line: CloseLine;
};

export const UiClose = memo<Props>(({ line }) => (
  <div className={lines.boundary} style={levelOf(line)}>
    {line.closeSymbol}
  </div>
));

UiClose.displayName = `UiJsonView(UiClose)`;
