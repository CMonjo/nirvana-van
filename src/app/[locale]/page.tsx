import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Hero from '@/app/[locale]/components/hero';
import Video from '@/components/sections/video';
import Story from './components/story';
import Bento from './components/bento';
import Socials from './components/socials';
import Models from './components/models';
import Partners from './components/partners';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nirvana Van',
  description: 'Nirvana Van',
};

export default function Home() {
  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Partners />
        <Models />
        <Video
          source='/home/video.mov'
          thumbnail='/home/video_thumbnail.jpeg'
          showSocials
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
