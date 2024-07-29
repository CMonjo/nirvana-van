import Footers from '@/app/components/footers';
import Header from '@/app/components/navigation/header';
import Hero from '@/app/components/home/hero';
import Bento from '@/app/components/home/bento';
import PlugNTote from '@/app/components/home/plug-n-tote';
import Flavors from '@/app/components/home/flavors';
import Presentation from '@/app/components/home/presentation';
import Spotify from '@/app/components/home/spotify';
import Mynthos from '@/app/components/home/mynthos';
import Models from '@/app/components/home/models';
import Container from '@/app/components/atoms/container';
import PresentationVideo from '@/app/components/home/presentationVideo';

export default async function Home() {
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
