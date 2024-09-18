import { memo } from 'react';

import * as styles from './Toolbar.css';

export const Divider = memo(() => <div className={styles.divider} />);

if (import.meta.env.DEV) {
  Divider.displayName = 'ui-ai-chat(ToolbarDivider)';
}
