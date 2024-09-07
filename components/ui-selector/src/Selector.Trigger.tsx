import { ReactNode, useMemo } from 'react';

import clsx from 'clsx';
import { Chevron12Icon, Direction, RunningSIcon } from 'src/components/icons';

import styles from './Selector.module.scss';

import { Props as SelectorProps } from './Selector.types';

type Props = Pick<
  SelectorProps,
  'loading' | 'onRenderTrigger' | 'placeholder' | 'showSearchField'
> & {
  className?: string;
  disabled?: boolean;
  invalid?: boolean;
  warning?: boolean;
  isVisible: boolean;
};

export function SelectorTrigger({
  className,
  disabled,
  invalid,
  warning,
  isVisible,
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
      return <RunningSIcon className={styles.arrow} />;
    }

    if (showSearchField && isVisible) {
      return null;
    }

    return (
      <Chevron12Icon
        className={styles.arrow}
        direction={isVisible ? Direction.Up : Direction.Down}
      />
    );
  }, [isVisible, loading, showSearchField]);

  return (
    <div
      className={clsx(
        styles.trigger,
        className,
        isVisible && styles.visible,
        warning && styles.warning,
        invalid && styles.invalid,
        disabled && styles.disabled,
      )}
    >
      <div className={styles.content}>{triggerContent}</div>
      {triggerIcon}
    </div>
  );
}
