import { clsx } from 'clsx';

import { options, root } from './StaticView.css';

import { Line } from '../Line';
import { Options } from '../Options';
import { ViewComponentType } from '../types';

export const StaticView: ViewComponentType = ({ className, lines }) => {
  const children = lines.map((line) => <Line key={line.path} line={line} />);

  return (
    <div className={clsx(className, root)}>
      <Options className={options} />
      {children}
    </div>
  );
};
