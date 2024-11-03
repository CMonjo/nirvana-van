import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  //   const t = await getTranslations({ namespace: 'Manifest' });

  return {
    name: /*t('name')*/ 'test',
    start_url: '/',
    theme_color: '#101E33', //TODO Camille
  };
}
