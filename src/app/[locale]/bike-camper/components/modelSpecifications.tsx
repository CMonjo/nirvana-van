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
import { getPrice } from '@/utils/price';
import { useRouter } from 'next/navigation';

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
export default function ModelSpecifications({
  productKey,
  title,
}: {
  productKey: string;
  title: string;
}) {
  const product = products.find((product) => product.key === productKey);
  const tProduct = useTranslations(`products.${productKey}.models`);
  const tSpec = useTranslations(`products.specifications`);
  const tActions = useTranslations('actions');
  const router = useRouter();

  if (!product) return null;
  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={title} />
        <div className='flex w-full flex-col gap-8 md:flex-row'>
          {product?.models?.map((model) => (
            <div
              className='flex w-full cursor-pointer flex-col rounded-xl bg-grey'
              key={model.key}
              onClick={() => {
                router.push(
                  `/configurator?product=${productKey}&model=${model.key}`
                );
              }}
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
                      ({getPrice(model.basePrice)})
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
                  <Button
                    color={product?.color}
                    onClick={() => {
                      router.push(
                        `/configurator?product=${productKey}&model=${model.key}`
                      );
                    }}
                  >
                    {tActions('configure')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
