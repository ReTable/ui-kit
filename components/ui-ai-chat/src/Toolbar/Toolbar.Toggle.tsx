import { ChangeEventHandler, ReactNode, useCallback, useId } from 'react';

import * as styles from './Toolbar.css';

import { ToolbarItemIcon } from '../types';

type Props = {
  icon: ToolbarItemIcon;
  label: string;

  onToggle: (value: boolean) => void;

  value: boolean;
};

export function Toggle({ icon: Icon, label, onToggle, value }: Props): ReactNode {
  const id = useId();

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      onToggle(event.target.checked);
    },
    [onToggle],
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.toggle} htmlFor={id} title={label}>
      <input
        className={styles.toggleInput}
        id={id}
        checked={value}
        onChange={handleChange}
        type="checkbox"
      />
      <Icon className={styles.icon} />
    </label>
  );
}

if (import.meta.env.DEV) {
  Toggle.displayName = 'ui-ai-chat(ToolbarToggle)';
}
