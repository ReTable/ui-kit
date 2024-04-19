import { ReactNode, useRef } from 'react';

import { clsx } from 'clsx/lite';
import { CSSTransition } from 'react-transition-group';

import {
  body,
  container,
  leftSidebar,
  rightSidebar,
  root,
  withLeftSidebar,
  withRightSidebar,
} from './UiLayoutView.css';

import { NoopSidebar } from './UiLayoutView.NoopSidebar';
import {
  DURATION,
  LEFT_SIDEBAR_CLASS_NAMES,
  RIGHT_SIDEBAR_CLASS_NAMES,
} from './UiLayoutView.const';
import { Props } from './UiLayoutView.types';

export function UiLayoutView({
  rootClassName,
  bodyClassName,
  children,
  forwardedRef,
  ...props
}: Props): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  const hasLeftSidebar = 'isLeftSidebarVisible' in props && props.isLeftSidebarVisible != null;
  const [LeftSidebar, isLeftSidebarVisible] = hasLeftSidebar
    ? [props.leftSidebar, props.isLeftSidebarVisible]
    : [NoopSidebar, false];

  const hasRightSidebar = 'isRightSidebarVisible' in props && props.isRightSidebarVisible != null;
  const [RightSidebar, isRightSidebarVisible] = hasRightSidebar
    ? [props.rightSidebar, props.isRightSidebarVisible]
    : [NoopSidebar, false];

  return (
    <div className={clsx(root, rootClassName)} ref={forwardedRef}>
      <CSSTransition
        in={isLeftSidebarVisible}
        timeout={DURATION}
        classNames={LEFT_SIDEBAR_CLASS_NAMES}
        nodeRef={ref}
      >
        <CSSTransition
          in={isRightSidebarVisible}
          timeout={DURATION}
          classNames={RIGHT_SIDEBAR_CLASS_NAMES}
          nodeRef={ref}
        >
          <div
            ref={ref}
            className={clsx(
              container,
              isLeftSidebarVisible && withLeftSidebar,
              isRightSidebarVisible && withRightSidebar,
            )}
          >
            {hasLeftSidebar && (
              <div className={clsx(leftSidebar, props.leftSidebarClassName)}>
                {isLeftSidebarVisible && <LeftSidebar />}
              </div>
            )}
            <div className={clsx(body, bodyClassName)}>{children}</div>
            {hasRightSidebar && (
              <div className={clsx(rightSidebar, props.rightSidebarClassName)}>
                {isRightSidebarVisible && <RightSidebar />}
              </div>
            )}
          </div>
        </CSSTransition>
      </CSSTransition>
    </div>
  );
}

if (import.meta.env.DEV) {
  UiLayoutView.displayName = 'ui-layout-view(UiLayoutView)';
}
