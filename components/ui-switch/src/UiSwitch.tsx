import {
  CSSProperties,
  ChangeEventHandler,
  PropsWithChildren,
  ReactNode,
  useCallback,
} from 'react';

import { clsx } from 'clsx/lite';

import { ReactComponent as OffIcon } from './assets/off.svg';
import { ReactComponent as OnIcon } from './assets/on.svg';

import * as styles from './UiSwitch.css';

export type Size = keyof typeof styles.sizes;

export type OnChangeFn = (isChecked: boolean) => void;

export type Props = PropsWithChildren<{
  /**
   * User defined CSS class which be assigned to the root element.
   */
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
   * Allows to reverse layout when label will be leading and handler trailing.
   */
  isReversed?: boolean;
  /**
   * See [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#name)
   */
  name?: string;
  onChange?: OnChangeFn;
  /**
   * Allows to switch between different sizes.
   */
  size?: Size;
  /**
   * User defined CSS styles which be assigned to the root element.
   */
  style?: CSSProperties;
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

export function UiSwitch({
  children,
  className,
  id,
  isChecked = false,
  isDisabled,
  isReversed = false,
  name,
  onChange,
  size = 'medium',
  style,
  testId,
  trackId,
}: Props): ReactNode {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      onChange?.(target.checked);
    },
    [onChange],
  );

  const [inputTestId, contentTestId] =
    testId == null ? [] : [`${testId}--input`, `${testId}--content`];

  const Icon = isChecked ? OnIcon : OffIcon;

  return (
    <label
      className={clsx(
        styles.root,
        isReversed ? styles.directions.reverse : styles.directions.direct,
        styles.sizes[size],
        className,
      )}
      data-testid={testId}
      data-track-id={trackId}
      htmlFor={id}
      style={style}
    >
      <input
        checked={isChecked}
        className={styles.input}
        data-testid={inputTestId}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={handleChange}
        type="checkbox"
      />
      <div className={styles.indicator}>
        <div className={styles.indicatorHandle}>
          <Icon className={styles.indicatorIcon} />
        </div>
      </div>
      <div className={styles.content} data-testid={contentTestId}>
        {children}
      </div>
    </label>
  );
}

if (import.meta.env.DEV) {
  UiSwitch.displayName = 'ui-switch(UiSwitch)';
}
