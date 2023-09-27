import { FC } from 'react';

import { Line, LineType } from '../toLines';

import { UiBoolean } from './UiBoolean';
import { UiCloseArray } from './UiCloseArray';
import { UiCloseObject } from './UiCloseObject';
import { UiEmpty } from './UiEmpty';
import { UiNull } from './UiNull';
import { UiNumber } from './UiNumber';
import { UiOpenArray } from './UiOpenArray';
import { UiOpenObject } from './UiOpenObject';
import { UiString } from './UiString';

type Props = {
  isCollapsed: boolean;
  line: Line;
};

export const UiLine: FC<Props> = ({ isCollapsed, line }) => {
  switch (line.type) {
    case LineType.Boolean: {
      return <UiBoolean level={line.level} parentKey={line.parentKey} value={line.value} />;
    }
    case LineType.Null: {
      return <UiNull level={line.level} parentKey={line.parentKey} />;
    }
    case LineType.Number: {
      return <UiNumber level={line.level} parentKey={line.parentKey} value={line.value} />;
    }
    case LineType.String: {
      return <UiString level={line.level} parentKey={line.parentKey} value={line.value} />;
    }
    case LineType.ArrayOpen: {
      return (
        <UiOpenArray
          isCollapsed={isCollapsed}
          lineKey={line.key}
          level={line.level}
          parentKey={line.parentKey}
          size={line.size}
        />
      );
    }
    case LineType.ArrayClose: {
      return <UiCloseArray level={line.level} />;
    }
    case LineType.ObjectOpen: {
      return (
        <UiOpenObject
          isCollapsed={isCollapsed}
          lineKey={line.key}
          level={line.level}
          parentKey={line.parentKey}
          size={line.size}
        />
      );
    }
    case LineType.ObjectClose: {
      return <UiCloseObject level={line.level} />;
    }
    case LineType.Empty: {
      return <UiEmpty level={line.level} />;
    }
  }
};
