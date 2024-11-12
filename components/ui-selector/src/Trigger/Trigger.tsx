import { ReactNode, useMemo } from 'react';

import clsx from 'clsx';

import { ReactComponent as ChevronDownIcon } from '../assets/chevronDown.svg';
import { ReactComponent as ChevronUpIcon } from '../assets/chevronUp.svg';
import { ReactComponent as RunningIcon } from '../assets/running.svg';

import * as styles from './Trigger.css';

import { Props as SelectorProps } from '../Selector.types';

type Props = Pick<
  SelectorProps,
  'loading' | 'onRenderTrigger' | 'placeholder' | 'showSearchField'
> & {
  className?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  isVisible: boolean;
  isWarning?: boolean;
};

export function Trigger({
  className,
  disabled,
  isInvalid,
  isVisible,
  isWarning,
  loading,
  onRenderTrigger,
  placeholder,
  showSearchField,
}: Props): ReactNode {
  const triggerContent = useMemo(() => {
    if (typeof onRenderTrigger === 'function') {
      const renderedTrigger = onRenderTrigger();
      if (renderedTrigger) {
        return renderedTrigger;
      }
    }

    return <span className={styles.placeholder}>{placeholder}</span>;
  }, [onRenderTrigger, placeholder]);

  const triggerIcon = useMemo(() => {
    if (loading) {
      return <RunningIcon className={styles.arrow} />;
    }

    if (showSearchField && isVisible) {
      return null;
    }

    return isVisible ? (
      <ChevronUpIcon className={styles.arrow} />
    ) : (
      <ChevronDownIcon className={styles.arrow} />
    );
  }, [isVisible, loading, showSearchField]);

  return (
    <div
      className={clsx(
        styles.root,
        className,
        isVisible && styles.states.isVisible,
        isWarning && styles.states.isWarning,
        isInvalid && styles.states.isInvalid,
        disabled && styles.states.isDisabled,
      )}
    >
      <div className={styles.content}>{triggerContent}</div>
      {triggerIcon}
    </div>
  );
}

if (import.meta.env.DEV) {
  Trigger.displayName = 'UiSelector(Trigger)';
}
