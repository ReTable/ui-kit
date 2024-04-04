import { FC, useCallback, useMemo, useState } from 'react';

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

export const Complex: FC = () => {
  const [items, setItems] = useState([false, false, false]);

  const isChecked = useMemo(() => !items.includes(false), [items]);
  const isIndeterminate = useMemo(() => items.some(Boolean) && !isChecked, [isChecked, items]);

  const handleChangeAll = useCallback((nextIsChecked: boolean) => {
    setItems(() => (nextIsChecked ? [true, true, true] : [false, false, false]));
  }, []);

  const changeItem = useCallback((target: number, nextIsChecked: boolean) => {
    setItems((current) => current.map((it, index) => (index === target ? nextIsChecked : it)));
  }, []);

  const group = useMemo(
    () =>
      items.map((it, index) => {
        const handleChange = (nextIsChanged: boolean) => {
          changeItem(index, nextIsChanged);
        };

        return (
          <UiCheckbox
            isChecked={it}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onChange={handleChange}
            testId={`check-${index + 1}`}
          >
            Select {index + 1}
          </UiCheckbox>
        );
      }),

    [changeItem, items],
  );

  return (
    <>
      <UiCheckbox
        isChecked={isChecked}
        isIndeterminate={isIndeterminate}
        onChange={handleChangeAll}
        testId="check-all"
      >
        Select all
      </UiCheckbox>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>{group}</div>
    </>
  );
};
