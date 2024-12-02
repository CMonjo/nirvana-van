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

const specifications = ['externalHeight', 'externalLenght', 'mattress'];

export default function Teardrop() {
  const tPage = useTranslations('pages.teardrop');

  const productDescriptions = [
    '/bento-1.jpeg',
    '/bento-1.jpeg',
    '/bento-1.jpeg',
  ];

  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Story />
        <Video
          source='/teardrop/video.mp4'
          thumbnail='/bento-2.jpeg'
          title='La Teardrop en action !'
          descriptionLeft='La Teardrop'
          descriptionRight='En action!'
          showSocials
        />
        {productDescriptions.map((el: string, index: number) => (
          <div key={index}>
            <ImageText
              section={tPage(`productDescription.${index + 1}.title`)}
              title={tPage(`productDescription.${index + 1}.subtitle`)}
              description={tPage(`productDescription.${index + 1}.content`)}
              imageSource={el}
              topoBackground={index % 2 === 0}
              imageRight={index % 2 === 1}
              background={index % 2 === 1 ? 'bg-orange/10' : ''}
            />
          </div>
        ))}
        <Bento />
        <Specification productKey='teardrop' specs={specifications} />
        <FAQ productKey={'teardrop'} color='orange' />
      </main>
      <Footer />
    </div>
  );
}
