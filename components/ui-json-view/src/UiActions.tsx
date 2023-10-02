import { FC } from 'react';

import { UiAction } from './UiAction';
import { UiCopy } from './UiCopy';
import { useOptions } from './UiOptions';

type Props = {
  className?: string;
  jsonPath: string;
};

export const UiActions: FC<Props> = ({ className, jsonPath }) => {
  const { actions, isInteractive } = useOptions();

  if (!isInteractive) {
    return null;
  }

  const controls = Object.entries(actions).map(([name, action]) => (
    <UiAction className={className} action={action} key={name} jsonPath={jsonPath}>
      {name}
    </UiAction>
  ));

  return (
    <>
      <UiCopy className={className} jsonPath={jsonPath} />
      {controls}
    </>
  );
};
