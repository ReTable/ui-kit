import { ReactElement, useState } from 'react';

import { UiCalendar } from './UiCalendar';

export type Props = {
  className?: string;
};

export function UiDatePicker(): ReactElement {
  const shown = new Date();
  const [selected, setSelected] = useState(shown);

  return <UiCalendar selected={selected} shown={shown} onSelect={setSelected} />;
}
