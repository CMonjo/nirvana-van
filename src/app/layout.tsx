import { ReactNode } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

type Props = {
  children: ReactNode;
};

// Use for `not-found.tsx` page
export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-MNNRXJVX' />
      <body>{children}</body>
    </html>
  );
}
