import { FC, useState } from 'react';

import { UiDatePicker } from '~';

export default {
  component: UiDatePicker,
  title: 'ui-date-picker',
};

export const Default: FC = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <>
      <p>{selected?.toLocaleString()}</p>

      <UiDatePicker selected={selected ?? undefined} onSelect={setSelected} type="datetime" />
    </>
  );
};
