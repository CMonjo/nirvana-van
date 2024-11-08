import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const localesName = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' },
];

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
