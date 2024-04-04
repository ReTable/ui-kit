import { PropsWithChildren, ReactNode } from 'react';

import clsx from 'clsx';

import { ReactComponent as CheckedIcon } from './assets/checked.svg';
import { ReactComponent as IndeterminateIcon } from './assets/indeterminate.svg';

import * as styles from './UiCheckbox.css';

import { useLifecycle } from './UiCheckbox.hooks';

export type Props = PropsWithChildren<{
  className?: string;
  /**
   * See [MDN](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)
   */
  id?: string;
  /**
   * See [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input/checkbox#checked)
   */
  isChecked?: boolean;
  /**
   * See [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#disabled)
   */
  isDisabled?: boolean;
  /**
   * See [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
   */
  isIndeterminate?: boolean;
  /**
   * See [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#name)
   */
  name?: string;
  onChange?: (isChecked: boolean) => void;
  /**
   * Defines `data-testid` attribute on the root element with the given value.
   *
   * Can be used for testing purposes.
   */
  testId?: string;
  /**
   * Defines `data-track-id` attribute on the root element with the given value.
   *
   * Can be used for analytics purposes.
   */
  trackId?: string;
}>;

export function UiCheckbox({
  children,
  className,
  id,
  isChecked = false,
  isDisabled,
  isIndeterminate = false,
  name,
  onChange,
  testId,
  trackId,
}: Props): ReactNode {
  const [ref, handleChange] = useLifecycle({ isIndeterminate, onChange });

  // NOTE: The checked icon is visible when a user hover over the element.
  const Icon = isIndeterminate ? IndeterminateIcon : CheckedIcon;

  return (
    <label
      className={clsx(styles.root, className)}
      data-testid={testId}
      data-track-id={trackId}
      htmlFor={id}
    >
      <input
        checked={isChecked}
        className={styles.input}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={handleChange}
        ref={ref}
        type="checkbox"
      />
      <span className={styles.indicator}>
        <Icon className={styles.icon} />
      </span>
      <div className={styles.content}>{children}</div>
    </label>
  );
}

if (import.meta.env.DEV) {
  UiCheckbox.displayName = 'ui-checkbox(UiCheckbox)';
}
