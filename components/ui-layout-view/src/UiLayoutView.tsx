import { ReactElement, createElement, useRef } from 'react';

import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import { container, leftSidebarStates, panels, rightSidebarStates, root } from './UiLayoutView.css';

import { Props } from './UiLayoutView.types';

const endListener = (node: HTMLElement, done: () => void) => {
  node.addEventListener('transitionend', done, false);
};

export function UiLayoutView({
  rootClassName,
  bodyClassName,
  children,
  forwardedRef,
  ...props
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  const hasLeftSidebar = 'isLeftSidebarVisible' in props && props.isLeftSidebarVisible != null;
  const isLeftSidebarVisible = hasLeftSidebar ? props.isLeftSidebarVisible : false;

  const hasRightSidebar = 'isRightSidebarVisible' in props && props.isRightSidebarVisible != null;
  const isRightSidebarVisible = hasRightSidebar ? props.isRightSidebarVisible : false;

  return (
    <div className={clsx(root, rootClassName)} ref={forwardedRef}>
      <CSSTransition
        addEndListener={endListener}
        classNames={leftSidebarStates}
        in={isLeftSidebarVisible}
      >
        <CSSTransition
          addEndListener={endListener}
          classNames={rightSidebarStates}
          in={isRightSidebarVisible}
        >
          <div ref={ref} className={clsx(container)}>
            {hasLeftSidebar && (
              <div className={clsx(panels.leftSidebar, props.leftSidebarClassName)}>
                {isLeftSidebarVisible && createElement(props.leftSidebar, null)}
              </div>
            )}
            <div className={clsx(panels.body, bodyClassName)}>{children}</div>
            {hasRightSidebar && (
              <div className={clsx(panels.rightSidebar, props.rightSidebarClassName)}>
                {isRightSidebarVisible && createElement(props.rightSidebar, null)}
              </div>
            )}
          </div>
        </CSSTransition>
      </CSSTransition>
    </div>
  );
}
