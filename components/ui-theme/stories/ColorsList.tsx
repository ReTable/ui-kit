import { FC, useMemo, useState } from 'react';

import { Heading, OptionsControl } from '@storybook/blocks';
import { capitalCase } from 'change-case';

import { colorSample, filter, list } from './styles.css';

import { Category as CategoryType, Color as ColorType, colors } from './colors';

// region Types

type SourceType = 'css' | 'sass' | 'vanillaExtract';

// endregion

// region Category

type CategorySelectProps = {
  onChange: (category: string) => void;
  value: string;
};

const categoryArgType = {
  options: ['all', ...colors.map((it) => it.name)],
};

const categoryLabels = colors.reduce<Record<string, string>>(
  (labels, it) => {
    labels[it.name] = capitalCase(it.name);

    return labels;
  },
  { all: 'All categories' },
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
  options: ['css', 'sass', 'vanillaExtract'],
};

const sourceTypeLabels = {
  css: 'CSS',
  sass: 'Sass',
  vanillaExtract: 'vanilla-extract',
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

// region Color

type ColorProps = {
  color: ColorType;
  sourceType: SourceType;
};

const Color: FC<ColorProps> = ({ color, sourceType }) => {
  const background =
    color.type === 'plain'
      ? `var(${color.css})`
      : `linear-gradient(\n  to right, var(${color.from.css}), var(${color.to.css})\n)`;

  let usage = background;

  switch (sourceType) {
    case 'sass': {
      usage =
        color.type === 'plain'
          ? color.sass
          : `linear-gradient(\n  to right, ${color.from.sass}, ${color.to.sass}\n)`;

      break;
    }
    case 'vanillaExtract': {
      usage =
        color.type === 'plain'
          ? color.vanillaExtract
          : `linear-gradient(\n  to right, ${color.from.vanillaExtract}, ${color.to.vanillaExtract}\n)`;

      break;
    }
    default: {
      break;
    }
  }

  return (
    <>
      <div className={colorSample} style={{ background }} />
      <div>
        <p>
          <code>{usage}</code>
        </p>
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

const Category: FC<CategoryProps> = ({ category, sourceType }) => (
  <>
    <Heading>{capitalCase(category.name)}</Heading>
    <div className={list}>
      {category.colors.map((color) => (
        <Color
          color={color}
          key={color.type === 'plain' ? color.css : color.from.css}
          sourceType={sourceType}
        />
      ))}
    </div>
  </>
);

// endregion

export const ColorsList: FC = () => {
  const [sourceType, setSourceType] = useState<SourceType>('css');
  const [category, setCategory] = useState<string>('all');

  const categories = useMemo(() => {
    if (category === 'all') {
      return colors;
    }

    return colors.filter((it) => it.name === category);
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
