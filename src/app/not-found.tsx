'use client';

import Error from 'next/error';
import { GoogleTagManager } from '@next/third-parties/google';
// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang='fr'>
      <body>
        <Error statusCode={404} />
      </body>
      <GoogleTagManager gtmId='GTM-MNNRXJVX' />
    </html>
  );
}
