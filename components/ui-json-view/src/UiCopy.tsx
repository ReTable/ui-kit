import { FC } from 'react';

import { UiAction } from './UiAction';
import { ActionFn } from './types';

type Props = {
  className?: string;
  jsonPath: string;
};

const action: ActionFn = async (jsonPath, query) => {
  const toCopy = JSON.stringify(query(jsonPath), null, 4);

  await navigator.clipboard.writeText(toCopy);
};

export const UiCopy: FC<Props> = ({ className, jsonPath }) => {
  return (
    <UiAction className={className} action={action} jsonPath={jsonPath}>
      Copy
    </UiAction>
  );
};
