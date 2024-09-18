import { ReactNode } from 'react';

type Props = {
  className?: string;
};

export function EditIcon({ className }: Props): ReactNode {
  return (
    <svg
      className={className}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m12.707 2.707 1.586 1.586a1 1 0 0 1 0 1.414l-.482.482-3-3 .482-.482a1 1 0 0 1 1.414 0Zm.396 4.19-3-3L6 8v3.086L9 11l4.104-4.103Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M8 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
