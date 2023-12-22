import { Template } from '@svgr/babel-plugin-transform-svg-component';

type Variables = Template extends (variables: infer V, ...args: never[]) => unknown ? V : never;

export function updateComponentName(variables: Variables, name: string): void {
  variables.componentName = name;

  const [exports] = variables.exports;

  if (exports.type !== 'VariableDeclaration') {
    return;
  }

  const [declaration] = exports.declarations;

  const { init } = declaration;

  if (init?.type !== 'CallExpression') {
    return;
  }

  const [argument] = init.arguments;

  if (argument.type !== 'Identifier') {
    return;
  }

  argument.name = name;
}
