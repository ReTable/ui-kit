import { ReactNode, useState } from 'react';

import { UiSlider, UiSliderProps } from '~';

type Props = Omit<UiSliderProps, 'className' | 'id' | 'name' | 'onChange' | 'value'> & {
  initialValue: number;
};

export function Range({ initialValue = 0, ...props }: Props): ReactNode {
  const [value, setValue] = useState(initialValue);

  return (
    <>
      <p>Value: {value}</p>
      <UiSlider {...props} onChange={setValue} value={value} />
    </>
  );
}
