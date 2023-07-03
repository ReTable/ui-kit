import { basename, isAbsolute, relative, resolve, sep } from 'node:path';

import { ComponentDoc, ParserOptions, parse } from 'react-docgen-typescript';

type Options = {
  packageRoot: string;
  repositoryRoot: string;
};

const parserOptions: ParserOptions = {
  propFilter: {
    skipPropsWithName: ['key'],
  },
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromUnion: true,
  shouldRemoveUndefinedFromOptional: false,
  skipChildrenPropWithoutDoc: false,
};

function createResolver({ packageRoot, repositoryRoot }: Options) {
  const packageName = basename(packageRoot);
  const repositoryName = basename(repositoryRoot);

  return (fileName: string) => {
    if (isAbsolute(fileName)) {
      return relative(repositoryRoot, fileName);
    }

    if (fileName.startsWith(`${repositoryName}${sep}`)) {
      return relative(repositoryName, fileName);
    }

    if (fileName.startsWith(`${packageName}${sep}`)) {
      return relative(repositoryRoot, resolve(packageRoot, '..', fileName));
    }

    return fileName;
  };
}

export function parseDocs(from: string, options: Options): ComponentDoc[] {
  try {
    const resolveRelative = createResolver(options);
    const docs = parse(from, parserOptions);

    for (const doc of docs) {
      doc.filePath = resolveRelative(doc.filePath);

      for (const propertyName of Object.keys(doc.props)) {
        const property = doc.props[propertyName];

        if (property.parent) {
          property.parent.fileName = resolveRelative(property.parent.fileName);
        }

        if (property.declarations == null) {
          continue;
        }

        for (const declaration of property.declarations) {
          declaration.fileName = resolveRelative(declaration.fileName);
        }
      }
    }

    return docs;
  } catch {
    return [];
  }
}
