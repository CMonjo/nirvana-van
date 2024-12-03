import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Hero from '@/app/[locale]/components/hero';
import Video from '@/components/sections/video';
import Story from './components/story';
import Rental from './components/rental';
import Bento from './components/bento';
import Socials from './components/socials';
import Models from './components/models';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tPage = useTranslations('pages.home');

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Models />
        <Video
          source='/home/video.mp4'
          thumbnail='/bento-1.jpeg'
          title={tPage('video.title')}
          descriptionLeft={tPage('video.left')}
          descriptionRight={tPage('video.right')}
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
