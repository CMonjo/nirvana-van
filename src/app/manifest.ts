import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest({
  params,
}: {
  params: { locale: string };
}): Promise<MetadataRoute.Manifest> {
  const { locale } = (await params) || { locale: 'fr' };

  const t = await getTranslations({
    namespace: 'manifest',
    locale,
  });

  return {
    name: t('name'),
    short_name: t('short_name'),
    description: t('description'),
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF',
    theme_color: '#F2712A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
