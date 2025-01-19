import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Video from '@/components/sections/video';
import FAQ from '@/components/sections/faq';
import Typography from '@/components/atoms/typography';
import Hero from './components/hero';
import Story from './components/story';
import Socials from '../components/socials';
import { useTranslations } from 'next-intl';

export default function Page() {
  const tPage = useTranslations('pages.trotty');

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Story />
        <Video
          source='/home/video.mp4'
          thumbnail='/bento-1.jpeg'
          title={tPage('video.title')}
          descriptionLeft={tPage('video.left')}
          descriptionRight={tPage('video.right')}
        />
        <PreOrder />
        <Typography>"Specifications" (comme TD)</Typography>
        <Typography>Formulaire de contact pour en savoir plus</Typography>
        <FAQ productKey={'trotty'} color='green' />
      </main>
      <Footer />
    </div>
  );
}
