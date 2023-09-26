import { FC, Fragment, useMemo } from 'react';

import { UiJsonViewOptions, UiLine } from './pipeline';
import { toLines } from './toLines';

export type Props = {
  className?: string;
  showType?: boolean;
  source: string;
};

export const UiJsonView: FC<Props> = ({ className = '', showType = true, source }) => {
  const lines = useMemo(() => toLines(source), [source]);

  return (
    <UiJsonViewOptions showType={showType}>
      <div className={className}>
        {lines.map((line) => (
          <Fragment key={line.key}>
            <UiLine isCollapsed={false} line={line} />
          </Fragment>
        ))}
      </div>
    </UiJsonViewOptions>
  );
};
