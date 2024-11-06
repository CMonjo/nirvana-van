import Header from '@/components/navigation/header';
import Configurator from './components/configurator';
import Basket from './components/basket';

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
