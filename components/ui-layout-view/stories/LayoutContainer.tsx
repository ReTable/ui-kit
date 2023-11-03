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
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState(false);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false);

  const onToggleLeft = () => {
    setIsLeftSidebarVisible((prev) => !prev);
  };

  const onToggleRight = () => {
    setIsRightSidebarVisible((prev) => !prev);
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
