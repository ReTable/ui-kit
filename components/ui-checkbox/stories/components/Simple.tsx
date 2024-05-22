import { FC, useCallback, useState } from 'react';

import { UiCheckbox } from '~';

export const Simple: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback((nextIsChecked: boolean) => {
    setIsChecked(nextIsChecked);
  }, []);

  return (
    <UiCheckbox isChecked={isChecked} onChange={handleChange} testId="target">
      Is awesome?
    </UiCheckbox>
  );
};
