import { FC, useState } from 'react';

import { UiSwitch } from '~';

export default {
  component: UiSwitch,
  title: 'ui-switch',
};

export const Default: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <UiSwitch isChecked={isChecked} onChange={setIsChecked}>
        Switch me
      </UiSwitch>
      <UiSwitch isChecked={isChecked} isDisabled onChange={setIsChecked}>
        Switch me
      </UiSwitch>
      <UiSwitch isChecked={isChecked} isReversed onChange={setIsChecked}>
        Switch me
      </UiSwitch>
      <UiSwitch isChecked={isChecked} isDisabled isReversed onChange={setIsChecked}>
        Switch me
      </UiSwitch>

      <UiSwitch isChecked={isChecked} onChange={setIsChecked} size="small">
        Switch me
      </UiSwitch>
      <UiSwitch isChecked={isChecked} isDisabled onChange={setIsChecked} size="small">
        Switch me
      </UiSwitch>
      <UiSwitch isChecked={isChecked} isReversed onChange={setIsChecked} size="small">
        Switch me
      </UiSwitch>
      <UiSwitch isChecked={isChecked} isDisabled isReversed onChange={setIsChecked} size="small">
        Switch me
      </UiSwitch>
    </div>
  );
};
