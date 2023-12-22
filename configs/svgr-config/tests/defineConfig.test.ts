import { transform } from '@svgr/core';
import { describe, expect, it } from 'vitest';

import { Options, defineConfig } from '~';

const icon = `
  <svg xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="10" y="10" height="100" width="100"
      style="stroke:#ff0000; fill: #0000ff"/>
  </svg>
`;

async function transformIcon(options: Options) {
  const config = { ...defineConfig(options), plugins: ['@svgr/plugin-jsx'] };

  return transform(icon, config, {
    componentName: 'SvgIcon',
  });
}

describe('defineConfig', () => {
  it('add scope and displayName without name transformation', async () => {
    const component = await transformIcon({ scope: 'svgr-config' });

    expect(component).toMatchSnapshot();
  });

  it('add scope and displayName with name transformation', async () => {
    const component = await transformIcon({
      scope: 'svgr-config',

      transformName(name) {
        return `Ui${name.slice(3)}`;
      },
    });

    expect(component).toMatchSnapshot();
  });
});
