'use client';
import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  getModelConfiguration,
  products,
  updateModelConfiguration,
} from '@/products/products';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChooseProduct from './components/chooseProduct';
import Image from 'next/image';
import SectionTitle from '../../../components/sections/title';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';
import { IModel, IProduct, IProductConfig } from '@/products/types';
import { useTranslations } from 'next-intl';
import Colors from './components/colors';
import Basket from './components/basket';
import { AnimatePresence, motion } from 'framer-motion';
import OptionPicker from './components/optionPicker';
import Modal from '@/components/utils/modal';
import ConfigurationForm from './components/ConfigurationForm';
import useConfig from './hook/useConfig';
import AnimatedPrice from './components/animatedPrice';
import Button from '@/components/atoms/button';
import ConfirmationModal from '@/components/ConfirmationModal';
import ModelSpecifications from '../bike-camper/components/modelSpecifications';
import Head from 'next/head';

export default function Configurator() {
  //State
  const [productConfiguration, setProductConfiguration] =
    useState<IProductConfig | null>(null);
  const [isStickyImageVisible, setIsStickyImageVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [configurationSent, setConfigurationSent] = useState(false);

  //Hooks
  const searchParams = useSearchParams();
  const productQuery = searchParams.get('product');
  const modelQuery = searchParams.get('model');

  const product: IProduct | null = useMemo(() => {
    return products.find((p) => p.key === productQuery) || null;
  }, [productQuery]);

  const model: IModel | null = useMemo(() => {
    if (!product) return null;
    return product?.models?.find((m) => m.key === modelQuery) || null;
  }, [modelQuery, product]);

  useEffect(() => {
    if (product && model) {
      setProductConfiguration(getModelConfiguration(model));
    }
  }, [product, model]);

  const config = useConfig(productConfiguration, product, model);

  //Translation
  const tPage = useTranslations('pages.configurator');
  const tBasket = useTranslations('pages.configurator.basket');
  const tProduct = useTranslations('products');
  const tStatus = useTranslations('forms.status');

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
        rootMargin: '0px 0px -50px 0px',
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

  const onUpdateConfig = (category: string, option: string) => {
    if (!productConfiguration || !product || !model) return;
    const updatedConfig = updateModelConfiguration(
      productConfiguration,
      model,
      category,
      option
    );
    setProductConfiguration(updatedConfig);
  };

  return (
    <div className='min-h-screen bg-bg-2'>
      <Head>
        <title>Nirvana Van - Configurator</title>
        <meta name='description' content='Nirvana Van - Configurator' />
      </Head>
      <Header fixedMenu />

      {!product ? <ChooseProduct /> : null}
      {product && !model ? (
        <ModelSpecifications
          productKey={product.key}
          title={tProduct(`${product.key}.name`)}
        />
      ) : null}
      {product && model ? (
        <>
          <Section className='bg-white'>
            <Container className='flex-col'>
              <SectionTitle title={`${tPage('subtitle')}`} className='mb-4' />
              <div className='relative block h-auto w-full'>
                <div className='mx-auto flex w-full justify-between gap-x-6'>
                  <div className='flex w-full flex-col gap-4'>
                    <div
                      ref={mainImageRef}
                      className='relative flex min-h-[350px] w-full flex-[3] items-center justify-center rounded-3xl md:min-h-[400px]'
                    >
                      <Image
                        fill
                        src={`${model.image}`}
                        alt={tProduct(`${product.key}.name`)}
                        className='rounded-3xl object-cover'
                      />
                    </div>
                    {model.configurator ? (
                      <>
                        {model.configurator.map((category) => {
                          if (category.name === 'shade_color') return null;
                          return (
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
                                  onChange={onUpdateConfig}
                                />
                              ) : (
                                <OptionPicker
                                  product={product}
                                  category={category}
                                  onChange={onUpdateConfig}
                                  // @ts-ignore
                                  selectedOption={productConfiguration?.selectedOptions
                                    .filter(
                                      (opt) => opt.category === category.name
                                    )
                                    .map((opt) => opt.key)}
                                />
                              )}
                            </div>
                          );
                        })}
                      </>
                    ) : null}
                  </div>
                  <div className='relative hidden min-w-[20rem] flex-col items-start md:flex'>
                    <div className='sticky top-[7rem] flex w-full flex-col items-start gap-y-6'>
                      <div className='flex w-full flex-col gap-4'>
                        <AnimatePresence mode='wait'>
                          {isStickyImageVisible && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className='relative flex h-[150px] w-full rounded-3xl'
                            >
                              <Image
                                fill
                                src={`${model.image}`}
                                alt={tProduct(`${product.key}.name`)}
                                className='rounded-3xl object-cover'
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {productConfiguration && (
                          <Basket
                            product={product}
                            config={config}
                            productConfiguration={productConfiguration}
                            onSend={() => setIsModalOpen(true)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            {productConfiguration ? (
              <>
                <div className='p sticky bottom-0 flex h-20 w-full items-center justify-between border-t-2 border-bg-2 bg-white px-4 py-2 md:hidden'>
                  <div className='flex flex-col'>
                    <Typography className='font-medium' variant='body2'>
                      {tBasket('yourConfiguration')}
                    </Typography>
                    <Typography
                      variant='body1'
                      className={`font-acorn font-medium text-${product.color}`}
                    >
                      <AnimatedPrice price={productConfiguration.totalPrice} />
                      {` TTC`}
                    </Typography>
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        console.log('click');
                        const basketElement =
                          document.getElementById('mobile-basket');
                        console.log(basketElement);
                        if (basketElement) {
                          const offset = 5 * 16;
                          const elementPosition =
                            basketElement.getBoundingClientRect().top +
                            window.scrollY;

                          window.scrollTo({
                            top: elementPosition - offset,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      color={product.color}
                    >
                      Détails
                    </Button>
                  </div>
                </div>
              </>
            ) : null}
          </Section>
        </>
      ) : null}
      {product && productConfiguration ? (
        <div id={'mobile-basket'} className='md:hidden'>
          <Basket
            product={product}
            config={config}
            productConfiguration={productConfiguration}
            onSend={() => setIsModalOpen(true)}
          />
        </div>
      ) : null}
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title={tPage('receiveEmailQuote')}
      >
        <ConfigurationForm
          color={product?.color || 'orange'}
          onSuccess={() => {
            setConfigurationSent(true);
            setIsModalOpen(false);
          }}
          product={product}
          model={model}
          productConfiguration={productConfiguration}
          config={config}
        />
      </Modal>
      <ConfirmationModal
        open={configurationSent}
        title={tStatus('quoteSent')}
        onClose={() => setConfigurationSent(false)}
      />
    </div>
  );
}
