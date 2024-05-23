import { CSSProperties, FC, useMemo, useState } from 'react';

import { Heading, OptionsControl } from '@storybook/blocks';

import { filter, fontSample, list } from './styles.css';

import { Category as CategoryType, Font as FontType, fonts } from './fonts';

// region Types

type SourceType = 'css' | 'sass' | 'sassMixin' | 'vanillaExtract' | 'vanillaExtractVariant';

// endregion

// region Category

type CategorySelectProps = {
  onChange: (category: string) => void;
  value: string;
};

const categoryArgType = {
  options: ['all', ...fonts.map((it) => it.name)],
};

const categoryLabels = fonts.reduce<Record<string, string>>(
  (labels, it) => {
    labels[it.name] = it.name;

    return labels;
  },
  { all: 'All families' },
);

const CategorySelect: FC<CategorySelectProps> = ({ onChange, value }) => (
  <OptionsControl
    argType={categoryArgType}
    labels={categoryLabels}
    name="sourceType"
    onChange={onChange}
    type="select"
    value={value}
  />
);

// endregion

// region Source Type

type SourceTypeSelectProps = {
  onChange: (sourceType: SourceType) => void;
  value: SourceType;
};

const sourceTypeArgType = {
  options: ['css', 'sass', 'sassMixin', 'vanillaExtract', 'vanillaExtractVariant'],
};

const sourceTypeLabels = {
  css: 'CSS',
  sass: 'Sass',
  sassMixin: 'Sass Mixins',
  vanillaExtract: 'vanilla-extract',
  vanillaExtractVariant: 'vanilla-extract Style Variants',
};

const SourceTypeSelect: FC<SourceTypeSelectProps> = ({ onChange, value }) => (
  <OptionsControl
    argType={sourceTypeArgType}
    labels={sourceTypeLabels}
    name="sourceType"
    onChange={onChange}
    type="select"
    value={value}
  />
);

// endregion

// region Filter

type FilterProps = {
  category: string;
  onChangeCategory: (category: string) => void;
  onChangeSourceType: (sourceType: SourceType) => void;
  sourceType: SourceType;
};

const Filter: FC<FilterProps> = ({
  category,
  onChangeCategory,
  onChangeSourceType,
  sourceType,
}) => (
  <div className={filter}>
    <CategorySelect onChange={onChangeCategory} value={category} />
    <SourceTypeSelect onChange={onChangeSourceType} value={sourceType} />
  </div>
);

// endregion

// region Font

type FontProps = {
  font: FontType;
  sourceType: SourceType;
};

const Font: FC<FontProps> = ({ font, sourceType }) => {
  const usage = font[sourceType];

  return (
    <>
      <div className={fontSample} style={font.css as CSSProperties}>
        {font.name}
      </div>
      <div>
        <p>
          <code>{usage.font}</code>
        </p>

        {usage.fontFamily && (
          <p>
            <code>{usage.fontFamily}</code>
          </p>
        )}
        {usage.fontSize && (
          <p>
            <code>{usage.fontSize}</code>
          </p>
        )}
        {usage.fontWeight && (
          <p>
            <code>{usage.fontWeight}</code>
          </p>
        )}
        {usage.letterSpacing && (
          <p>
            <code>{usage.letterSpacing}</code>
          </p>
        )}
        {usage.lineHeight && (
          <p>
            <code>{usage.lineHeight}</code>
          </p>
        )}
        {usage.textTransform && (
          <p>
            <code>{usage.textTransform}</code>
          </p>
        )}
      </div>
    </>
  );
};

// endregion

// region Category

type CategoryProps = {
  category: CategoryType;
  sourceType: SourceType;
};

const weights: Record<string, number> = {
  regular: 0,
  medium: 1,
  semiBold: 2,
  bold: 3,
};

const Category: FC<CategoryProps> = ({ category, sourceType }) => {
  const categoryFonts = useMemo(() => {
    const result = [...category.fonts];

    result.sort((left, right) => {
      const leftWeight = weights[left.weight];
      const rightWeight = weights[right.weight];

      if (leftWeight === rightWeight) {
        return left.size > right.size ? 1 : -1;
      }

      return leftWeight > rightWeight ? 1 : -1;
    });

    return result;
  }, [category.fonts]);

  return (
    <>
      <Heading>{category.name}</Heading>
      <div className={list}>
        {categoryFonts.map((font) => (
          <Font font={font} key={font.name} sourceType={sourceType} />
        ))}
      </div>
    </>
  );
};

// endregion

export const FontsList: FC = () => {
  const [sourceType, setSourceType] = useState<SourceType>('css');
  const [category, setCategory] = useState<string>('all');

  const categories = useMemo(() => {
    if (category === 'all') {
      return fonts;
    }

    return fonts.filter((it) => it.name === category);
  }, [category]);

  return (
    <>
      <Filter
        category={category}
        onChangeCategory={setCategory}
        onChangeSourceType={setSourceType}
        sourceType={sourceType}
      />
      {categories.map((it) => (
        <Category category={it} key={it.name} sourceType={sourceType} />
      ))}
    </>
  );
};
