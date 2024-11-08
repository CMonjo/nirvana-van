'use client';

import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import { useTranslations } from 'next-intl';
import Configurator from './components/configurator';
import { useSearchParams } from 'next/navigation';
import { products } from '@/constants/products';
import { useEffect, useMemo } from 'react';
import ChooseModel from './components/chooseModel';

export default function Teardrop() {
  const searchParams = useSearchParams();
  const productQuery = searchParams.get('product');

  const product = useMemo(() => {
    return products.find((product) => product.key === productQuery);
  }, [productQuery]);

  return (
    <div className='min-h-screen'>
      <Header fixedMenu />
      {product ? <Configurator product={product} /> : <ChooseModel />}

      {/* <Configurator /> */}
      {/* <Configurator /> */}
      {/* <Basket /> */}
      <Footer />
    </div>
  );
}
