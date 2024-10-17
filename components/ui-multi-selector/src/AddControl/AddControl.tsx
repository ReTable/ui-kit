import { ReactNode, useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import {
  ChangeVisibleHandler,
  ConfigItem,
  Offset,
  UiSelector,
  VisibleKind,
} from '@tabula/ui-selector';
import { usePreviousValue } from '@tabula/use-previous-value';

import * as styles from './AddControl.css';

export type Props = {
  config: ConfigItem[];
  defaultItem?: ConfigItem;
  emptyContent?: ReactNode;
  isEmpty: boolean;
  triggerContent: string;
};

const emptyListOffset: Offset = { mainAxis: 3 };
const fillListOffset: Offset = { mainAxis: 5 };

export function AddControl({
  config,
  defaultItem,
  emptyContent,
  isEmpty,
  triggerContent,
}: Props): ReactNode {
  const [isVisible, setIsVisible] = useState(false);

  const prevConfigSize = usePreviousValue(config.length);

  useEffect(() => {
    // NOTE: Set list visibility to false after adding all items.
    if (config.length === 0 && prevConfigSize !== 0 && isVisible) {
      setIsVisible(false);
    }
  }, [config.length, prevConfigSize, isVisible]);

  const onChangeVisible = useCallback<ChangeVisibleHandler>(
    (visible, kind) => {
      // NOTE: Not close selector, while it has items to select
      if (kind === VisibleKind.Select && config.length > 0) {
        return;
      }

      setIsVisible(visible);
    },
    [config.length],
  );

  return (
    <UiSelector
      config={config}
      defaultItem={defaultItem}
      emptyContent={emptyContent}
      isVisible={isVisible}
      offset={isEmpty ? emptyListOffset : fillListOffset}
      onChangeVisible={onChangeVisible}
      placeholder={triggerContent}
      searchClassName={styles.searchField}
      showSearchClear={false}
      showSearchField
    >
      <div className={clsx(isVisible && styles.hiddenRoot, isEmpty && styles.emptyRoot)}>
        <button className={styles.control} disabled={config.length === 0} type="button">
          <span className={styles.text}>{triggerContent}</span>
        </button>
      </div>
    </UiSelector>
  );
}
