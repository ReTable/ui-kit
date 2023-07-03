import { spawn } from 'node:child_process';

import { findTscPath as findTypescriptBin } from './detectTypescriptBin';

export async function typescript(declarations = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const bin = findTypescriptBin();
    const args = ['--project', 'tsconfig.forge.json', '--noEmitOnError', '--pretty'];

    if (declarations) {
      args.push('--declaration', '--declarationDir', 'typings', '--emitDeclarationOnly');
    } else {
      args.push('--noEmit');
    }

    const tsc = spawn('/usr/bin/env', ['node', bin, ...args], { stdio: 'inherit' });

    tsc.on('close', (code) => {
      if (code == 0) {
        resolve();
      } else {
        reject(code);
      }
    });

    tsc.on('error', reject);
  });
}
