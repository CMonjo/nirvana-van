'use client';
import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import { useSearchParams } from 'next/navigation';
import {
  getProductConfiguration,
  products,
  updateProductConfiguration,
} from '@/products/products';
import { useEffect, useMemo, useRef, useState } from 'react';
import ChooseModel from './components/chooseModel';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../components/sections/title';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';
import { IProduct, IProductConfig } from '@/products/types';
import { useTranslations } from 'next-intl';
import Colors from './components/colors';
import Basket from './components/basket';
import { AnimatePresence, motion } from 'framer-motion';
import OptionPicker from './components/optionPicker';

export default function Configurator() {
  //State
  const [productConfiguration, setProductConfiguration] =
    useState<IProductConfig | null>(null);
  const [isStickyImageVisible, setIsStickyImageVisible] = useState(false);

  //Hooks
  const searchParams = useSearchParams();
  const productQuery = searchParams.get('product');

  const product: IProduct | undefined = useMemo(() => {
    return products.find((p) => p.key === productQuery);
  }, [productQuery]);

  useEffect(() => {
    if (product) {
      setProductConfiguration(getProductConfiguration(product));
    }
  }, [product]);

  //Image
  const mainImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyImageVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (mainImageRef.current) {
      observer.observe(mainImageRef.current);
    }

    return () => {
      if (mainImageRef.current) {
        observer.unobserve(mainImageRef.current);
      }
    };
  }, []);

  const tPage = useTranslations('pages.configurator');

  const onProductChange = (category: string, option: string) => {
    if (!productConfiguration || !product) return;
    setProductConfiguration(
      updateProductConfiguration(
        productConfiguration,
        product,
        category,
        option
      )
    );
  };

  return (
    <div className='min-h-screen bg-bg-2'>
      <Header fixedMenu />

      {!product ? (
        <ChooseModel />
      ) : (
        <Section className=' bg-white'>
          <Container className='flex-col'>
            <SectionTitle title={`Configurez votre ${product.key}`} />
            <Typography variant='h3'>{tPage('subtitle')}</Typography>
            <div className='flex w-full'>
              <div className='flex flex-[4] flex-col gap-4 p-4'>
                <div
                  ref={mainImageRef}
                  className='relative flex min-h-[350px] w-full flex-[3] items-center justify-center rounded-3xl md:min-h-[400px]'
                >
                  <Image
                    fill
                    src={`${product.image}`}
                    alt={product.name}
                    className='rounded-3xl object-cover'
                  />
                </div>
                {product.categories ? (
                  <>
                    {product.categories.map((category) => (
                      <div key={category.name}>
                        {category.name === 'main_color' ? (
                          <Colors
                            product={product}
                            mainColor={
                              productConfiguration?.selectedOptions.find(
                                (opt) => opt.category === 'main_color'
                              )?.key
                            }
                            shadeColor={
                              productConfiguration?.selectedOptions.find(
                                (opt) => opt.category === 'shade_color'
                              )?.key
                            }
                            onChange={onProductChange}
                          />
                        ) : category.name === 'shade_color' ? null : (
                          <OptionPicker
                            product={product}
                            category={category}
                            onChange={onProductChange}
                            selectedOption={productConfiguration?.selectedOptions
                              .filter((opt) => opt.category === category.name)
                              .map((opt) => opt.key)}
                          />
                        )}
                      </div>
                    ))}
                  </>
                ) : null}
              </div>
              <div className='flex-[2]'>
                <div className='sticky top-[100px] w-full'>
                  <div className='flex w-full flex-col gap-4 p-4'>
                    <AnimatePresence mode='wait'>
                      {isStickyImageVisible && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className='relative flex h-[200px] w-full rounded-3xl bg-red-400'
                        >
                          <Image
                            fill
                            src={`${product.image}`}
                            alt={product.name}
                            className='rounded-3xl object-cover'
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {productConfiguration && (
                      <Basket
                        product={product}
                        productConfiguration={productConfiguration}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}
      <Footer />
    </div>
  );
}
