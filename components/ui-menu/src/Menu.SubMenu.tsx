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
import { useFlag } from 'src/hooks/useFlag';
import { isClickByButton } from 'src/utilities/dom';

import { Menu } from './Menu';
import { ItemWithSubMenu, Props as MenuProps } from './Menu.types';

type Props = PropsWithChildren<
  Pick<MenuProps, 'size' | 'view' | 'onSelect'> &
    Pick<ItemWithSubMenu, 'config' | 'emptyContent' | 'popupClassName' | 'menuClassName'>
>;

export function MenuSubMenu({
  children,
  config,
  emptyContent,
  menuClassName,
  popupClassName,
  onSelect,
  size,
  view,
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
      if (isClickByButton(event)) {
        onClose();
      }
    },
    [onClose],
  );

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss, role]);

  const { isMounted: isOpened, styles: transitionStyles } = useTransitionStyles(context);

  const style = {
    position: strategy,

    top: `${y ?? 0}px`,
    left: `${x ?? 0}px`,

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
          >
            <div
              className={popupClassName}
              ref={refs.setFloating}
              style={style}
              onClick={onPopupClick}
              {...getFloatingProps()}
            >
              <Menu
                className={menuClassName}
                config={config}
                emptyContent={emptyContent}
                size={size}
                view={view}
                onSelect={onSelect}
              />
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  );
}
