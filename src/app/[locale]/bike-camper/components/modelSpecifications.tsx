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
import ScaleIcon from '@mui/icons-material/Scale';

const SpecItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='flex flex-col gap-0'>
      <Typography className='font-medium'>{title}</Typography>
      <Typography variant='body2'>{description}</Typography>
    </div>
  );
};
export default function ModelSpecifications() {
  const tPage = useTranslations('pages.bike-camper.productSpecifications');

  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={'Découvrez nos modèles'} />
        <div className='flex w-full flex-col items-center gap-8  md:flex-row'>
          <div className='flex w-full flex-col justify-center rounded-xl bg-grey'>
            <div className='relative h-[300px] w-full rounded-lg'>
              <Image
                src='/model_kv.png'
                alt='Model Specifications'
                fill
                className='rounded-2xl object-cover'
              />
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <Typography variant='h3' className='font-medium'>
                    La Kulba
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
              <div className='flex flex-col gap-2'>
                <SpecItem
                  title='Matériaux coque'
                  description='La grosse bite a lulu'
                />
                <SpecItem
                  title='Matériaux châssis'
                  description='La grosse bite a lulu'
                />
                <SpecItem
                  title='Dimensions ext'
                  description='La grosse bite a lulu'
                />

                <SpecItem
                  title='Dimensions matelas'
                  description='La grosse bite a lulu'
                />
                <SpecItem title='Poids' description='La grosse bite a lulu' />
                <SpecItem
                  title='Isolation'
                  description='La grosse bite a lulu'
                />
              </div>
              <div>
                <Button color='orange'>Configurer</Button>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col justify-center rounded-xl bg-grey'>
            <div className='relative h-[300px] w-full rounded-lg'>
              <Image
                src='/model_kv.png'
                alt='Model Specifications'
                fill
                className='rounded-2xl object-cover'
              />
            </div>
            <div className='flex flex-col gap-4 p-6'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                  <Typography variant='h3' className='font-medium'>
                    La Kool
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
              <div className='flex flex-col gap-2'>
                <SpecItem
                  title='Matériaux coque'
                  description='La grosse bite a lulu'
                />
                <SpecItem
                  title='Matériaux châssis'
                  description='La grosse bite a lulu'
                />
                <SpecItem
                  title='Dimensions ext'
                  description='La grosse bite a lulu'
                />

                <SpecItem
                  title='Dimensions matelas'
                  description='La grosse bite a lulu'
                />
                <SpecItem title='Poids' description='La grosse bite a lulu' />
                <SpecItem
                  title='Isolation'
                  description='La grosse bite a lulu'
                />
              </div>
              <div>
                <Button color='orange'>Configurer</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
