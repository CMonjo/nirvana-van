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
import SplitImageText from '@/components/SplitImageText';

export default function Page() {
  const tPage = useTranslations('pages.teardrop');

  const productDescriptions = [
    '/teardrop/kitchen.JPG',
    '/teardrop/interior.jpeg',
    // '/teardrop/exterior.JPG',
  ];

  const productSpecificationsTotal = 5;

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Story />
        <Video
          source='/teardrop/video.mp4'
          thumbnail='/bento-2.jpeg'
          title={tPage('video.title')}
          descriptionLeft={tPage('video.left')}
          descriptionRight={tPage('video.right')}
          showSocials
        />
        {productDescriptions.map((el: string, index: number) => (
          <div key={index}>
            <SplitImageText
              section={tPage(`productDescription.${index + 1}.title`)}
              title={tPage(`productDescription.${index + 1}.subtitle`)}
              description={tPage(`productDescription.${index + 1}.content`)}
              imageSource={el}
              imageRight={index % 2 === 0}
            />
          </div>
        ))}

        {productDescriptions.map((el: string, index: number) => (
          <div key={index}>
            <ImageText
              section={tPage(`productDescription.${index + 1}.title`)}
              title={tPage(`productDescription.${index + 1}.subtitle`)}
              description={tPage(`productDescription.${index + 1}.content`)}
              imageSource={el}
              imageRight={index % 2 === 0}
            />
          </div>
        ))}
        <Bento />
        <Specification
          productKey='teardrop'
          specs={productSpecificationsTotal}
        />
        <FAQ productKey={'teardrop'} color='orange' />
      </main>
      <Footer />
    </div>
  );
}
