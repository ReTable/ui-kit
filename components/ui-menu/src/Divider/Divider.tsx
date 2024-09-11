import { memo } from 'react';

import clsx from 'clsx';

import { stopEvent } from '@tabula/dom-utils';

import * as styles from './Divider.css';

export const Divider = memo(() => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className={clsx(styles.root)} data-stop-propagation="true" onClick={stopEvent} />
));

if (import.meta.env.DEV) {
  Divider.displayName = 'UiMenu(Divider)';
}
