import { FC } from 'react';

import { UiClose } from './UiClose';
import { UiOpen } from './UiOpen';
import { UiPlaceholder } from './UiPlaceholder';
import { UiValue } from './UiValue';
import { Line, LineKind } from './types';

type Props = {
  isCollapsed: boolean;
  line: Line;
};

export const UiLine: FC<Props> = ({ isCollapsed, line }) => {
  switch (line.kind) {
    case LineKind.Value: {
      return <UiValue line={line} />;
    }
    case LineKind.Open: {
      return <UiOpen isCollapsed={isCollapsed} line={line} />;
    }
    case LineKind.Close: {
      return <UiClose line={line} />;
    }
    case LineKind.Placeholder: {
      return <UiPlaceholder line={line} />;
    }
  }
};

UiLine.displayName = `UiJsonView(UiLine)`;
