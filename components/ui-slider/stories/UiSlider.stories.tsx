import { FC, useState } from 'react';

import { UiSlider } from '~';

export default {
  component: UiSlider,
  title: 'ui-slider',
};

export const Default: FC = () => {
  const [value, setValue] = useState(0);

  return <UiSlider value={value} onChange={setValue} range={[0, 15]} />;
};
