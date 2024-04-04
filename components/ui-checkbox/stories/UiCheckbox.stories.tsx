import { FC, useCallback, useMemo, useState } from 'react';

import { UiCheckbox } from '~';

export default {
  component: UiCheckbox,
  title: 'ui-checkbox',
};

export const Unchecked: FC = () => <UiCheckbox>Is ugly?</UiCheckbox>;

export const Checked: FC = () => <UiCheckbox isChecked>Is awesome?</UiCheckbox>;

export const Indeterminate: FC = () => (
  <UiCheckbox isChecked isIndeterminate>
    Is awesome?
  </UiCheckbox>
);

export const UncheckedDisabled: FC = () => <UiCheckbox isDisabled>Is ugly?</UiCheckbox>;

export const CheckedDisabled: FC = () => (
  <UiCheckbox isChecked isDisabled>
    Is awesome?
  </UiCheckbox>
);

export const IndeterminateDisabled: FC = () => (
  <UiCheckbox isChecked isDisabled isIndeterminate>
    Is awesome?
  </UiCheckbox>
);

export const Interactive: FC = () => {
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
          // eslint-disable-next-line react/no-array-index-key
          <UiCheckbox key={index} onChange={handleChange} isChecked={it}>
            Select {index}
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
      >
        Select all
      </UiCheckbox>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>{group}</div>
    </>
  );
};
