import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Story from './components/story';

export default function Teardrop() {
  return (
    <div className='bg-bg-2'>
      <Header fixedMenu />
      <main className='flex w-full flex-col items-center pt-[96px]'>
        {/* <Hero /> */}
        <Story />
      </main>
      <Footer />
    </div>
  );
}
