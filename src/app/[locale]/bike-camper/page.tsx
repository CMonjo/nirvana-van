import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Video from '@/components/sections/video';
import FAQ from '@/components/sections/faq';
import Hero from './components/hero';
import Story from './components/story';
import { useTranslations } from 'next-intl';
import Bento from './components/bento';
import History from './components/history';
import ModelSpecifications from './components/modelSpecifications';
import ScaleIcon from '@mui/icons-material/Scale';
import Advantages from '@/components/sections/Advantages';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import KeyIcon from '@mui/icons-material/Key';
import PublicIcon from '@mui/icons-material/Public';
import CottageIcon from '@mui/icons-material/Cottage';
import { products } from '@/products/products';
import type { Metadata } from 'next';

const product = products.find((product) => product.key === 'bike-camper');

export const metadata: Metadata = {
  title: 'Nirvana Van - Bike Camper',
  description: 'Nirvana Van - Bike Camper',
};

export default function Page() {
  const tPage = useTranslations('pages.bike-camper');

  const advantages = [
    {
      icon: <PublicIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.1.title'),
      description: tPage('productAdvantages.1.description'),
    },
    {
      icon: <AirlineSeatFlatIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.2.title'),
      description: tPage('productAdvantages.2.description'),
    },
    {
      icon: <KeyIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.3.title'),
      description: tPage('productAdvantages.3.description'),
    },
    {
      icon: <ScaleIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.4.title'),
      description: tPage('productAdvantages.4.description'),
    },
    {
      icon: <CottageIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.5.title'),
      description: tPage('productAdvantages.5.description'),
    },
  ];

  if (!product) return null;

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Story />
        <Advantages
          title={tPage('productAdvantages.title')}
          color={product?.color}
          advantages={advantages}
        />
        <Video
          source='/bike-camper/video.mov'
          thumbnail='/bike-camper/hero.JPG'
          showSocials
        />
        <Bento />
        <ModelSpecifications
          productKey={product.key}
          title={tPage('modelsSpecifications.title')}
        />
        {/* <History /> */}
        <FAQ productKey={'bike-camper'} />
      </main>
      <Footer />
    </div>
  );
}
