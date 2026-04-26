import { fixupConfigRules } from '@eslint/compat';
import { configs, defineConfig, presets } from '@tabula/eslint-config';

const reactConfigs = fixupConfigRules(presets.react());

export default defineConfig({
  build: {
    ignores: ['**/lib/**', '**/typings/**', 'docs/**', 'eslint.config.mjs', 'plopfile.mjs'],
  },

  javascript: {
    files: ['storybook/**/*.js'],

    configs: presets.javascript(),
  },

  typescriptBrowser: {
    files: ['{components,hooks,libraries}/*/{src,stories,tests}/**/*.{ts,tsx}'],

    configs: [
      ...presets.typescript({
        language: {
          globals: ['browser'],
        },

        importX: {
          react: true,

          typescript: {
            alwaysTryTypes: true,

            project: [
              'components/*/tsconfig.json',
              'hooks/*/tsconfig.json',
              'libraries/*/tsconfig.json',
            ],
          },
        },

        typescript: {
          useTyped: true,

          parserOptions: {
            projectService: true,
          },
        },
      }),
      {
        name: 'overrides',

        rules: {
          '@typescript-eslint/switch-exhaustiveness-check': [
            'error',
            {
              allowDefaultCaseForExhaustiveSwitch: true,
              considerDefaultExhaustiveForUnions: true,
              requireDefaultForNonUnion: false,
            },
          ],
        },
      },
    ],
  },

  typescriptNode: {
    files: ['configs/*/{src,tests}/**/*.ts'],

    configs: presets.typescript({
      language: {
        globals: ['node'],
      },

      importX: {
        typescript: {
          alwaysTryTypes: true,

          project: ['configs/*/tsconfig.json'],
        },
      },

      typescript: {
        useTyped: true,

        parserOptions: {
          projectService: true,
        },
      },
    }),
  },

  react: {
    files: ['{components,hooks}/*/{src,stories,tests}/**/*.tsx'],

    configs: reactConfigs,
  },

  reactHooks: {
    files: ['{components,hooks}/*/{src,tests}/**/*.{ts,tsx}'],

    configs: [
      ...configs.reactHooks(),
      {
        name: 'compiler-rules-overrides',

        rules: {
          'react-hooks/preserve-manual-memoization': 'off',
          'react-hooks/refs': 'off',
          'react-hooks/set-state-in-effect': 'off',
        },
      },
    ],
  },

  testingLibrary: {
    files: ['{components,hooks,libraries}/*/tests/*.{ts,tsx}'],

    configs: configs.testingLibrary({ library: 'react' }),
  },

  vitest: {
    files: ['{components,configs,hooks,libraries}/*/tests/*.{ts,tsx}'],

    configs: configs.vitest(),
  },

  overridesStories: {
    files: ['{components,hooks}/*/stories/*.tsx'],

    rules: {
      'react/no-multi-comp': 'off',
    },
  },

  overridesTests: {
    files: [
      'components/{ui-checkbox-tree,ui-tree}/tests/*.test.{ts,tsx}',
      'libraries/tree-utils/tests/*.test.ts',
    ],

    rules: {
      'vitest/expect-expect': 'off',
    },
  },
});
