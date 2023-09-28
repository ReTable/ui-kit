import { FC } from 'react';

import { Line, LineKind } from '../types';

import { UiClose } from './UiClose';
import { UiOpen } from './UiOpen';
import { UiPlaceholder } from './UiPlaceholder';
import { UiValue } from './UiValue';

type Props = {
  isCollapsed: boolean;
  line: Line;
};

export const UiLine: FC<Props> = ({ isCollapsed, line }) => {
  switch (line.kind) {
    case LineKind.Value: {
      return (
        <UiValue level={line.level} property={line.property} type={line.type} value={line.value} />
      );
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
