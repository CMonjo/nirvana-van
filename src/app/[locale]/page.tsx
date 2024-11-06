import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Hero from '@/app/[locale]/components/hero';
import Models from '@/app/[locale]/components/models';
import Video from '@/app/[locale]/components/video';
import Story from './components/story';
import Rental from './components/rental';
import { useTranslations } from 'next-intl';
import Bento from './components/bento';
import Typography from '../../components/atoms/typography';
import Socials from './components/socials';

export default function Home() {
  //   const t = useTranslations('HomePage');

  //   console.log(t('title'));

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Models />
        <Video
          source='/home/video.mp4'
          thumbnail='/bento-1.jpeg'
          title='Nirvana Van en action'
          descriptionLeft='Nirvana Van'
          descriptionRight='En actions!'
        />
        <Bento />
        <Story />
        {/* <Rental /> */}
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
