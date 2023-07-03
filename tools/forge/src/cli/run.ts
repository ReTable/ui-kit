import { Builtins, Cli } from 'clipanion';

import { version } from '../../package.json';

import { createCommand } from './createCommand';

export async function run(): Promise<void> {
  const cli = new Cli({
    binaryLabel: 'forge',
    binaryName: 'forge',
    binaryVersion: version,
    enableColors: true,
  });

  cli.register(createCommand('build', 'browser'));
  cli.register(createCommand('build', 'node'));
  cli.register(createCommand('watch', 'browser'));
  cli.register(createCommand('watch', 'node'));

  cli.register(Builtins.HelpCommand);
  cli.register(Builtins.VersionCommand);

  await cli.runExit(process.argv.slice(2));
}
