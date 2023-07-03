type Options = {
  css: string;
  from?: string;
  modules?: boolean;
};

type Result = {
  classNames: Record<string, string> | false;
  css: string;
};

export type CssProcessor = (options: Options) => Promise<Result>;
