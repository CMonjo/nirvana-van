import Footers from '@/app/[locale]/components/footers';
import Header from '@/app/[locale]/components/navigation/header';
import Hero from '@/app/[locale]/components/home/hero';
import Bento from '@/app/[locale]/components/home/bento';
import PlugNTote from '@/app/[locale]/components/home/plug-n-tote';
import Flavors from '@/app/[locale]/components/home/flavors';
import Presentation from '@/app/[locale]/components/home/presentation';
import Spotify from '@/app/[locale]/components/home/spotify';
import Mynthos from '@/app/[locale]/components/home/mynthos';
import Models from '@/app/[locale]/components/home/models';
import Container from '@/app/[locale]/components/atoms/container';
import PresentationVideo from '@/app/[locale]/components/home/presentationVideo';

import { useTranslations } from 'next-intl';

export default function Home() {
  //   const t = useTranslations('HomePage');

  //   console.log(t('title'));

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Models />
        <PresentationVideo />
      </main>
      <Bento />
      <PlugNTote />
      <Flavors />
      <Presentation />
      <Spotify />
      <Mynthos />
      <Footers />
    </div>
  );
}
