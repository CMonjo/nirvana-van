'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import { useTranslations } from 'next-intl';
import { Divider } from '@mui/material';
import Button from '@/components/atoms/button';
import { products } from '@/products/products';

const product = products.find((product) => product.key === 'bike-camper');

const SpecItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='flex flex-col justify-between gap-1 md:flex-row'>
      <Typography className='font-medium'>{title}</Typography>
      <Typography variant='body2'>{description}</Typography>
    </div>
  );
};
export default function ModelSpecifications() {
  const tPage = useTranslations(`pages.${product?.key}.modelsSpecifications`);
  const tProduct = useTranslations(`products.${product?.key}.models`);
  const tSpec = useTranslations(`products.specifications`);
  const tActions = useTranslations('actions');

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={tPage('title')} />
        <div className='flex w-full flex-col gap-8 md:flex-row'>
          {product?.models?.map((model) => (
            <div
              className='flex w-full flex-col rounded-xl bg-grey'
              key={model.key}
            >
              <div className='relative h-[300px] w-full rounded-lg'>
                <Image
                  src={model.image}
                  alt={`${model.key} model specifications`}
                  fill
                  className='rounded-2xl object-cover'
                />
              </div>
              <div className='flex flex-col gap-4 p-6'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <Typography variant='h3' className='font-medium'>
                      {tProduct(`${model.key}.name`)}
                    </Typography>
                    <Typography variant='body2' className='font-medium'>
                      ({model.basePrice}€)
                    </Typography>
                  </div>
                  <Typography>
                    {tProduct(`${model.key}.description`)}
                  </Typography>
                </div>
                <Divider />
                <div className='flex flex-col gap-4'>
                  {model?.specifications?.map((spec) => (
                    <SpecItem
                      key={model.key + spec}
                      title={tSpec(spec)}
                      description={tProduct(
                        `${model.key}.specifications.${spec}`
                      )}
                    />
                  ))}
                </div>
                <div className='flex items-end'>
                  <Button color={product?.color}>
                    {tActions('configure')}
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* <div className='flex w-full flex-col justify-center rounded-xl bg-grey'>
            <div className='relative h-[300px] w-full rounded-lg'>
              <Image
                src='/bike-camper/hero.JPG'
                alt='Model Specifications'
                fill
                className='rounded-2xl object-cover'
              />
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <Typography variant='h3' className='font-medium'>
                    Premium
                  </Typography>
                  <Typography variant='body2' className='font-medium'>
                    (4000€)
                  </Typography>
                </div>
                <Typography>
                  Ceci est une petite description de la Kulba. Je ne sais pas
                  quoi dire mais peut-être développer sur le fait que ce soit le
                  modèle premium
                </Typography>
              </div>
              <Divider />
              <div className='flex flex-col gap-4'>
                <SpecItem
                  title='Matériaux coque'
                  description='Fibre de verre'
                />
                <SpecItem title='Matériaux châssis' description='Aluminium' />
                <SpecItem
                  title='Isolation'
                  description='Polyester extrudé 20mm'
                />
                <SpecItem
                  title='Dimensions extérieur'
                  description='208 x 95cm'
                />

                <SpecItem title='Dimensions matelas' description='200 x 73cm' />
                <SpecItem title='Poids à vide' description='54kg' />
              </div>
              <div>
                <Button color={product?.color}>{tActions('configure')}</Button>
              </div>
            </div>
          </div> */}
          {/* <div className='flex w-full flex-col justify-center rounded-xl bg-grey'>
            <div className='relative h-[300px] w-full rounded-lg'>
              <Image
                src='/bike-camper/model-eco.jpeg'
                alt='Model Specifications'
                fill
                className='rounded-2xl object-cover'
              />
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <Typography variant='h3' className='font-medium'>
                    Eco
                  </Typography>
                  <Typography variant='body2' className='font-medium'>
                    (1000€)
                  </Typography>
                </div>
                <Typography>
                  Ceci est une petite description de la Kool. Je ne sais pas
                  quoi dire mais peut-être développer sur le fait que ce soit le
                  modèle premium
                </Typography>
              </div>
              <Divider />
              <div className='flex flex-col gap-4'>
                <SpecItem
                  title='Matériaux coque'
                  description='Polypropylène alvéolaire'
                />
                <SpecItem title='Matériaux châssis' description='Acier' />
                <SpecItem title='Isolation' description='Armaflex 10mm' />
                <SpecItem
                  title='Dimensions extérieur'
                  description='208 x 95cm'
                />

                <SpecItem title='Dimensions matelas' description='200 x 73cm' />
                <SpecItem title='Poids à vide' description='67kg' />
              </div>
              <div>
                <Button color={product?.color}>{tActions('configure')}</Button>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </Section>
  );
}
