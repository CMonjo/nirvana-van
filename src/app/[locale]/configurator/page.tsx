import Footers from '@/app/[locale]/components/footers';
import Header from '@/app/[locale]/components/navigation/header';
import Mobile from '@/app/[locale]/components/mobile';
import Configurator from '../components/configurator/configurator';
import Basket from '../components/configurator/basket';

export default function Teardrop() {
  return (
    <div className='min-h-screen bg-green'>
      <Header />
      <Configurator />
      <Basket />
      {/* Footer */}
    </div>
  );
}
