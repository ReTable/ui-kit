import { globalLayer } from '@vanilla-extract/css';

import { layers as layersNames } from './vars.css';

type LayerType = (typeof layersNames)[number];

type Layers = Record<LayerType, string>;

export const layers = layersNames.reduce((result, layerName) => {
  result[layerName] = globalLayer(`tbl--${layerName}`);

  return result;
}, {} as Layers);
