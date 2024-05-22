import { FC } from 'react';

type Props = {
  className?: string;
};

export const ChevronRightIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      clipRule="evenodd"
      d="M4.16 1.133a.5.5 0 0 1 .707.028l6 6.5a.5.5 0 0 1 0 .678l-6 6.5a.5.5 0 1 1-.734-.678L9.82 8 4.133 1.84a.5.5 0 0 1 .028-.707Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
