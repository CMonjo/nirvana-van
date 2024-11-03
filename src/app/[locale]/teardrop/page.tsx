import Header from '@/app/[locale]/components/navigation/header';
import Footer from '@/app/[locale]/components/navigation/footer';
import Mobile from '@/app/[locale]/components/mobile';
import Button from '../components/atoms/button';
import Hero from '../components/home/hero';
import Models from '../components/home/models';

export default function Teardrop() {
  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>Teardrop</main>
      <Footer />
    </div>
  );
}
