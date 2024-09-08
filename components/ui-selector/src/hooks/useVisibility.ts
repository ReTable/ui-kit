import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import { ChangeVisibleHandler, VisibleKind } from '../Selector.types';
import { isClickByButton } from '../helpers';

type Options = {
  disabled?: boolean;
  outerVisible?: boolean;
  onChangeOuterVisible?: ChangeVisibleHandler;
  onClearSearch: () => void;
};

type Result = {
  isVisible: boolean;
  onChangeVisible: ChangeVisibleHandler;
  onTriggerClick: () => void;
  onPopupClick: MouseEventHandler;
};

export function useVisibility({
  disabled,
  outerVisible,
  onChangeOuterVisible,
  onClearSearch,
}: Options): Result {
  const [innerVisible, setInnerVisible] = useState(false);
  const onChangeVisible = useCallback<ChangeVisibleHandler>(
    (visible, kind) => {
      if (outerVisible == null) {
        setInnerVisible(visible);
      }

      onChangeOuterVisible?.(visible, kind);

      if (!visible) {
        onClearSearch();
      }
    },
    [outerVisible, onChangeOuterVisible, onClearSearch],
  );

  const isVisible = useMemo(() => outerVisible ?? innerVisible, [innerVisible, outerVisible]);

  const onTriggerClick = useCallback(() => {
    if (disabled) {
      return;
    }

    onChangeVisible(!isVisible, VisibleKind.Trigger);
  }, [onChangeVisible, isVisible, disabled]);

  const onPopupClick = useCallback<MouseEventHandler>(
    (event) => {
      if (isClickByButton(event)) {
        onChangeVisible(false, VisibleKind.Select);
      }
    },
    [onChangeVisible],
  );

  return { isVisible, onChangeVisible, onTriggerClick, onPopupClick };
}
