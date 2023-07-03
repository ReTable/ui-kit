import { Command, CommandClass, Option } from 'clipanion';

import { bundle } from '../bundle';
import { Platform } from '../types';

type Action = 'build' | 'watch';

const categories: Record<Action, string> = {
  build: 'Build commands',
  watch: 'Watch commands',
};

const descriptions: Record<Action, string> = {
  build: 'Build a package for %platform.',
  watch: 'Watch for changes and rebuild a package for %platform.',
};

const details: Record<Action, string> = {
  build: `
    This command will build source code for future distribution.

    If the \`-p,--production\` flag is set the different optimizations will
    be applied to the source code.

    If the \`-c,--check\` flag is set the TypeScript will be run before
    build to check types. It stops build if any type error is existed.

    If the \`-t,--typings\` flag is set the typings will be generated. Typings
    generated only if type checking is enabled.
  `,
  watch: `
    This command will build source code for future distribution and will
    rebuild source code on file system changes.

    If the \`-p,--production\` flag is set the different optimizations will
    be applied to the source code.

    If the \`-c,--check\` flag is set the TypeScript will be run before
    build to check types. It stops build if any type error is existed.

    If the \`-t,--typings\` flag is set the typings will be generated. Typings
    generated only if type checking is enabled.
  `,
};

const storybookDetails = `
    If the \`-s,--storybook\` flag is set the additional documentation for Storybook will be emitted. Documentation
    generated only if production flag isn't set.
`;

const platformNames: Record<Platform, string> = {
  browser: 'browser',
  node: 'Node.js',
};

export function createCommand(action: Action, platform: Platform): CommandClass {
  const platformName = platformNames[platform];
  const usageDetails =
    platform === 'browser' ? `${details[action]}\n${storybookDetails}` : details[action];

  return class extends Command {
    public static override readonly paths = [[action, platform]];

    public static override readonly usage = Command.Usage({
      category: categories[action],
      description: descriptions[action].replace('%platform', platformName),
      details: usageDetails,
    });

    private readonly production = Option.Boolean('-p,--production', true, {
      description: 'Apply optimizations for production environment (default: true)',
    });

    private readonly check = Option.Boolean('-c,--check', true, {
      description: 'Check types with TypeScript (default: true)',
    });

    private readonly typings = Option.Boolean('-t,--typings', true, {
      description: 'Emit typings with TypeScript if type checking is enabled (default: true)',
    });

    private readonly storybook =
      platform === 'browser'
        ? Option.Boolean('-s,--storybook', false, {
            description: 'Emit additional documentation for Storybook (default: false)',
          })
        : false;

    public override async execute(): Promise<void> {
      await bundle({
        check: this.check,
        platform,
        production: this.production,
        storybook: !this.production && this.storybook,
        typings: this.typings,
        watch: action === 'watch',
      });
    }
  };
}
