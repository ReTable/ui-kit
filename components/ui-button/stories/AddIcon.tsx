import { FC } from 'react';

type Props = {
  className?: string;
};

export const AddIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M9.037 7.996h4.47a.492.492 0 0 1 0 .984h-4.47l-.033 4.52a.503.503 0 0 1-1.007 0l-.023-4.52H3.492a.492.492 0 1 1 0-.984h4.482l.023-4.495a.503.503 0 0 1 1.007-.002l.033 4.497Z"
      fill="currentColor"
    />
  </svg>
);
