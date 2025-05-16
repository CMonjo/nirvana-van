import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Story from './components/story';
import Video from '@/components/sections/video';
import Hero from './components/hero';
import ImageText from '../../../components/imageText';
import Bento from './components/bento';
import FAQ from '@/components/sections/faq';
import Specification from '../../../components/sections/specification';
import { useTranslations } from 'next-intl';
import Advantages from '@/components/sections/Advantages';
import { products } from '@/products/products';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import SellIcon from '@mui/icons-material/Sell';
import BoltIcon from '@mui/icons-material/Bolt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import CTAConfig from './components/CTAConfig';

const product = products.find((product) => product.key === 'teardrop');
export default function Page() {
  const tPage = useTranslations('pages.teardrop');

  const productDescriptions = [
    '/teardrop/kitchen.JPG',
    '/teardrop/interior.jpeg',
  ];

  const advantages = [
    {
      icon: <PaletteIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.1.title'),
      description: tPage('productAdvantages.1.description'),
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.2.title'),
      description: tPage('productAdvantages.2.description'),
    },
    {
      icon: <SellIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.3.title'),
      description: tPage('productAdvantages.3.description'),
    },
    {
      icon: <BoltIcon sx={{ fontSize: 'inherit' }} />,
      title: tPage('productAdvantages.4.title'),
      description: tPage('productAdvantages.4.description'),
    },
    {
      icon: <BedtimeIcon sx={{ fontSize: 'inherit' }} />,
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
          advantages={advantages}
          color={product?.color}
        />
        <Video
          source='/teardrop/video.mp4'
          thumbnail='/bento-2.jpeg'
          //   title={tPage('video.title')}
          //   descriptionLeft={tPage('video.left')}
          //   descriptionRight={tPage('video.right')}
          showSocials
        />
        {productDescriptions.map((el: string, index: number) => (
          <div key={index}>
            <ImageText
              title={tPage(`productDescription.${index + 1}.title`)}
              description={tPage(`productDescription.${index + 1}.content`)}
              imageSource={el}
              imageRight={index % 2 === 0}
            />
          </div>
        ))}
        <Bento />
        <Specification productKey='teardrop' specs={5} />
        <CTAConfig />
        <FAQ productKey={'teardrop'} />
      </main>

      <Footer />
    </div>
  );
}
