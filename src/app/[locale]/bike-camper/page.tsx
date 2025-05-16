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
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { products } from '@/products/products';

const product = products.find((product) => product.key === 'bike-camper');

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
      icon: <InsertEmoticonIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.5.title'),
      description: tPage('productAdvantages.5.description'),
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
        <Video source='/home/video.mp4' thumbnail='/bento-1.jpeg' showSocials />
        <Bento />
        <ModelSpecifications />
        <History />
        <FAQ productKey={'bike-camper'} />
      </main>
      <Footer />
    </div>
  );
}
