'use client';
import React from 'react';
import Container from '../atoms/container';
import Image, { StaticImageData } from 'next/image';
import Button from '../atoms/button';
import Link from 'next/link';
import Transition from '../atoms/transition';
import Section from '../atoms/section';
import SectionTitle from '../sections/sectionTitle';

import modelTd from '../../../../../public/model_td.png';
import modelKv from '../../../../../public/model_kv.png';
import Typography from '../atoms/typography';

const Model = ({
  title,
  description,
  image,
  color,
  url,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  color: 'orange' | 'green';
  url: string;
}) => {
  return (
    <Link
      href={url}
      className='relative flex h-96 w-full flex-col items-center justify-between rounded-3xl bg-slate-200 px-4 py-8 text-center text-white'
    >
      <div className='z-10'>
        <Transition>
          <Typography variant='h3' className='font-acorn font-medium'>
            {title}
          </Typography>
        </Transition>
        <p className='font-lg my-3 mt-2 font-kobe11 text-2xl'>{description}</p>
      </div>
      <div className='z-10'>
        <Button color={color} size='small'>
          Découvrir
        </Button>
      </div>

      <Image
        src={image}
        alt={title}
        layout='fill'
        objectFit='cover'
        className='rounded-3xl'
      />
    </Link>
  );
};

export default function Models() {
  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title={`Pour quel type d'aventure ?`} />
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <Model
            title='Teardrop'
            description="Pour les voyageurs qui aiment l'aventure"
            image={modelTd}
            color='orange'
            url='/teardrop'
          />
          <Model
            title='Trotty'
            description='Pour les fans de vélo'
            image={modelKv}
            color='green'
            url='/trotty'
          />
        </div>
      </Container>
    </Section>
  );
}
