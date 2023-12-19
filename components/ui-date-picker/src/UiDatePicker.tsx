import { ReactElement, useState } from 'react';

import { root } from './UiDatePicker.css';

import { UiCalendar } from './UiCalendar';

export type Props = {
  className?: string;
};

export function UiDatePicker(): ReactElement {
  const [selected, setSelected] = useState(new Date());

  return (
    <div className={root}>
      <UiCalendar selected={selected} onSelect={setSelected} />
    </div>
  );
}
