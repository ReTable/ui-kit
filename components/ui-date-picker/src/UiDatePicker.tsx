import { ReactElement, useState } from 'react';

import { root } from './UiDatePicker.css';

import { UiCalendar } from './UiCalendar';

export type Props = {
  className?: string;
};

export function UiDatePicker(): ReactElement {
  const shown = new Date();
  const [selected, setSelected] = useState(shown);

  return (
    <div className={root}>
      <UiCalendar selected={selected} shown={shown} onSelect={setSelected} />
    </div>
  );
}
