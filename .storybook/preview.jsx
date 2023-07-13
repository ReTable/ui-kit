import { UiTheme } from '../components/ui-theme';

export default {
  decorators: [
    (Story) => (
      <UiTheme>
        <Story />
      </UiTheme>
    ),
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
