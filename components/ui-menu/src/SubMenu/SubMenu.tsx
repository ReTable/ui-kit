import { MouseEventHandler, PropsWithChildren, ReactNode, useCallback } from 'react';

import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';

import { isButtonTarget } from '@tabula/dom-utils';
import { useFlag } from '@tabula/use-flag';

import { UiMenu, UiMenuProps } from '../UiMenu';
import { ItemWithSubMenu } from '../types';

type Props = PropsWithChildren<
  Pick<UiMenuProps, 'size' | 'variant' | 'onSelect'> &
    Pick<ItemWithSubMenu, 'config' | 'emptyContent' | 'popupClassName' | 'menuClassName'>
>;

export function SubMenu({
  children,
  config,
  emptyContent,
  menuClassName,
  popupClassName,
  onSelect,
  size,
  variant,
}: Props): ReactNode {
  const [open, { off: onClose, change: onOpenChange }] = useFlag(false);

  const { x, y, strategy, refs, context } = useFloating({
    placement: 'right-start',
    strategy: 'fixed',

    open,
    onOpenChange,

    middleware: [
      flip({
        fallbackPlacements: ['right', 'right-end', 'left-start', 'left', 'left-end'],
      }),
      offset({
        mainAxis: 6,
        crossAxis: -3,
      }),
      shift({
        padding: 4,
      }),
    ],

    whileElementsMounted(...args) {
      return autoUpdate(...args, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      });
    },
  });

  const hover = useHover(context, { handleClose: safePolygon() });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const onPopupClick = useCallback<MouseEventHandler>(
    (event) => {
      if (isButtonTarget(event)) {
        onClose();
      }
    },
    [onClose],
  );

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss, role]);

  const { isMounted: isOpened, styles: transitionStyles } = useTransitionStyles(context);

  const style = {
    position: strategy,

    top: `${y}px`,
    left: `${x}px`,

    ...transitionStyles,
  };

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <FloatingPortal>
        {isOpened && (
          <FloatingFocusManager
            closeOnFocusOut={false}
            context={context}
            initialFocus={refs.floating}
            modal={false}
            returnFocus={false}
          >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className={popupClassName}
              ref={refs.setFloating}
              style={style}
              onClick={onPopupClick}
              {...getFloatingProps()}
            >
              <UiMenu
                className={menuClassName}
                config={config}
                emptyContent={emptyContent}
                size={size}
                variant={variant}
                onSelect={onSelect}
              />
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}

if (import.meta.env.DEV) {
  SubMenu.displayName = 'UiMenu(SubMenu)';
}
