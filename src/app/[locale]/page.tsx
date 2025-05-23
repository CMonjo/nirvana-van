import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Hero from '@/app/[locale]/components/hero';
import Video from '@/components/sections/video';
import Story from './components/story';
import Bento from './components/bento';
import Socials from './components/socials';
import Models from './components/models';
import { useTranslations } from 'next-intl';
import Partners from './components/partners';

export default function Home() {
  const tPage = useTranslations('pages.home');

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Partners />
        <Models />
        <Video
          source='/home/video.mp4'
          thumbnail='/home/video_thumbnail.jpeg'
          //   title={tPage('video.title')}
          //   descriptionLeft={tPage('video.left')}
          //   descriptionRight={tPage('video.right')}
        />
        <Bento />
        <Story />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
