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
        {/* <Typography variant='h1'>Test H1</Typography>
        <Typography variant='h2'>Test H2</Typography>
        <Typography variant='h3'>Test H3</Typography>
        <Typography variant='body1'>Test body1</Typography>
        <Typography variant='body2'>Test body2</Typography>
        <Typography variant='caption'>Test caption</Typography>
        <Typography variant='button'>Test button</Typography>
        <Typography>
          Nous construisons nos caravanes dans le but de vous offrir une
          expérience de voyage unique, avec tous le confort necessaire, en
          choisissant des matériaux nobles que nous assemblons dans notre
          atelier à Montpellier.
        </Typography> */}

        <PresentationVideo />
        <Why />
        <Story />
        <Rental />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
