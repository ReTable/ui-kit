import { createContainer } from '@vanilla-extract/css';

export const container = createContainer();

export const containerQuery = `${container} (min-width: 700px)`;
