import { FC, ReactNode, useMemo, useState } from 'react';

import { Actions } from '~';

import { preview, root } from './Inspect.css';

import { Inspection } from './Inspection';

type RendererProps = {
  actions: Actions;
};

type Props = {
  children: (props: RendererProps) => ReactNode;
};

type Inspection = {
  jsonPath: string;
  value: string;
};

export const Inspect: FC<Props> = ({ children }) => {
  const [inspection, setInspection] = useState<Inspection | null>(null);

  const actions = useMemo<Actions>(
    () => ({
      Inspect(jsonPath, query) {
        const value = query(jsonPath);

        setInspection({
          jsonPath,
          value: JSON.stringify(value, null, 4),
        });
      },
    }),
    [],
  );

  const handleClose = () => {
    setInspection(null);
  };

  return (
    <div className={root}>
      {children({ actions })}
      {inspection && (
        <Inspection
          className={preview}
          jsonPath={inspection.jsonPath}
          onClose={handleClose}
          value={inspection.value}
        />
      )}
    </div>
  );
};
