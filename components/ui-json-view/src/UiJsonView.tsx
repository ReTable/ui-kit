import { FC, useMemo } from 'react';

import { UiJsonViewOptions } from './UiJsonViewOptions';
import { UiLine } from './pipeline';
import { toLines } from './toLines';
import { JsonViewOptions } from './types';

export type Props = Partial<JsonViewOptions> & {
  className?: string;
  source: string;
};

export const UiJsonView: FC<Props> = ({ className = '', showServiceData, source }) => {
  const lines = useMemo(() => toLines(source), [source]);

  return (
    <UiJsonViewOptions showServiceData={showServiceData}>
      <div className={className}>
        {lines.map((line) => (
          <UiLine key={line.key} isCollapsed={false} line={line} />
        ))}
      </div>
    </UiJsonViewOptions>
  );
};
