import { default as postcssrc } from 'postcss-load-config';

function isNoConfigError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }

  return /no postcss config found/i.test(error.message);
}

type Result = Pick<postcssrc.Result, 'options' | 'plugins'>;

export async function loadConfig(): Promise<Result> {
  try {
    return await postcssrc();
  } catch (error) {
    if (isNoConfigError(error)) {
      return {
        options: {},
        plugins: [],
      };
    }

    throw error;
  }
}
