import { FC } from 'react';

import { Line, LineType } from '../lines';

import { UiClose } from './UiClose';
import { UiOpen } from './UiOpen';
import { UiPlaceholder } from './UiPlaceholder';
import { UiPrimitive } from './UiPrimitive';

type Props = {
  isCollapsed: boolean;
  line: Line;
};

export const UiLine: FC<Props> = ({ isCollapsed, line }) => {
  switch (line.type) {
    case LineType.Boolean:
    case LineType.Null:
    case LineType.Number:
    case LineType.String: {
      return <UiPrimitive level={line.level} parentKey={line.parentKey} value={line.value} />;
    }
    case LineType.ArrayOpen:
    case LineType.ObjectOpen: {
      return (
        <UiOpen
          isCollapsed={isCollapsed}
          level={line.level}
          lineKey={line.key}
          parentKey={line.parentKey}
          size={line.size}
          type={line.type}
        />
      );
    }
    case LineType.ArrayClose:
    case LineType.ObjectClose: {
      return <UiClose level={line.level} type={line.type} />;
    }
    case LineType.Empty: {
      return <UiPlaceholder level={line.level} type={line.type} />;
    }
  }
};
