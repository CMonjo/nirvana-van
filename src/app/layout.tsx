import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Use for `not-found.tsx` page
export default function RootLayout({ children }: Props) {
  return children;
}
