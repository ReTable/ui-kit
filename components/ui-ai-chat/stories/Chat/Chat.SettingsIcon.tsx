import { ReactNode } from 'react';

type Props = {
  className?: string;
};

export function SettingsIcon({ className }: Props): ReactNode {
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
        d="M8 9.91a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M12.71 9.91a1.05 1.05 0 0 0 .21 1.157l.037.038a1.272 1.272 0 0 1-.9 2.175 1.272 1.272 0 0 1-.9-.374l-.039-.038a1.05 1.05 0 0 0-1.158-.21 1.05 1.05 0 0 0-.636.961v.108a1.273 1.273 0 0 1-2.546 0v-.057a1.05 1.05 0 0 0-.687-.96 1.05 1.05 0 0 0-1.158.21l-.038.037a1.272 1.272 0 1 1-1.801-1.8l.038-.039a1.05 1.05 0 0 0 .21-1.158 1.05 1.05 0 0 0-.961-.636h-.108a1.273 1.273 0 0 1 0-2.546h.057a1.05 1.05 0 0 0 .96-.687 1.05 1.05 0 0 0-.21-1.158l-.037-.038a1.273 1.273 0 1 1 1.8-1.801l.039.038a1.05 1.05 0 0 0 1.158.21h.05a1.05 1.05 0 0 0 .637-.961v-.108a1.273 1.273 0 0 1 2.546 0v.057a1.05 1.05 0 0 0 .636.96 1.05 1.05 0 0 0 1.158-.21l.038-.037a1.272 1.272 0 1 1 1.801 1.8l-.038.039a1.05 1.05 0 0 0-.21 1.158v.05a1.05 1.05 0 0 0 .961.637h.108a1.273 1.273 0 0 1 0 2.546h-.057a1.05 1.05 0 0 0-.96.636Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
