import { FC } from 'react';

import { Meta } from '@storybook/react';
import { sentenceCase } from 'change-case';
import { clsx } from 'clsx';

import { uiFonts } from '~';

import { font, fontsRoot } from './styles.css';

// region Meta

const meta: Meta = {
  title: 'ui-theme / Fonts',
};

export default meta;

// endregion

// region Stories

function sampleFromName(fontName: string) {
  return `${sentenceCase(fontName.slice(0, -2))} ${fontName.slice(-2)}`;
}

export const SansSerif: FC = () => {
  const samples = Object.entries(uiFonts.sansSerif).map(([fontName, fontVariant]) => (
    <div className={clsx(font, fontVariant)} key={fontName}>
      Sans Serif / {sampleFromName(fontName)}
    </div>
  ));

  return <div className={fontsRoot}>{samples}</div>;
};

export const Monospace: FC = () => {
  const samples = Object.entries(uiFonts.monospace).map(([fontName, fontVariant]) => (
    <div className={clsx(font, fontVariant)} key={fontName}>
      Monospace / {sampleFromName(fontName)}
    </div>
  ));

  return <div className={fontsRoot}>{samples}</div>;
};

// endregion
