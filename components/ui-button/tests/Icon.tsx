import { FC } from 'react';

type Props = {
  className?: string;
};

export const Icon: FC<Props> = ({ className }) => <svg className={className} data-testid="icon" />;
