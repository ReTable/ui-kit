import { FC } from 'react';

import { root } from './UiBoolean.css';

import { useUiJsonViewOptions } from './UiJsonViewOptions';
import { UiParentKey } from './UiParentKey';
import { UiType } from './UiType';

type Props = {
  level: number;
  parentKey?: number | string;
  value: boolean;
};

export const UiBoolean: FC<Props> = ({ level, parentKey, value }) => {
  const { showType } = useUiJsonViewOptions();

  return (
    <pre className={root}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiParentKey>{parentKey}</UiParentKey>}
      {showType && <UiType>bool </UiType>}
      {value.toString()}
    </pre>
  );
};
