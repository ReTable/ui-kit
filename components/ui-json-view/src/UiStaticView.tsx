import { clsx } from 'clsx';

import { options, root } from './UiStaticView.css';

import { UiLine } from './UiLine';
import { UiOptions } from './UiOptions';
import { ViewComponentType } from './types';

export const UiStaticView: ViewComponentType = ({ className, lines }) => {
  const children = lines.map((line) => <UiLine key={line.path} line={line} />);

  return (
    <div className={clsx(className, root)}>
      <UiOptions className={options} />
      {children}
    </div>
  );
};
