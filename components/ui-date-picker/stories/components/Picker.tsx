import { FC, useCallback, useState } from 'react';

import { format } from 'date-fns';

import { UiDatePicker, UiDatePickerType } from '~';

type Props = {
  type: UiDatePickerType;
};

export const Picker: FC<Props> = ({ type }) => {
  const [id, setId] = useState(0);
  const [selected, setSelected] = useState<Date | null>(null);

  const handleNow = useCallback(() => {
    setSelected(new Date());
  }, []);

  const handleReset = useCallback(() => {
    setSelected(null);
  }, []);

  const handleUpdate = useCallback(() => {
    setId((current) => (current += 1));
  }, []);

  return (
    <>
      <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {selected == null ? 'Not selected' : <>{format(selected, 'dd MMM yyyy, HH:mm:ss ')}</>}
        <button onClick={handleNow} type="button">
          Set now
        </button>
        {selected != null && (
          <button onClick={handleReset} type="button">
            Reset
          </button>
        )}
        <button onClick={handleUpdate} type="button">
          Force update
        </button>
      </p>
      <UiDatePicker key={id} onSelect={setSelected} selected={selected} type={type} />
    </>
  );
};
