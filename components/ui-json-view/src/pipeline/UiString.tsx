import { FC } from 'react';

import { line } from './style.css';

import { useJsonViewOptions } from '../UiJsonViewOptions';

import { UiProperty } from './UiProperty';
import { UiType } from './UiType';

type Props = {
  level: number;
  parentKey?: number | string;
  value: string;
};

export const UiString: FC<Props> = ({ level, parentKey, value }) => {
  const { showDataTypes } = useJsonViewOptions();

  return (
    <pre className={line.string}>
      {''.padStart(level * 2)}
      {parentKey != null && <UiProperty>{parentKey}</UiProperty>}
      {showDataTypes && <UiType>str </UiType>}
      {value}
    </pre>
  );
};
