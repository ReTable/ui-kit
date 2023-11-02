import { FC, ReactNode, useState } from 'react';

import { controls } from './style.css';

type RendererProps = {
  isLeftSidebarVisible: boolean;
  isRightSidebarVisible: boolean;
};

type Props = {
  children: (props: RendererProps) => ReactNode;

  leftSidebar?: boolean;
  rightSidebar?: boolean;
};

export const LayoutContainer: FC<Props> = ({ children, leftSidebar, rightSidebar }) => {
  const [isLeftSidebarVisible, onChangeLeftSidebar] = useState(false);
  const [isRightSidebarVisible, onChangeRightSidebar] = useState(false);

  const onToggleLeft = () => {
    onChangeLeftSidebar((prev) => !prev);
  };

  const onToggleRight = () => {
    onChangeRightSidebar((prev) => !prev);
  };

  const props: RendererProps = {
    isLeftSidebarVisible,
    isRightSidebarVisible,
  };

  return (
    <div>
      <div className={controls}>
        {leftSidebar && (
          <button type="button" onClick={onToggleLeft}>
            Toggle Left
          </button>
        )}
        {rightSidebar && (
          <button type="button" onClick={onToggleRight}>
            Toggle Right
          </button>
        )}
      </div>
      {children(props)}
    </div>
  );
};
