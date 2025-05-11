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
import CTAConfig from './components/CTAConfig';
import ScaleIcon from '@mui/icons-material/Scale';
import LuggageIcon from '@mui/icons-material/Luggage';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import WeekendIcon from '@mui/icons-material/Weekend';
import Advantages from '@/components/sections/Advantages';
import { products } from '@/products/products';

const product = products.find((product) => product.key === 'bike-camper');

export default function Page() {
  const tPage = useTranslations('pages.bike-camper');

  const advantages = [
    {
      icon: <ScaleIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.1.title'),
      description: tPage('productAdvantages.1.description'),
    },
    {
      icon: <LuggageIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.2.title'),
      description: tPage('productAdvantages.2.description'),
    },
    {
      icon: <AutorenewIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.3.title'),
      description: tPage('productAdvantages.3.description'),
    },
    {
      icon: <WeekendIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.4.title'),
      description: tPage('productAdvantages.4.description'),
    },
  ];

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
          source='/home/video.mp4'
          thumbnail='/bento-1.jpeg'
          title={tPage('video.title')}
          descriptionLeft={tPage('video.left')}
          descriptionRight={tPage('video.right')}
          showSocials
        />
        <ModelSpecifications />
        <Bento />
        <CTAConfig />
        <History />
        <FAQ
          productKey={'bike-camper'}
          color={product?.color as 'orange' | 'green'}
        />
      </main>
      <Footer />
    </div>
  );
}
