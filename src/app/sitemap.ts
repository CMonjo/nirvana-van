//https://next-intl-docs.vercel.app/docs/environments/actions-metadata-route-handlers

import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const host = 'https://nirvana-van.com';

export default function sitemap(): MetadataRoute.Sitemap {
  console.log(getEntry('/'));
  return [
    getEntry('/'),
    getEntry('/teardrop'),
    getEntry('/bike-camper'),
    getEntry('/configurator'),
    getEntry('/contact'),
    getEntry('/rental'),
  ];
}

function getEntry(href: any) {
  return {
    url: `${host}/${routing.defaultLocale}${href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${host}/${locale}${href}`])
      ),
    },
  };
}
