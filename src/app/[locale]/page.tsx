import Header from '@/app/[locale]/components/navigation/header';
import Hero from '@/app/[locale]/components/home/hero';
import Models from '@/app/[locale]/components/home/models';
import PresentationVideo from '@/app/[locale]/components/home/presentationVideo';

import { useTranslations } from 'next-intl';
import Why from './components/home/why';

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
        <Why />
      </main>
    </div>
  );
}
