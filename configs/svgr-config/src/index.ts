import { Config } from '@svgr/core';

import { buildDisplayName } from './buildDisplayName';
import { updateComponentName } from './updateComponentName';

export type Options = {
  scope: string;

  transformName?: (name: string) => string;
};

export function defineConfig({ scope, transformName }: Options): Config {
  return {
    memo: true,

    template(variables, { tpl }) {
      const name =
        transformName == null ? variables.componentName : transformName(variables.componentName);

      updateComponentName(variables, name);

      const displayName = buildDisplayName('Memo', scope, name);

      return tpl`
        ${variables.imports};

        ${variables.interfaces};

        const ${variables.componentName} = (${variables.props}) => (
          ${variables.jsx}
        );

        ${variables.exports};

        ${displayName};
      `;
    },
  };
}
