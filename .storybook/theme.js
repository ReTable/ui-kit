import { create } from '@storybook/theming/create';

export const theme = create({
  base: 'light',

  brandTitle: 'Tabula UI',
  brandUrl: 'https://tabula.io',
  brandImage: '/tabula.svg',
  brandTarget: '_blank',

  appBg: '#f8f8f8',
  appContentBg: '#ffffff',
  appBorderColor: 'rgba(0, 0, 0, 0.07)',
  appBorderRadius: 8,

  fontBase: 'Inter, sans-serif',

  textColor: '#1a1a1a',
  textInverseColor: '#ffffff',
  textMutedColor: '#696969',

  barTextColor: '#696969',
  barSelectedColor: '#1a1a1a',
  barBg: '#f8f8f8',

  buttonBg: '#f1f5fA',
  buttonBorder: '#f1f5fA',

  booleanBg: '#ebebeb',
  booleanSelectedBg: '#ffffff',

  colorPrimary: '#1a1a1a',
  colorSecondary: '#127ff9',

  inputBg: '#ffffff',
  inputBorder: 'rgba(0, 0, 0, 0.1)',
  inputTextColor: '#1a1a1a',
  inputBorderRadius: 6,
});
