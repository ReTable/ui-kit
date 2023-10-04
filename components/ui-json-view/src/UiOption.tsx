import { ChangeEventHandler, FC } from 'react';

import { handle, indicator, input, root } from './UiOption.css';

type Props = {
  children: string;
  onChange: (value: boolean) => void;
  value: boolean;
};

export const UiOption: FC<Props> = ({ children, onChange, value }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    onChange(currentTarget.checked);
  };

  return (
    <label className={root}>
      <input checked={value} className={input} onChange={handleChange} type="checkbox" />
      <div className={indicator}>
        <div className={handle} />
      </div>
      {children}
    </label>
  );
};
