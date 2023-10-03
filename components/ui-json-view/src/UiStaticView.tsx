import { UiLine } from './UiLine';
import { ViewComponentType } from './types';

export const UiStaticView: ViewComponentType = ({ className, lines }) => {
  const children = lines.map((line) => <UiLine key={line.path} line={line} />);

  return <div className={className}>{children}</div>;
};
