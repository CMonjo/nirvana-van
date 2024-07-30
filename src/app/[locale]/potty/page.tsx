import Footers from '@/app/[locale]/components/footers';
import Header from '@/app/[locale]/components/navigation/header';
import Mobile from '@/app/[locale]/components/mobile';

export default function Teardrop() {
  return (
    <div className='min-h-screen bg-green'>
      <Header />
      Potty page
      {/* <Main /> */}
      {/* <Footers /> */}
    </div>
  );
}
