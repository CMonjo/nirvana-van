import Header from '@/app/[locale]/components/navigation/header';
import Footer from '@/app/[locale]/components/navigation/footer';
import Hero from '@/app/[locale]/components/home/hero';
import Models from '@/app/[locale]/components/home/models';
import PresentationVideo from '@/app/[locale]/components/home/presentationVideo';
import Story from './components/home/story';
import Rental from './components/home/rental';
import { useTranslations } from 'next-intl';
import Why from './components/home/why';
import Typography from './components/atoms/typography';
import Socials from './components/home/socials';

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
        <Story />
        {/* <Rental /> */}
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
