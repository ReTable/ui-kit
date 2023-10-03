import { clsx } from 'clsx';

import { controls, root } from './UiStaticView.css';

import { UiControls } from './UiControls';
import { UiLine } from './UiLine';
import { ViewComponentType } from './types';

export const UiStaticView: ViewComponentType = ({ className, lines }) => {
  const children = lines.map((line) => <UiLine key={line.path} line={line} />);

  return (
    <div className={clsx(className, root)}>
      <UiControls className={controls} />
      {children}
    </div>
  );
};
