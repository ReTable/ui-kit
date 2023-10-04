import { FC } from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj } from '@storybook/react';

import { Actions, UiJsonView } from '~';

import {
  PrimitiveType,
  createComplexObject,
  createHeterogeneousArray,
  createHeterogeneousObject,
  createHomogeneousArray,
  createHomogeneousObject,
  createNestedArray,
  createNestedObject,
  primitiveTypes,
  primitiveTypesLabels,
} from './factories';

type CollapsedType = 'none' | 'custom' | 'all';

export default {
  title: 'ui-json-view',

  argTypes: {
    isInteractive: {
      control: 'boolean',
      name: 'Is interactive?',
    },

    showDataTypes: {
      control: 'boolean',
      name: 'Is data types visible?',
    },

    showObjectSize: {
      control: 'boolean',
      name: 'Is object size visible?',
    },

    isVirtual: {
      control: 'boolean',
      name: 'Is virtualization used?',
    },

    limit: {
      control: 'number',
      name: 'Limit of visible lines',
    },

    collapsedType: {
      control: {
        type: 'select',
        labels: {
          none: 'None',
          custom: 'Custom',
          all: 'All',
        },
      },
      name: 'Which level should be collapsed?',
      options: ['none', 'custom', 'all'],
    },

    collapsedLevel: {
      control: 'number',
      name: 'Collapse after level',
      if: {
        arg: 'collapsedType',
        eq: 'custom',
      },
    },

    shortStringAfterLength: {
      control: 'number',
      name: 'Short string after length',
    },
  },

  args: {
    collapsedLevel: 0,
    collapsedType: 'none',
    isInteractive: false,
    isVirtual: false,
    limit: 0,
    showDataTypes: false,
    showObjectSize: false,
  },
};

type Props = {
  collapsedLevel: number;
  collapsedType: CollapsedType;
  isInteractive: boolean;
  isVirtual: boolean;
  showDataTypes: boolean;
  showObjectSize: boolean;
  shortStringAfterLength?: number;
  source: string;
};

const actions: Actions = {
  Extract: action('extract'),
};

const onToggleDataTypes = action('on-toggle-data-types');

const onToggleObjectSize = action('on-toggle-object-size');

const StoryView: FC<Props> = ({ collapsedType, collapsedLevel, ...props }) => {
  let collapsed: boolean | number = false;

  switch (collapsedType) {
    case 'all': {
      collapsed = true;

      break;
    }
    case 'custom': {
      collapsed = collapsedLevel;

      break;
    }
    case 'none': {
      collapsed = false;

      break;
    }
  }

  return (
    <UiJsonView
      {...props}
      actions={actions}
      collapsed={collapsed}
      onToggleDataTypes={onToggleDataTypes}
      onToggleObjectSize={onToggleObjectSize}
    />
  );
};

type Story<AdditionalProps = Record<string, never>> = StoryObj<
  Omit<Props, 'source'> & AdditionalProps
>;

export const Invalid: Story = {
  name: 'Invalid',

  render(props) {
    return <StoryView {...props} source="" />;
  },
};

export const PlainNull: Story = {
  name: 'Null',

  render(props) {
    return <StoryView {...props} source={JSON.stringify(null)} />;
  },
};

export const PlainBoolean: Story<{ value: boolean }> = {
  args: {
    value: true,
  },

  argTypes: {
    value: {
      name: 'Value',
      control: 'boolean',
    },
  },

  name: 'Boolean',

  render({ value, ...props }) {
    const source = JSON.stringify(value);

    return <StoryView {...props} source={source} />;
  },
};

export const PlainNumber: Story<{ value: number }> = {
  args: {
    value: 0,
  },

  argTypes: {
    value: {
      name: 'Value',
      control: 'number',
    },
  },

  name: 'Number',

  render({ value, ...props }) {
    return <StoryView {...props} source={JSON.stringify(value)} />;
  },
};

export const PlainString: Story<{ value: string }> = {
  args: {
    value: 'ui-json-view',
  },

  argTypes: {
    value: {
      name: 'Value',
      control: 'text',
    },
  },

  name: 'String',

  render({ value, ...props }) {
    return <StoryView {...props} source={JSON.stringify(value)} />;
  },
};

export const EmptyArray: Story = {
  name: 'Empty Array',

  render(props) {
    return <StoryView {...props} source={JSON.stringify([])} />;
  },
};

export const HomogeneousArray: Story<{ size: number; type: PrimitiveType }> = {
  args: {
    size: 5,
    type: 'null',
  },

  argTypes: {
    size: {
      name: 'Size',
      control: 'number',
    },
    type: {
      name: 'Type',
      control: {
        type: 'select',
        labels: primitiveTypesLabels,
      },
      options: Object.keys(primitiveTypesLabels),
    },
  },

  name: 'Homogeneous Array',

  render({ size, type, ...props }) {
    const array = createHomogeneousArray(size, type);

    return <StoryView {...props} source={JSON.stringify(array)} />;
  },
};

export const HeterogeneousArray: Story<{ size: number }> = {
  args: {
    size: 5,
  },

  argTypes: {
    size: {
      name: 'Size',
      control: 'number',
    },
  },

  name: 'Heterogeneous Array',

  render({ size, ...props }) {
    const array = createHeterogeneousArray(size);

    return <StoryView {...props} source={JSON.stringify(array)} />;
  },
};

export const NestedArray: Story = {
  name: 'Nested Array',

  render(props) {
    const array = createNestedArray();

    return <StoryView {...props} source={JSON.stringify(array)} />;
  },
};

export const EmptyObject: Story = {
  name: 'Empty Object',

  render(props) {
    return <StoryView {...props} source={JSON.stringify({})} />;
  },
};

export const HomogeneousObject: Story<{ size: number; type: PrimitiveType }> = {
  args: {
    size: 5,
    type: 'null',
  },

  argTypes: {
    size: {
      name: 'Size',
      control: 'number',
    },
    type: {
      name: 'Type',
      control: {
        type: 'select',
        labels: primitiveTypesLabels,
      },
      options: primitiveTypes,
    },
  },

  name: 'Homogeneous Object',

  render({ size, type, ...props }) {
    const object = createHomogeneousObject(size, type);

    return <StoryView {...props} source={JSON.stringify(object)} />;
  },
};

export const HeterogeneousObject: Story<{ size: number }> = {
  args: {
    size: 5,
  },

  argTypes: {
    size: {
      name: 'Size',
      control: 'number',
    },
  },

  name: 'Heterogeneous Object',

  render({ size, ...props }) {
    const object = createHeterogeneousObject(size);

    return <StoryView {...props} source={JSON.stringify(object)} />;
  },
};

export const NestedObject: Story = {
  name: 'Nested Object',

  render(props) {
    const object = createNestedObject();

    return <StoryView {...props} source={JSON.stringify(object)} />;
  },
};

export const ComplexObject: Story<{ size: number }> = {
  args: {
    size: 5,
  },

  argTypes: {
    size: {
      name: 'Nesting size',
      control: 'number',
    },
  },

  name: 'Complex Object',

  render({ size, ...props }) {
    const object = createComplexObject(size);

    return <StoryView {...props} source={JSON.stringify(object)} />;
  },
};
