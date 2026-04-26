import { ReactNode, useState } from 'react';

type RendererProps = {
  showDataTypes: boolean;
  showObjectSize: boolean;
  onToggleDataTypes?: (showDataTypes: boolean) => void;
  onToggleObjectSize?: (showObjectSize: boolean) => void;
};

type Props = {
  children: (props: RendererProps) => ReactNode;

  dataTypes?: boolean;
  objectSize?: boolean;
};

export function Options({ children, dataTypes, objectSize }: Props): ReactNode {
  const [showDataTypes, setShowDataTypes] = useState(false);
  const [showObjectSize, setShowObjectSize] = useState(false);

  const props: RendererProps = {
    showDataTypes,
    showObjectSize,
  };

  if (dataTypes) {
    props.onToggleDataTypes = setShowDataTypes;
  }

  if (objectSize) {
    props.onToggleObjectSize = setShowObjectSize;
  }

  return children(props);
}
