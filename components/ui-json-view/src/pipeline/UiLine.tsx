import { FC } from 'react';

import { Line, LineKind } from '../lines';

import { UiClose } from './UiClose';
import { UiOpen } from './UiOpen';
import { UiPlaceholder } from './UiPlaceholder';
import { UiPrimitive } from './UiPrimitive';

type Props = {
  isCollapsed: boolean;
  line: Line;
};

export const UiLine: FC<Props> = ({ isCollapsed, line }) => {
  switch (line.kind) {
    case LineKind.Boolean:
    case LineKind.Null:
    case LineKind.Number:
    case LineKind.String: {
      return <UiPrimitive level={line.level} property={line.property} value={line.value} />;
    }
    case LineKind.Open: {
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
    case LineKind.Close: {
      return <UiClose closeSymbol={line.closeSymbol} level={line.level} />;
    }
    case LineKind.Placeholder: {
      return <UiPlaceholder level={line.level} placeholder={line.placeholder} />;
    }
  }
};
