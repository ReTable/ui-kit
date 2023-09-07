import { FC, useState } from 'react';

import { RangeControl } from '@storybook/blocks';

import { animation, label, motion, motions, root } from './EasingsPreview.css';

import { Easing } from './Easing';

type Props = {
  productive: string;
  expressive: string;
};

export const EasingsPreview: FC<Props> = ({ expressive, productive }) => {
  const [duration, setDuration] = useState<number | null>(1);

  return (
    <div className={root}>
      <div className={motions}>
        <div className={motion}>
          <p className={label}>Productive</p>
          <Easing className={animation} duration={duration ?? 1} variable={productive} />
        </div>
        <div className={motion}>
          <p className={label}>Expressive</p>
          <Easing className={animation} duration={duration ?? 1} variable={expressive} />
        </div>
      </div>
      <RangeControl max={10} min={1} name="duration" onChange={setDuration} value={duration} />
    </div>
  );
};
