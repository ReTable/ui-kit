import { CSSProperties, useEffect, useMemo } from 'react';

import {
  OffsetOptions,
  autoUpdate,
  flip,
  hide,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react';

import { usePreviousValue } from '@tabula/use-previous-value';

import { ChangeVisibleHandler } from '../Selector.types';

import { useClosePopupOnOutsideEvents } from './useClosePopupOnOutsideEvents';

const DEFAULT_OFFSET = 4;

type Options = {
  offset?: OffsetOptions;
  isVisible: boolean;
  onChangeVisible: ChangeVisibleHandler;
};

type Result = {
  reference(node: HTMLElement | null): void;
  floating(node: HTMLElement | null): void;
  popupStyle: CSSProperties;
};

export function usePopup({
  offset: offsetOptions = DEFAULT_OFFSET,
  isVisible,
  onChangeVisible,
}: Options): Result {
  const prevVisible = usePreviousValue(isVisible);

  const middleware = useMemo(
    () => [offset(offsetOptions), shift(), flip({ fallbackStrategy: 'initialPlacement' }), hide()],
    [offsetOptions],
  );

  const { x, y, refs, update, strategy, middlewareData } = useFloating<HTMLElement>({
    placement: 'bottom-start',
    middleware,
  });

  // TODO: We can replace it with `whileElementsMounted` option.
  useEffect(() => {
    const { current: reference } = refs.reference;
    const { current: floating } = refs.floating;

    if (reference == null || floating == null) {
      return;
    }

    return autoUpdate(reference, floating, update);
  }, [refs.reference, refs.floating, update]);

  useEffect(() => {
    if (!prevVisible && isVisible) {
      update();
    }
  }, [isVisible, prevVisible, update]);

  // TODO: We can replace it with `useDismiss` interaction.
  useClosePopupOnOutsideEvents({
    refs,
    isVisible,
    onChangeVisible,
  });

  const isReferenceHidden = middlewareData.hide?.referenceHidden;

  const popupStyle = useMemo<CSSProperties>(() => {
    const innerStyles: CSSProperties = { position: strategy };

    if (x == null || y == null || !isVisible) {
      return innerStyles;
    }

    if (isReferenceHidden) {
      innerStyles.visibility = 'hidden';

      return innerStyles;
    }

    innerStyles.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;

    const { current: trigger } = refs.reference;

    if (trigger == null) {
      return innerStyles;
    }

    // NOTE: Make popup width equal with trigger width, when placement is stretch
    // TODO: Are we really need `clientWidth` instead of `DOMRect.width`?
    // TODO: Both variants are reduce performance. Can we avoid it?
    innerStyles.width =
      'clientWidth' in trigger ? trigger.clientWidth : trigger.getBoundingClientRect().width;

    return innerStyles;
  }, [isVisible, isReferenceHidden, refs.reference, strategy, x, y]);

  return { reference: refs.setReference, floating: refs.setFloating, popupStyle };
}
