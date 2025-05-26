//https://next-intl-docs.vercel.app/docs/environments/actions-metadata-route-handlers

import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const host = 'https://nirvana-van.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry('/'),
    getEntry('/teardrop'),
    getEntry('/bike-camping'),
    getEntry('/configurator'),
    getEntry('/contact'),
    getEntry('/rental'),
  ];
}

function getEntry(href: any) {
  return {
    url: `${host}/${routing.defaultLocale}${href}`,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${host}/${locale}${href}`])
      ),
    },
  };
}
