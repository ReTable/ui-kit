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
      return <UiPrimitive level={line.level} property={line.property} value={line.value} />;
    }
    case LineType.Open: {
      return (
        <UiOpen
          closeSymbol={line.closeSymbol}
          isCollapsed={isCollapsed}
          level={line.level}
          openSymbol={line.openSymbol}
          path={line.path}
          property={line.property}
          size={line.size}
        />
      );
    }
    case LineType.Close: {
      return <UiClose closeSymbol={line.closeSymbol} level={line.level} />;
    }
    case LineType.Placeholder: {
      return <UiPlaceholder level={line.level} placeholder={line.placeholder} />;
    }
  }
};
