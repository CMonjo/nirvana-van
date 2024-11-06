import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Story from './components/story';
import Video from '@/components/sections/video';

export default function Teardrop() {
  return (
    <div className='bg-bg-2'>
      <Header fixedMenu />
      <main className='flex w-full flex-col items-center pt-[96px]'>
        {/* <Hero /> */}
        <Story />
        <Video
          source='/teardrop/video.mp4'
          thumbnail='/bento-2.jpeg'
          title='La Teardrop en action !'
          descriptionLeft='La Teardrop'
          descriptionRight='En action!'
          showSocials
        />
      </main>
      <Footer />
    </div>
  );
}
